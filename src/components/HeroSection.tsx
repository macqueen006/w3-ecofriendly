import { Link } from "react-router";

export default function HeroSection() {
  const stats = [
    {
      value: "3,242.7+",
      label: "Tons Recovered",
      ariaLabel: "Over 3,242 tons of electronic waste recovered",
    },
    {
      value: "1,000+",
      label: "Emissions Avoided",
      ariaLabel: "Over 1,000 tons of CO2 emissions avoided",
    },
    {
      value: "3,242.7+",
      label: "Tons Diverted for Reuse",
      ariaLabel: "Over 3,242 tons diverted for reuse",
    },
  ];

  return (
    <section className="relative bg-zinc-900" aria-labelledby="hero-heading">
      <img
        src="/img/hero-1920w.avif"
        srcSet="/img/hero-640w.avif 640w, /img/hero-1280w.avif 1280w, /img/hero-1920w.avif 1920w, /img/hero.avif 2880w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        width={1920}
        height={1207}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-6 px-4 pt-12 sm:pt-16 md:pt-20">
        <h1
          id="hero-heading"
          className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
        >
          Secure collection. Certified recycling.
          <br aria-hidden="true" />
          Responsible e-waste management.
        </h1>

        <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-white/80 sm:text-base">
          W3 Eco Friendly Ltd delivers compliant, documented solutions for
          collection, data destruction and certified recycling - serving
          enterprises, government and institutions across Nigeria.
        </p>

        <div className="mx-auto flex max-w-2xl flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/contact-us"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
            aria-label="Request an e-waste pickup"
          >
            Request Pickup
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
            aria-label="Contact an expert"
          >
            Contact an Expert
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-10 px-4 pb-6 sm:pb-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 p-4 backdrop-blur sm:p-6">
          <div
            className="grid grid-cols-1 items-center gap-y-8 gap-x-12 sm:grid-cols-3"
            role="list"
            aria-label="Environmental impact statistics"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                role="listitem"
                aria-label={stat.ariaLabel}
                className={`relative text-center ${index !== 0 ? "border-t border-white/10 pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-12" : ""}`}
              >
                <p className="text-lg font-semibold text-white sm:text-2xl" aria-hidden="true">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-white/50">
            Illustrative throughput indicators - methodology and period to be
            verified before publication as a claim.
          </p>
        </div>
      </div>
    </section>
  );
}
