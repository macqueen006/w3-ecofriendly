import { Link } from "react-router";

const CTASection = () => {
  return (
    <section className="relative bg-zinc-900" aria-labelledby="cta-heading">
      <img src="/img/cta.avif" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl space-y-8 px-4 py-14 text-center text-white sm:px-6 sm:py-16">
        <div className="space-y-4">
          <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Ready to handle e-waste the right way?
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Partner with a provider built for compliance, traceability and verified recycling - from secure pickup to certification.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/contact-us"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-[#0a3d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
          >
            Request Pickup
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
          >
            Contact an Expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
