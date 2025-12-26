const CTASection = () => {
    return (
        <section className="bg-[url('/cta.png')] bg-cover bg-center relative">
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="space-y-8 sm:space-y-10 py-12 max-w-[840px] mx-auto relative text-white px-4 sm:px-6">
                {/* Content */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center z-10 relative">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-medium px-2">
                        Ready to Advance Your Sustainability Goals
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal text-center max-w-[700px] mx-auto px-2">
                        Join organizations committed to responsible technology management, traceability, and compliance
                        excellence.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <a href="#" className="w-full sm:w-auto sm:min-w-[240px] md:min-w-[260px] lg:w-[272.8px] px-6 sm:px-8 md:px-[10.04px] py-4 sm:py-5 md:py-[11px] h-auto flex justify-center items-center rounded-lg bg-primary text-white hover:bg-[#0a3322] active:bg-[#051a0f] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                        <span className="text-base sm:text-lg leading-relaxed font-normal">
                          Get Started
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;