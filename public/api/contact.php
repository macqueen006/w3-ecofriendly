<?php
declare(strict_types=1);

// W3 Eco Friendly - Contact endpoint via Resend
// Deploy to cPanel as public_html/api/contact.php
// Requires env: RESEND_API_KEY (set in cPanel env or .env)
// Optional env: RESEND_FROM, RESEND_TO, RESEND_TO_SECONDARY, ALLOWED_ORIGIN

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');

// CORS - allow same origin + configured ALLOWED_ORIGIN
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigin = getenv('ALLOWED_ORIGIN') ?: 'https://w3eco-friendly.com';
$allowedOrigins = [$allowedOrigin, 'https://www.w3eco-friendly.com', 'http://localhost:5173', 'http://localhost:4173'];
if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed. Use POST.']);
    exit;
}

// Basic rate limit by IP - 5 requests per 10 minutes (file in temp dir)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/w3_contact_rate_' . md5($ip) . '.json';
$now = time();
$window = 600;
$maxRequests = 5;
$timestamps = [];
if (is_file($rateFile)) {
    $raw = file_get_contents($rateFile);
    $decoded = json_decode($raw ?: '[]', true);
    if (is_array($decoded)) {
        $timestamps = array_values(array_filter($decoded, static fn($t) => is_int($t) && ($now - $t) < $window));
    }
}
if (count($timestamps) >= $maxRequests) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests. Please try again in a few minutes.']);
    exit;
}
$timestamps[] = $now;
@file_put_contents($rateFile, json_encode($timestamps), LOCK_EX);

// Read JSON body (supports application/json and form fallback)
$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody ?: '', true);
if (!is_array($data)) {
    $data = $_POST;
}
if (!is_array($data)) {
    $data = [];
}

// Honeypot - if frontend sends _hp and it is filled, treat as bot
if (!empty($data['_hp']) && is_string($data['_hp']) && trim($data['_hp']) !== '') {
    http_response_code(200);
    echo json_encode(['ok' => true, 'message' => 'Enquiry received.']);
    exit;
}

function field_str(array $arr, string $key): string
{
    $v = $arr[$key] ?? '';
    return is_string($v) ? trim($v) : '';
}

$name = field_str($data, 'name');
$organisation = field_str($data, 'organisation');
$email = field_str($data, 'email');
$phone = field_str($data, 'phone');
$enquiryType = field_str($data, 'enquiryType');
$message = field_str($data, 'message');

if ($enquiryType === '') {
    $enquiryType = 'pickup';
}
$allowedTypes = ['pickup', 'data-destruction', 'compliance', 'general'];
if (!in_array($enquiryType, $allowedTypes, true)) {
    $enquiryType = 'general';
}

$strLen = static function (string $s): int {
    return function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : strlen($s);
};
$errors = [];
if ($name === '' || $strLen($name) < 2) {
    $errors['name'] = 'Please enter your name (at least 2 characters).';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}
if ($message === '' || $strLen($message) < 10) {
    $errors['message'] = 'Please enter at least 10 characters.';
}
if ($strLen($name) > 120) {
    $errors['name'] = 'Name is too long (max 120 characters).';
}
if ($strLen($message) > 5000) {
    $errors['message'] = 'Message is too long (max 5000 characters).';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Validation failed.', 'fields' => $errors]);
    exit;
}

// Resolve env - try getenv, $_ENV, $_SERVER for cPanel compatibility
function env_str(string $key, string $fallback = ''): string
{
    $v = getenv($key);
    if ($v !== false && $v !== '') {
        return trim((string) $v);
    }
    if (isset($_ENV[$key]) && is_string($_ENV[$key]) && $_ENV[$key] !== '') {
        return trim($_ENV[$key]);
    }
    if (isset($_SERVER[$key]) && is_string($_SERVER[$key]) && $_SERVER[$key] !== '') {
        return trim($_SERVER[$key]);
    }
    return $fallback;
}

$resendApiKey = env_str('RESEND_API_KEY', '');
$resendFrom = env_str('RESEND_FROM', 'W3 Eco Friendly <noreply@w3eco-friendly.com>');
$resendTo = env_str('RESEND_TO', 'w3@w3eco-friendly.com');
$resendToSecondary = env_str('RESEND_TO_SECONDARY', '');
$siteUrl = env_str('SITE_URL', 'https://w3eco-friendly.com');

