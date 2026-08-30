export default function PartnersSection() {
  const partners = [
    {
      name: "LASEPA",
      logo: "/img/lasepa.avif",
      alt: "LASEPA - Lagos State Environmental Protection Agency",
    },
    {
      name: "EPRON",
      logo: "/img/epron.avif",
      alt: "EPRON - Extended Producer Responsibility Organisation Nigeria",
    },
    {
      name: "Federal Ministry of Environment",
      short: "FMEnv",
      logo: "/img/environment.avif",
      alt: "Federal Ministry of Environment, Nigeria",
    },
    {
      name: "NESREA",
      logo: "/img/neserea.avif",
      alt: "NESREA - National Environmental Standards and Regulations Enforcement Agency",
    },
    {
      name: "LAWMA",
      logo: "/img/lawma.avif",
      alt: "LAWMA - Lagos Waste Management Authority",
    },
  ];

  return (
    <section
      className="border-y border-zinc-100 bg-white"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        {/* Eyebrow + heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium tracking-wide text-white">
            Regulatory alignment
          </p>
          <h2
            id="partners-heading"
            className="mt-4 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
          >
            Recognised within Nigeria’s regulatory landscape
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            We operate in line with applicable mandates and collaborate where
            required for compliant e-waste handling.
          </p>
        </div>

        {/* Logo wall - quiet, precise, no colour clash */}
        <div
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5"
          role="list"
          aria-label="Regulatory partners and certifications"
        >
          {partners.map((partner) => {
            const isLawma = partner.name === "LAWMA";
            return (
              <div
                key={partner.name}
                role="listitem"
                className="group flex min-h-24 flex-col items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50/60 px-4 py-6 text-center transition-colors hover:border-zinc-200 hover:bg-white"
              >
                <img
                  src={isLawma ? "/img/lawma-166w.avif" : partner.logo}
                  srcSet={
                    isLawma
                      ? "/img/lawma-166w.avif 166w, /img/lawma-332w.avif 332w"
                      : undefined
                  }
                  sizes={isLawma ? "96px" : undefined}
                  alt={partner.alt}
                  width={96}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100"
                />
                <p className="mt-3 text-xs font-medium tracking-wide text-zinc-700">
                  {"short" in partner && partner.short
                    ? partner.short
                    : partner.name}
                </p>
                {"short" in partner && partner.short ? (
                  <span className="sr-only">{partner.name}</span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
