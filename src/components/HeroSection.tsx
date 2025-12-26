export default function HeroSection() {
    const stats = [
        {
            value: "3,242.7+",
            label: "Tons Recovered"
        },
        {
            value: "1,000+",
            label: "Emission Avoided"
        },
        {
            value: "3,242.7+",
            label: "Tons Diverted for reuse"
        }
    ];

    return (
        <div className="bg-[url('/hero.png')] bg-cover bg-center relative">
            <div className="max-w-4xl mx-auto px-4 xl:px-0 pt-24 sm:pt-32 md:pt-40 space-y-6">
                <h1 className="font-semibold text-white text-center text-2xl sm:text-3xl md:text-4xl">
                    Advanced Technology for <br /> Responsible E-waste Management
                </h1>

                <p className="text-white text-base sm:text-lg text-center max-w-2xl mx-auto">
                    W3 Eco-friendly ltd provides secure, compliant, and technology-driven solutions for electronic
                    waste collection, data sanitization.
                </p>

                <div className="text-white text-lg text-center max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
                    <button className="w-full sm:w-auto px-6 py-3 bg-[#064E3B] text-white text-base font-medium rounded-lg">
                        Contact Expert
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3 bg-white text-[#064E3B] text-base font-medium rounded-lg">
                        Request Pickup
                    </button>
                </div>
            </div>

            {/* cards */}
            <div className="px-4 xl:px-0 bg-gradient-to-bl from-navy-blue to-neutral-950 mt-30">
                <div className="mx-auto max-w-5xl">
                    <div className="p-4 rounded-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-10 gap-x-12">
                            {stats.map((stat, index) => (
                                <div key={index}
                                    className={`relative text-center ${
                                        index === 0
                                            ? ''
                                            : 'before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-light-blue before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0'
                                    }`}
                                >
                                    <div>
                                        <h3 className="text-lg sm:text-2xl font-medium text-white">{stat.value}</h3>
                                        <p className="mt-1 text-sm sm:text-base text-neutral-400">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}