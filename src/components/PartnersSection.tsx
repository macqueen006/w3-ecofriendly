export default function PartnersSection() {
    const partners = [
        {
            name: "MTN",
            logo: "mtn.png",
            alt: "MTN logo"
        },
        {
            name: "LASEPA",
            logo: "lasepa.png",
            alt: "LASEPA logo"
        },
        {
            name: "NESEREA",
            logo: "neserea.png",
            alt: "NESEREA logo"
        },
        {
            name: "FEDERAL MINISTRY OF ENVIRONMENT",
            logo: "environment.png",
            alt: "Federal Ministry of Environment logo"
        }
    ];

    return (
        <section className="bg-[#DBF5EC] py-6">
            <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto space-y-4">
                {/* Header */}
                <h2 className="text-neutral-400 text-center text-xl sm:text-2xl lg:text-3xl font-medium">
                    Regulatory Partners
                </h2>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex justify-center sm:justify-start items-center gap-3 md:gap-[14px] p-4 rounded-lg hover:bg-white/50 transition-colors duration-200"
                        >
                            <img
                                src={partner.logo}
                                width="36"
                                height="36"
                                alt={partner.alt}
                                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 object-contain"
                            />
                            <p className="text-sm sm:text-base font-medium text-neutral-700 text-center sm:text-left">
                                {partner.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}