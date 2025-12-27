import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import SEO from "../components/SEO.tsx";
import {useState} from "react";
import * as React from "react";
import {ContactPageSchema} from "../components/StructuredData.tsx";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            // Reset form
            setFormData({ name: '', email: '', company: '', message: '' });
        }, 1500);
    };

    return (
        <>
            <SEO
                title="Contact Us - Get in Touch with W3 Eco Friendly"
                description="Contact W3 Eco Friendly for sustainable e-waste management solutions. Located in Ikorodu, Lagos. Email: W3@Ecofriendly.com | Phone: +234-807-787-5562"
                keywords="contact W3 Eco Friendly, e-waste management contact, sustainable recycling Nigeria, environmental services Lagos, get in touch"
                url="/contact-us"
            />
            <ContactPageSchema />

            <div className="bg-secondary-foreground">
                <Header />

                <main id="main-content">
                    {/* Contact Form Section */}
                    <section
                        className="max-w-[36rem] mx-auto pt-24 space-y-6 p-4"
                        aria-labelledby="contact-form-heading"
                    >
                        <article className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 bg-white/40 rounded-[20px]">
                            <header className="space-y-3">
                                <h1 id="contact-form-heading" className="text-lg font-semibold text-center px-4">
                                    Get In Touch with Our Team
                                </h1>
                                <p className="text-base text-center text-gray-700">
                                    Our support team is always available to provide assistance and guidance for your e-waste management needs.
                                </p>
                            </header>

                            <form
                                className="max-w-[685px] w-full mx-auto space-y-6"
                                onSubmit={handleSubmit}
                                aria-label="Contact form"
                            >
                                {/* Name Field */}
                                <div className="w-full space-y-[14px]">
                                    <label
                                        htmlFor="contact-name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Name <span className="text-red-500" aria-label="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm focus:border-transparent focus:ring-2 focus:ring-[#0F5132] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Enter your full name"
                                        required
                                        aria-required="true"
                                        autoComplete="name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="w-full space-y-[14px]">
                                    <label
                                        htmlFor="contact-email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Email Address <span className="text-red-500" aria-label="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm focus:border-transparent focus:ring-2 focus:ring-[#0F5132] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="your.email@example.com"
                                        required
                                        aria-required="true"
                                        autoComplete="email"
                                    />
                                </div>

                                {/* Company Field */}
                                <div className="w-full space-y-[14px]">
                                    <label
                                        htmlFor="contact-company"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Company <span className="text-gray-500 text-xs">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm focus:border-transparent focus:ring-2 focus:ring-[#0F5132] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Your company name"
                                        autoComplete="organization"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="w-full space-y-[14px]">
                                    <label
                                        htmlFor="contact-message"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Message <span className="text-red-500" aria-label="required">*</span>
                                    </label>
                                    <div className="w-full space-y-3">
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm focus:border-transparent focus:ring-2 focus:ring-[#0F5132] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                            rows={6}
                                            placeholder="Tell us how we can help you with e-waste management or recycling services..."
                                            required
                                            aria-required="true"
                                            minLength={10}
                                        ></textarea>
                                        <p className="text-xs text-gray-500">
                                            Please provide details about your inquiry (minimum 10 characters)
                                        </p>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="max-w-[472px] mx-auto pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-4 py-3 inline-flex w-full justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                                        aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg" role="alert">
                                        <p className="text-sm text-green-800 text-center">
                                            ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                        </p>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                                        <p className="text-sm text-red-800 text-center">
                                            ✗ Something went wrong. Please try again or contact us directly.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </article>
                    </section>

                    {/* Contact Information Section */}
                    <section
                        className="max-w-[400px] mx-auto space-y-6 p-4 sm:p-6"
                        aria-labelledby="visit-heading"
                    >
                        <h2 id="visit-heading" className="font-bold text-2xl text-center">
                            Prefer a Visit Approach?
                        </h2>

                        {/* Address */}
                        <address className="text-base text-gray-700 text-center not-italic">
                            <strong className="sr-only">Our Office Address:</strong>
                            Suit 73 & 74, Block D, Ipakodo Shopping Complex
                            Ikorodu, Lagos State<br />
                            Nigeria
                        </address>

                        {/* Contact Details */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                            <a
                                href="mailto:W3@Ecofriendly.com"
                                className="text-sm text-gray-700 hover:text-primary transition-colors focus:outline-none focus:underline inline-flex items-center gap-2"
                                aria-label="Send us an email"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                W3@Ecofriendly.com
                            </a>

                            <a
                                href="tel:+2348077875562"
                                className="text-sm text-gray-700 hover:text-primary transition-colors focus:outline-none focus:underline inline-flex items-center gap-2"
                                aria-label="Call us"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +234 807 787 5562
                            </a>
                        </div>

                        {/* Business Hours */}
                        <div className="pt-4 border-t border-gray-200">
                            <h3 className="text-sm font-semibold text-center mb-2">Business Hours</h3>
                            <p className="text-sm text-gray-600 text-center">
                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                <span className="text-gray-500">Weekends: Closed</span>
                            </p>
                        </div>

                        {/* Map Link */}
                        <div className="pt-2">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Ipakodo+Shopping+Complex+Ikorodu+Lagos+Nigeria"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Get directions to our office on Google Maps"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Get Directions
                            </a>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default ContactUs;