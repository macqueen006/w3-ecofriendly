import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { ContactPageSchema } from "@/components/StructuredData";
import { useState } from "react";
import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";

type EnquiryType = "pickup" | "data-destruction" | "compliance" | "general";

const ContactUs = () => {
  const seo = seoConfig["/contact-us"];
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    enquiryType: "pickup" as EnquiryType,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Please enter your name.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Please enter a valid email address.";
    if (!formData.message.trim() || formData.message.trim().length < 10) e.message = "Please enter at least 10 characters.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitStatus("submitting");
    setSubmitError("");
    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok || payload.ok === false) {
        const msg =
          (payload.error as string) ||
          (payload.fields ? "Please check the highlighted fields." : "Failed to send. Please try again or contact us directly.");
        if (payload.fields && typeof payload.fields === "object") {
          setErrors((prev) => ({ ...prev, ...(payload.fields as Record<string, string>) }));
        }
        setSubmitError(msg);
        setSubmitStatus("error");
        return;
      }
      setSubmitStatus("success");
      setFormData({ name: "", organisation: "", email: "", phone: "", enquiryType: "pickup", message: "" });
      setErrors({});
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setSubmitError(msg + " You can also reach us directly at " + siteConfig.contact.email);
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <SEO title={seo.title} description={seo.description} url={seo.url} />
      <ContactPageSchema />
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-zinc-50 focus:outline-none">
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Request a pickup or contact us</h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
              For enterprises and institutions - secure e-waste pickup, data destruction and compliance certification. We respond on business hours.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            {/* Form */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-zinc-900">Send an enquiry</h2>
              <p className="mt-1 text-sm text-zinc-600">Primary action: Request Pickup. We’ll route your request to operations.</p>

              <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-medium text-zinc-900">
                      Name <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "err-name" : undefined}
                    />
                    {errors.name && (
                      <p id="err-name" className="mt-1 text-xs text-red-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="c-org" className="block text-sm font-medium text-zinc-900">
                      Organisation
                    </label>
                    <input
                      id="c-org"
                      name="organisation"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Company or institution"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-medium text-zinc-900">
                      Email <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="you@company.com"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "err-email" : undefined}
                    />
                    {errors.email && (
                      <p id="err-email" className="mt-1 text-xs text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-medium text-zinc-900">
                      Phone
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="+234 …"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-type" className="block text-sm font-medium text-zinc-900">
                    Enquiry type
                  </label>
                  <select
                    id="c-type"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as EnquiryType })}
                    className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="pickup">Request Pickup</option>
                    <option value="data-destruction">Secure data destruction</option>
                    <option value="compliance">Compliance &amp; certification</option>
                    <option value="general">General enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-sm font-medium text-zinc-900">
                    Message <span className="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about volumes, locations and timing…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "err-message" : undefined}
                  />
                  {errors.message ? (
                    <p id="err-message" className="mt-1 text-xs text-red-600" role="alert">
                      {errors.message}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-zinc-500">At least 10 characters.</p>
                  )}
                </div>

                {/* Honeypot - hidden from users, bots may fill */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="c-hp">Leave this field empty</label>
                  <input id="c-hp" name="_hp" tabIndex={-1} autoComplete="off" />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a3d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitStatus === "submitting" ? "Sending..." : "Send enquiry"}
                </button>

                {submitStatus === "success" && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4" role="status" aria-live="polite">
                    <p className="text-sm font-medium text-emerald-900">Enquiry sent successfully.</p>
                    <p className="mt-1 text-sm leading-6 text-emerald-800">
                      Thank you - we have received your enquiry and will respond during business hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4" role="alert" aria-live="assertive">
                    <p className="text-sm font-medium text-amber-900">Could not send enquiry.</p>
                    <p className="mt-1 text-sm leading-6 text-amber-800">{submitError || "Something went wrong. Please try again."}</p>
                    <p className="mt-2 text-sm">
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-amber-900 underline">
                        {siteConfig.contact.email}
                      </a>{" "}
                      ·{" "}
                      <a href={`tel:${siteConfig.contact.phoneHref}`} className="font-medium text-amber-900 underline">
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </p>
                    <p className="mt-2 text-xs text-amber-700">
                      Endpoint: <code className="rounded bg-amber-100 px-1">POST /api/contact.php</code> - delivery via Resend. If this
                      persists, use email or phone directly.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-zinc-900">Visit or contact directly</h2>
                <address className="mt-3 not-italic text-sm leading-6 text-zinc-600">
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.locality}, {siteConfig.contact.address.region}
                  <br />
                  {siteConfig.contact.address.countryName}
                </address>
                <div className="mt-4 space-y-2 text-sm">
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 font-medium text-zinc-900 hover:text-primary">
                    {siteConfig.contact.email}
                  </a>
                  <a href={`tel:${siteConfig.contact.phoneHref}`} className="flex items-center gap-2 font-medium text-zinc-900 hover:text-primary">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div className="mt-4 border-t border-zinc-100 pt-4 text-xs leading-5 text-zinc-500">
                  <p className="font-medium text-zinc-700">Business hours</p>
                  <p>
                    {siteConfig.businessHours.days}: {siteConfig.businessHours.hours}
                    <br />
                    {siteConfig.businessHours.closedNote}
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ipakodo+Shopping+Complex+Ikorodu+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Get directions
                </a>
              </div>
              <div className="rounded-2xl bg-[#072416] p-6 text-white">
                <h3 className="text-sm font-semibold">What happens after you request a pickup?</h3>
                <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-6 text-white/80">
                  <li>We confirm scope, timing and access.</li>
                  <li>Secure collection with documentation.</li>
                  <li>Data destruction where required.</li>
                  <li>Certified recycling and reporting.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
