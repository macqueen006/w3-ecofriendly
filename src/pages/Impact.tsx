import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { ImpactPageSchema } from "@/components/StructuredData";
import { Link } from "react-router";
import { seoConfig } from "@/config/seo";

const Impact = () => {
  const seo = seoConfig["/impact"];
  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url={seo.url}
        image="https://w3eco-friendly.com/img/impact-hero.avif"
      />
      <ImpactPageSchema />
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <section className="relative flex min-h-[540px] flex-col justify-center bg-zinc-900 pt-8" aria-labelledby="hero-heading">
          <img
            src="/img/impact-hero.avif"
            alt=""
            aria-hidden="true"
            width={1440}
            height={900}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" aria-hidden="true" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:px-8 lg:py-14">
            <div className="w-full space-y-6 lg:w-1/2">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur">
                Our Environmental Impact
              </span>
              <h1 id="hero-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Measurable impact. Verifiable outcomes.
              </h1>
              <p className="max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                W3 Eco Friendly Ltd delivers measurable environmental and social value by enabling responsible electronic-waste management
                across Nigeria.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a3d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Request Pickup
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Learn more
                </Link>
              </div>
              <p className="text-xs leading-5 text-white/60">
                Statistics below are shown as provided. Owner to verify figures, methodology and time period before they are treated as
                published claims.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-1/2 lg:grid-cols-1 lg:justify-items-end">
              {[
                { value: "52,847", label: "Electronics Recycled", icon: "/img/trash-icon.svg" },
                { value: "56", label: "Certificates Issued", icon: "/img/certificate-icon.svg" },
                { value: "8.5T", label: "Metals Recovered", icon: "/img/metal-can-icon.svg" },
              ].map((card) => (
                <article
                  key={card.label}
                  className="flex h-36 w-full max-w-sm items-center justify-center rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"
                >
                  <div className="flex flex-col items-center gap-2 text-white">
                    <img src={card.icon} alt="" aria-hidden="true" width={36} height={36} className="h-9 w-9 object-contain" loading="lazy" />
                    <h2 className="text-xl font-bold">{card.value}</h2>
                    <p className="text-sm text-white/80">{card.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#061512] px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="why-matters-heading">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white">
                <img src="/img/sparkle-white.avif" alt="" aria-hidden="true" width={20} height={20} className="h-5 w-5" loading="lazy" />
                Why It Matters
              </span>
              <h2 id="why-matters-heading" className="mt-4 text-xl font-medium text-white/80 sm:text-2xl">
                Every device we recycle contributes to a cleaner environment.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  img: "/img/impact-1.avif",
                  title: "Prevent Toxic Pollution",
                  desc: "Electronic waste contains hazardous substances that pose risks to people and ecosystems when handled informally.",
                },
                {
                  img: "/img/impact-2.avif",
                  title: "Conserve Natural Resources",
                  desc: "Recycling recovers materials such as metals and glass, reducing the need for virgin extraction.",
                },
                {
                  img: "/img/impact-3.avif",
                  title: "Reduce Carbon Footprint",
                  desc: "Extending the lifecycle of devices and recovering materials avoids emissions from new production.",
                },
              ].map((item) => (
                <article key={item.title} className="space-y-4">
                  <figure className="mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl">
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover" loading="lazy" width={400} height={400} decoding="async" />
                  </figure>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-white sm:text-base">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/70">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0D3924] px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="partners-heading">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="partners-heading" className="text-xl font-medium text-white sm:text-2xl lg:text-3xl">
              Trusted by organisations that take compliance seriously
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">Partnering with organisations committed to responsibility.</p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a3d26]"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Impact;
