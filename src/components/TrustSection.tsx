import { Truck, ShieldCheck, Lock, Building2 } from "lucide-react";

const TrustSection = () => {
  const items = [
    {
      title: "Structured & Secure Logistics",
      desc: "Scheduled, documented and controlled logistics designed for enterprise requirements.",
      Icon: Truck,
    },
    {
      title: "Regulatory-Aligned Operations",
      desc: "Operations aligned with applicable environmental guidelines.",
      Icon: ShieldCheck,
    },
    {
      title: "Secure Data Destruction",
      desc: "Controlled data sanitisation processes aligned with recognised information-security practices.",
      Icon: Lock,
    },
    {
      title: "Enterprise Data Security",
      desc: "Certified methods aligned with international compliance frameworks.",
      Icon: Building2,
    },
  ];

  return (
    <section className="bg-[#051C12] px-4 py-12 text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
            <img src="/img/sparkle-white.avif" width={20} height={20} alt="" aria-hidden="true" className="h-5 w-5" />
            Why Trust W3 Eco Friendly
          </span>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">Built for compliance. Designed for accountability.</h2>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-5">
          <div className="flex flex-1 flex-col gap-5">
            {items.slice(0, 2).map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-center">
                <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white">
                  <item.Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative flex-1 overflow-hidden rounded-2xl">
            <img
              src="/img/generated-5-480w.avif"
              srcSet="/img/generated-5-480w.avif 480w, /img/generated-5-640w.avif 640w, /img/generated-5.avif 974w"
              sizes="(max-width: 768px) 100vw, 480px"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              width={480}
              height={542}
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-5">
            {items.slice(2, 4).map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-center">
                <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white">
                  <item.Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
