import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { OrganizationSchema, StatisticsSchema } from "@/components/StructuredData";
import { Link } from "react-router";
import { seoConfig } from "@/config/seo";

const About = () => {
  const seo = seoConfig["/about"];

  const profiles = [
    { id: 1, name: "Sodiq Adigun", title: "Managing Director", img: "frame-1.avif" },
    { id: 2, name: "Teri Wellington", title: "Executive secretary/ Law", img: "frame-2.avif" },
    { id: 3, name: "Zakari Dekina", title: "Head of surveillance", img: "frame-3.avif" },
    { id: 4, name: "Chineye Dijdh", title: "Sales Marketing Specialist", img: "frame-4.avif" },
    { id: 5, name: "Aibor Adewale Michael", title: "HSE Officer", img: "frame-5.avif" },
    { id: 6, name: "Adewale Oluwasegun", title: "Auditor", img: "frame-6.avif" },
  ];

  return (
    <>
      <SEO title={seo.title} description={seo.description} url={seo.url} image={seo.image} />
      <OrganizationSchema />
      <StatisticsSchema />
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Hero */}
        <section className="bg-[#061512] px-4 py-16 sm:py-20 lg:py-24" aria-labelledby="hero-heading">
          <div className="mx-auto max-w-4xl text-center">
            <h1 id="hero-heading" className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl lg:text-4xl">
              We are leading the future of sustainable e-waste management
            </h1>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 sm:items-start">
              <figure className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/img/generated-6.avif"
                  className="h-full w-full object-cover"
                  alt="Modern e-waste recycling facility"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={400}
                  height={400}
                />
              </figure>
              <article className="text-left text-base leading-7 text-white/80 sm:col-span-2">
                <p>
                  <strong className="font-semibold text-white">W3 Eco Friendly Ltd</strong> is an environmental-services company focused
                  on Nigeria&apos;s e-waste challenge. Through regulatory-aligned processes and secure operational systems, we offer
                  end-to-end solutions for collection, processing, traceability and compliance reporting.
                </p>
                <p className="mt-4">
                  We support enterprises, government organisations and institutions in meeting national environmental standards while
                  improving operational efficiency and reducing environmental risk.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#061D18] px-4 py-12 sm:py-16" aria-labelledby="story-heading">
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-10">
            <article className="flex flex-col justify-between rounded-2xl bg-primary p-6">
              <header className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2">
                <img src="/img/sparkle-white.avif" width={20} height={20} alt="" aria-hidden="true" className="h-5 w-5" loading="lazy" />
                <h2 id="story-heading" className="text-sm font-medium text-white">
                  Our Story
                </h2>
              </header>
              <p className="mt-6 text-sm leading-6 text-white/90">
                W3 Eco Friendly Ltd was founded on a clear observation: electronic waste in Nigeria was growing rapidly while formal
                recycling infrastructure and accountability mechanisms were not keeping pace. We set out to close that gap with secure,
                documented and compliant operations - serving organisations that need disposal they can trust and report on.
              </p>
            </article>

            <aside className="space-y-6">
              <figure className="relative h-64 overflow-hidden rounded-2xl">
                <img
                  src="/img/trash-truck.avif"
                  alt="Collection operations"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={256}
                />
              </figure>
              <blockquote className="rounded-xl bg-primary p-4 text-sm leading-6 text-white">
                We help governments, agencies and businesses handle technology lifecycles responsibly - with transparency, compliance and
                measurable environmental impact.
              </blockquote>
            </aside>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-[#064E3B] px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="vision-mission-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="vision-mission-heading" className="sr-only">
              Our Vision and Mission
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              <article className="space-y-4">
                <header className="inline-flex w-fit items-center gap-2 rounded-full bg-[#051C12] px-4 py-2">
                  <img src="/img/sparkle-white.avif" width={20} height={20} alt="" aria-hidden="true" className="h-5 w-5" />
                  <h3 className="text-sm font-medium text-white">Our Vision</h3>
                </header>
                <p className="text-base leading-7 text-white/90">
                  To advance sustainable electronic-waste management through secure operations, regulatory partnership and circular resource
                  optimisation - enabling safe, compliant and measurable outcomes.
                </p>
              </article>
              <article className="space-y-4">
                <header className="inline-flex w-fit items-center gap-2 rounded-full bg-[#051C12] px-4 py-2">
                  <img src="/img/sparkle-white.avif" width={20} height={20} alt="" aria-hidden="true" className="h-5 w-5" />
                  <h3 className="text-sm font-medium text-white">Our Mission</h3>
                </header>
                <p className="text-base leading-7 text-white/90">
                  To be Nigeria&apos;s most trusted e-waste management partner - setting the benchmark for transparency, compliance and
                  circular-economy leadership through responsible operations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Team - keep but mark as needing verification */}
        <section className="bg-[#061D18] px-4 py-12 sm:py-16" aria-labelledby="team-heading">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-4">
            <header className="space-y-4 text-white sm:col-span-2">
              <h2 id="team-heading" className="text-2xl font-semibold">
                Our Team
              </h2>
              <p className="max-w-sm text-sm leading-6 text-white/70">
                Led by an experienced project director and supported by professionals across environmental management, compliance and
                operations.
              </p>
              <p className="text-xs text-white/50">Team details shown as provided; owner to verify roles and imagery before publication.</p>
            </header>

            {profiles.map((profile) => (
              <article key={profile.id} className="overflow-hidden rounded-xl bg-zinc-900">
                <img
                  src={`/img/${profile.img}`}
                  alt=""
                  aria-hidden="true"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={300}
                  height={300}
                />
                <div className="space-y-1 p-3">
                  <p className="text-sm font-medium text-white">{profile.name}</p>
                  <p className="text-xs text-white/60">{profile.title}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA - premium background image */}
        <section className="relative overflow-hidden bg-zinc-900" aria-labelledby="cta-heading">
          <img
            src="/img/cta.avif"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" aria-hidden="true" />
          {/* subtle brand glow - restrained, not decorative */}
          <div className="absolute -bottom-24 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[#0F5132]/20 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to handle e-waste the right way?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              Speak to our team about secure collection, certified data destruction and compliance reporting.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact-us"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 sm:w-auto"
              >
                Request Pickup
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
