export default function HeroSection() {
    const stats = [
        {
            value: "3,242.7+",
            label: "Tons of E-Waste Recovered",
            ariaLabel: "Over 3,242 tons of electronic waste recovered"
        },
        {
            value: "1,000+",
            label: "CO2 Emissions Avoided (Tons)",
            ariaLabel: "Over 1,000 tons of CO2 emissions avoided"
        },
        {
            value: "3,242.7+",
            label: "Tons Diverted for Reuse",
            ariaLabel: "Over 3,242 tons diverted for reuse"
        }
    ];

    return (
        <section
            className="bg-[url('/img/hero.png')] bg-cover bg-center relative"
            aria-labelledby="hero-heading"
        >
            <div className="max-w-4xl mx-auto px-4 xl:px-0 pt-24 sm:pt-32 md:pt-40 space-y-6">
                {/* Main Heading - H1 for SEO */}
                <h1
                    id="hero-heading"
                    className="font-semibold text-white text-center text-2xl sm:text-3xl md:text-4xl"
                >
                    Advanced Technology for <br aria-hidden="true" />
                    Responsible E-waste Management
                </h1>

                {/* Supporting Description */}
                <p className="text-white text-base sm:text-lg text-center max-w-2xl mx-auto">
                    W3 Eco-friendly Ltd provides secure, compliant, and technology-driven solutions for electronic
                    waste collection, data sanitization, and certified recycling in Nigeria.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="text-white text-lg text-center max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
                    <a
                        href="/contact-us"
                        className="w-full sm:w-auto px-6 py-3 bg-[#064E3B] text-white text-base font-medium rounded-lg hover:bg-[#053527] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                        aria-label="Contact our e-waste management experts"
                    >
                        Contact Expert
                    </a>
                    <a
                        href="/contact-us#pickup"
                        className="w-full sm:w-auto px-6 py-3 bg-white text-[#064E3B] text-base font-medium rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#064E3B]/50"
                        aria-label="Request e-waste pickup service"
                    >
                        Request Pickup
                    </a>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="px-4 xl:px-0 bg-gradient-to-bl from-navy-blue to-neutral-950 mt-30">
                <div className="mx-auto max-w-5xl">
                    <div className="p-4 rounded-xl">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-10 gap-x-12"
                            role="list"
                            aria-label="Environmental impact statistics"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    role="listitem"
                                    aria-label={stat.ariaLabel}
                                    className={`relative text-center ${
                                        index === 0
                                            ? ''
                                            : 'before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-light-blue before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0'
                                    }`}
                                >
                                    <div>
                                        <h3 className="text-lg sm:text-2xl font-medium text-white">
                                            {stat.value}
                                        </h3>
                                        <p className="mt-1 text-sm sm:text-base text-neutral-400">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}