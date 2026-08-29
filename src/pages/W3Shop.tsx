import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router";
import { motion } from "framer-motion";

const W3Shop = () => {
  return (
    <>
      <SEO
        title="W3 Shop - Refurbished Technology, Coming Soon"
        description="W3 Shop is being prepared as a trusted destination for carefully inspected refurbished devices that extend the useful life of technology. Coming soon."
        url="/w3-shop"
        robots="noindex, follow"
        image="https://w3eco-friendly.com/img/hero.avif"
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#061512]" aria-labelledby="shop-heading">
          <div className="absolute inset-0">
            <img
              src="/img/hero.avif"
              alt=""
              aria-hidden="true"
              width={1440}
              height={900}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#061512]/20 via-[#061512]/60 to-[#061512]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-[#00CCA1]" aria-hidden="true" />
                W3 Shop
              </motion.p>

              <motion.h1
                id="shop-heading"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Better technology deserves a second life.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
              >
                W3 Shop is being prepared as a trusted destination for carefully inspected refurbished devices - helping organisations and households extend the useful life of technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
                aria-label="Shop status"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                </span>
                Coming Soon
              </motion.div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061512] sm:w-auto"
                >
                  Return Home
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061512] sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Abstract device presentation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mx-auto mt-14 max-w-4xl"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur sm:p-4">
                <div className="rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-[#0F5132]/40 p-6 sm:p-8">
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex h-28 items-center justify-center rounded-xl bg-zinc-100">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-zinc-400">
                          <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="mt-3 text-sm font-medium text-zinc-900">Carefully inspected</p>
                      <p className="text-xs leading-5 text-zinc-500">Devices prepared for a second life.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex h-28 items-center justify-center rounded-xl bg-zinc-100">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-zinc-400">
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 22a10 10 0 110-20 10 10 0 010 20z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="mt-3 text-sm font-medium text-zinc-900">Responsible reuse</p>
                      <p className="text-xs leading-5 text-zinc-500">Extend useful life, reduce waste.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex h-28 items-center justify-center rounded-xl bg-zinc-100">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-zinc-400">
                          <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M12 22a10 10 0 110-20 10 10 0 010 20z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M16 3.5a10 10 0 01-8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="mt-3 text-sm font-medium text-zinc-900">Prepared with care</p>
                      <p className="text-xs leading-5 text-zinc-500">Built for reliability and trust.</p>
                    </div>
                  </div>
                  <p className="mt-6 text-center text-xs leading-5 text-white/50">
                    No prices, stock levels, launch dates or warranties are listed until verified products are available.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info band */}
        <section className="border-t border-zinc-100 bg-zinc-50" aria-labelledby="shop-info-heading">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="shop-info-heading" className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                A shop worth waiting for
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                When W3 Shop launches, it will offer refurbished devices that have been evaluated for function, cleanliness and responsible handling - intended for organisations that need dependable, cost-effective technology without compromising on responsibility.
              </p>
              <p className="mt-6 text-sm">
                <Link to="/contact-us" className="font-medium text-primary underline decoration-primary/20 underline-offset-4 hover:decoration-primary">
                  Have an enquiry in the meantime? Contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default W3Shop;