// Try loading .env file next to this script or one level up (local fallback, not required on cPanel)
if ($resendApiKey === '') {
    $envPaths = [__DIR__ . '/.env', dirname(__DIR__) . '/.env', __DIR__ . '/../.env'];
    foreach ($envPaths as $p) {
        if (is_file($p) && is_readable($p)) {
            $lines = file($p, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            if ($lines) {
                foreach ($lines as $line) {
                    $line = trim($line);
                    if ($line === '' || $line[0] === '#') {
                        continue;
                    }
                    if (strpos($line, '=') !== false) {
                        [$k, $v] = explode('=', $line, 2);
                        $k = trim($k);
                        $v = trim($v, " \t\"'");
                        if ($k === 'RESEND_API_KEY' && $v !== '') {
                            $resendApiKey = $v;
                            break 2;
                        }
                    }
                }
            }
        }
    }
}

if ($resendApiKey === '') {
    error_log('[w3-contact] RESEND_API_KEY not configured');
    http_response_code(503);
    echo json_encode([
        'ok' => false,
        'error' => 'Email service is not configured yet. Please contact us directly at w3@w3eco-friendly.com or +234 807 787 5562.',
        'code' => 'SERVICE_NOT_CONFIGURED',
    ]);
    exit;
}

// Build email content - escape for HTML
$esc = static fn(string $s): string => htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$typeLabels = [
    'pickup' => 'Request Pickup',
    'data-destruction' => 'Secure data destruction',
    'compliance' => 'Compliance and certification',
    'general' => 'General enquiry',
];
$typeLabel = $typeLabels[$enquiryType] ?? $enquiryType;

$subject = '[W3 Eco Friendly] ' . $typeLabel . ' - ' . $name;
if ($organisation !== '') {
    $subject .= ' (' . $organisation . ')';
}

$textBody = "New enquiry from w3eco-friendly.com\n"
    . "----------------------------------------\n"
    . "Name: {$name}\n"
    . "Organisation: " . ($organisation !== '' ? $organisation : '-') . "\n"
    . "Email: {$email}\n"
    . "Phone: " . ($phone !== '' ? $phone : '-') . "\n"
    . "Type: {$typeLabel} ({$enquiryType})\n"
    . "IP: {$ip}\n"
    . "Time: " . gmdate('Y-m-d H:i:s') . " UTC\n"
    . "----------------------------------------\n"
    . "Message:\n{$message}\n"
    . "----------------------------------------\n"
    . "Site: {$siteUrl}\n";

$htmlBody = '<!doctype html><html><body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#18181b">'
    . '<h2 style="margin:0 0 8px;font-size:18px;color:#0F5132">New enquiry - ' . $esc($typeLabel) . '</h2>'
    . '<p style="margin:0 0 16px;color:#52525b">Via w3eco-friendly.com contact form</p>'
    . '<table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden">'
    . '<tr><td style="background:#f4f4f5;font-weight:600;width:160px">Name</td><td>' . $esc($name) . '</td></tr>'
    . '<tr><td style="background:#f4f4f5;font-weight:600">Organisation</td><td>' . $esc($organisation !== '' ? $organisation : '-') . '</td></tr>'
    . '<tr><td style="background:#f4f4f5;font-weight:600">Email</td><td><a href="mailto:' . $esc($email) . '">' . $esc($email) . '</a></td></tr>'
    . '<tr><td style="background:#f4f4f5;font-weight:600">Phone</td><td>' . $esc($phone !== '' ? $phone : '-') . '</td></tr>'
    . '<tr><td style="background:#f4f4f5;font-weight:600">Type</td><td>' . $esc($typeLabel) . ' <span style="color:#71717a">(' . $esc($enquiryType) . ')</span></td></tr>'
    . '<tr><td style="background:#f4f4f5;font-weight:600">IP / Time</td><td>' . $esc($ip) . ' / ' . $esc(gmdate('Y-m-d H:i:s')) . ' UTC</td></tr>'
    . '</table>'
    . '<div style="margin-top:16px;padding:16px;background:#fafafa;border:1px solid #e4e4e7;border-radius:12px;white-space:pre-wrap">' . $esc($message) . '</div>'
    . '<p style="margin-top:16px;font-size:12px;color:#71717a">Reply directly to this email to respond to ' . $esc($name) . ' at ' . $esc($email) . '.</p>'
    . '</body></html>';

// Prepare Resend payload
$recipients = [$resendTo];
if ($resendToSecondary !== '') {
    $recipients[] = $resendToSecondary;
}

$payload = [
    'from' => $resendFrom,
    'to' => $recipients,
    'subject' => $subject,
    'html' => $htmlBody,
    'text' => $textBody,
    'reply_to' => $email,
    'headers' => [
        'X-Entity-Ref-ID' => bin2hex(random_bytes(8)),
    ],
];

$ch = curl_init('https://api.resend.com/emails');
if ($ch === false) {
    error_log('[w3-contact] curl_init failed');
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Email service unavailable. Please try again later.']);
    exit;
}
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $resendApiKey,
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    CURLOPT_TIMEOUT => 15,
    CURLOPT_CONNECTTIMEOUT => 8,
]);

$responseBody = curl_exec($ch);
$curlErr = curl_error($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($responseBody === false || $curlErr !== '') {
    error_log('[w3-contact] Resend curl error: ' . $curlErr);
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Failed to send enquiry. Please try again or contact us directly.', 'details' => $curlErr]);
    exit;
}

$resp = json_decode($responseBody, true);

if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode(['ok' => true, 'message' => 'Enquiry sent successfully. We will respond during business hours.', 'id' => $resp['id'] ?? null]);
    exit;
}

// Resend returned error - surface safe message, log detail
error_log('[w3-contact] Resend API error HTTP ' . $httpCode . ': ' . $responseBody);
$msg = 'Email service returned an error. Please try again or contact us directly.';
if (is_array($resp) && isset($resp['message']) && is_string($resp['message']) && $resp['message'] !== '') {
    // Do not leak API internals verbatim in production, but include short reason for debugging
    $msg = 'Email service error: ' . substr($resp['message'], 0, 200);
}
http_response_code(502);
echo json_encode(['ok' => false, 'error' => $msg, 'status' => $httpCode]);
