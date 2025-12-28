export default function PartnersSection() {
    const partners = [
        {
            name: "LAWMA",
            logo: "/img/lawma.png",
            alt: "LAWMA- Trusted e-waste management partner"
        },
        {
            name: "LASEPA",
            logo: "/img/lasepa.png",
            alt: "LASEPA - Lagos State Environmental Protection Agency partner"
        },
        {
            name: "NESREA",
            logo: "/img/neserea.png",
            alt: "NESREA - National Environmental Standards and Regulations Enforcement Agency"
        },
        {
            name: "Federal Ministry of Environment",
            logo: "/img/environment.png",
            alt: "Federal Ministry of Environment Nigeria regulatory partner"
        }
    ];

    return (
        <section
            className="bg-[#DBF5EC] py-6"
            aria-labelledby="partners-heading"
        >
            <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto space-y-4">
                {/* Header */}
                <h2 id="partners-heading" className="text-neutral-400 text-center text-xl sm:text-2xl lg:text-3xl font-medium">
                    Regulatory Partners & Certifications
                </h2>

                {/* Partners Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
                    role="list"
                    aria-label="List of regulatory partners and certifications"
                >
                    {partners.map((partner, index) => (
                        <div key={index}
                            role="listitem"
                            className="flex justify-start items-center gap-3 md:gap-[14px] p-4 rounded-lg hover:bg-white/50 transition-colors duration-200"
                        >
                            <img
                                src={partner.logo}
                                width="36"
                                height="36"
                                alt={partner.alt}
                                loading="lazy"
                                className={`w-8 h-8 sm:w-9 sm:h-9 ${partner.name === 'LAWMA' ? 'md:w-[100px]' : 'md:w-10'} md:h-10 flex-shrink-0 object-contain`}
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