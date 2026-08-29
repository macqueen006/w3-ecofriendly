import { Link } from "react-router";
import { Truck, ShieldCheck, Recycle, FileCheck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Collection & Pickup",
      description: "Enterprise-grade logistics for safe, documented and compliant electronic-waste collection.",
      ctaText: "Request Pickup",
      href: "/contact-us",
      Icon: Truck,
    },
    {
      number: "02",
      title: "Secure Data Destruction (ITAD)",
      description: "Certified sanitisation and destruction for data-bearing assets, with auditable records for compliance.",
      ctaText: "Secure Data Destruction",
      href: "/contact-us",
      Icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Recycling & Recovery",
      description: "Responsible recovery of materials and components from end-of-life electronics through verified downstream partners.",
      ctaText: "About recycling and recovery",
      href: "/about",
      Icon: Recycle,
    },
    {
      number: "04",
      title: "Compliance & Certification",
      description: "Documentation, certificates and reporting to support ESG, audit and regulatory requirements.",
      ctaText: "Contact an Expert",
      href: "/contact-us",
      Icon: FileCheck,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="space-y-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#CEDAD6] px-4 py-2 text-sm font-medium text-zinc-800">
            <img src="/img/sparkle.avif" width={20} height={20} alt="" aria-hidden="true" className="h-5 w-5" loading="lazy" />
            Our Services
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
            Comprehensive, compliant e-waste services for organisations
          </h2>
          <p className="text-sm leading-6 text-zinc-600">From pickup to certification - a secure, documented chain of custody.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <div key={service.title} className="flex gap-4">
              <div className="hidden shrink-0 sm:block sm:w-16 lg:w-20">
                <p className="text-5xl font-bold leading-none text-zinc-200 lg:text-6xl">{service.number}</p>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0F5132]/10 text-[#0F5132] ring-1 ring-[#0F5132]/10">
                    <service.Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="pt-1.5 text-base font-semibold text-[#064E3B] sm:text-lg">{service.title}</h3>
                </div>
                <p className="text-sm leading-6 text-zinc-600">{service.description}</p>
                <Link
                  to={service.href}
                  aria-label={`${service.ctaText} - ${service.title}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#064E3B] hover:gap-3 transition-all focus:outline-none focus-visible:underline"
                >
                  {service.ctaText}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
                    <path d="M5 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
