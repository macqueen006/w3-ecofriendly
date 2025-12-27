import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import SEO from '../components/SEO';
import {ImpactPageSchema} from "../components/StructuredData.tsx";

const Impact = () => {
    return (
        <>
            <SEO
                title="Our Environmental Impact - Measurable Change, Real Results"
                description="Discover W3 Eco Friendly's environmental impact: 52,847 electronics recycled, 8.5 tons of metals recovered, and 56 certificates issued. Learn how we're creating measurable change through sustainable e-waste management."
                keywords="environmental impact, e-waste recycling statistics, electronics recycling Nigeria, sustainable waste management, metal recovery, carbon footprint reduction, toxic waste prevention"
                url="/impact"
                image="https:/w3eco-friendly.com/impact-hero.png"
            />
            <ImpactPageSchema />

            <Header />

            <main id="main-content">
                <section
                    className="pt-24 bg-[url('/img/impact-hero.png')] min-h-screen md:min-h-[600px] lg:min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat"
                    aria-labelledby="hero-heading"
                >
                    <div className="max-w-6xl py-8 px-4 sm:px-6 lg:px-8 lg:py-10 mx-auto space-y-8 relative flex flex-col lg:flex-row items-start w-full gap-8 lg:gap-0">
                        <div className="space-y-6 lg:space-y-10 w-full lg:w-1/2">
                            <div className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6]/20 rounded-full">
                                <span className="text-sm md:text-base font-medium text-white">Our Environmental Impact</span>
                            </div>
                            <h1 id="hero-heading" className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
                                Measurable Change Real Results
                            </h1>
                            <p className="text-white text-base sm:text-lg max-w-xl">
                                Every device we recycle contributes to a cleaner, healthier environment. By keeping
                                electronic waste out of landfills and giving devices a second life, we reduce pollution.
                            </p>
                            <div className="flex flex-col justify-start items-center gap-2 sm:flex-row sm:gap-4">
                                <a
                                    className="w-full sm:w-auto whitespace-nowrap py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary/40 focus:outline-hidden focus:bg-primary disabled:opacity-50 disabled:pointer-events-none"
                                    href="/w3-ecotech"
                                    aria-label="Learn more about our e-waste recycling process"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col md:flex-row md:flex-wrap lg:flex-col gap-4 md:justify-center lg:justify-start">
                            <article className="w-full max-w-xs sm:max-w-sm md:max-w-[200px] lg:w-64 h-36 mx-auto md:mx-0 lg:mx-0 rounded-lg bg-[url('/img/card-frame-1.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                                <div className="flex flex-col gap-1 items-center text-white">
                                    <div>
                                        <img
                                            src="/img/trash-icon.svg"
                                            className="w-full h-full inline-block object-cover object-center"
                                            width={40}
                                            height={40}
                                            alt="Recycling icon"
                                            loading="eager"
                                        />
                                    </div>
                                    <h2 className="font-bold text-xl">52,847</h2>
                                    <p className="text-sm">Electronics Recycled</p>
                                </div>
                            </article>
                            <article className="w-full max-w-xs sm:max-w-sm md:max-w-[200px] lg:w-64 h-36 mx-auto md:mx-0 lg:ml-20 xl:ml-36 rounded-lg bg-[url('/img/card-frame-2.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                                <div className="flex flex-col gap-1 items-center text-white">
                                    <div>
                                        <img
                                            src="/img/certificate-icon.svg"
                                            className="w-full h-full inline-block object-cover object-center"
                                            width={40}
                                            height={40}
                                            alt="Certificate icon"
                                            loading="eager"
                                        />
                                    </div>
                                    <h2 className="font-bold text-xl">56</h2>
                                    <p className="text-sm">Certificates Issued</p>
                                </div>
                            </article>
                            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-[200px] lg:w-auto mx-auto md:mx-0">
                                <div className="hidden lg:flex flex-col items-center absolute -top-28 left-24" aria-hidden="true">
                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                        <div className="bg-white/10 rounded-full w-10 h-10 sm:w-12 sm:h-12 absolute"></div>
                                        <div className="bg-white/15 rounded-full w-8 h-8 sm:w-10 sm:h-10 absolute"></div>
                                        <div className="bg-white/20 rounded-full w-6 h-6 sm:w-8 sm:h-8 absolute"></div>
                                        <div className="bg-white/25 rounded-full w-4 h-4 sm:w-6 sm:h-6 absolute"></div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="h-8 sm:h-16 w-px bg-white"></div>
                                    </div>
                                </div>

                                <article className="w-full lg:w-64 h-36 rounded-lg bg-[url('/img/card-frame-3.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                                    <div className="flex flex-col gap-1 items-center text-white">
                                        <div>
                                            <img
                                                src="/img/metal-can-icon.svg"
                                                className="w-full h-full inline-block object-cover object-center"
                                                width={40}
                                                height={40}
                                                alt="Metal recovery icon"
                                                loading="eager"
                                            />
                                        </div>
                                        <h2 className="font-bold text-xl">8.5T</h2>
                                        <p className="text-sm">Metals Recovered</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="bg-primary-foreground relative overflow-hidden"
                    aria-labelledby="why-matters-heading"
                >
                    <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto space-y-8">
                        <div className="flex flex-col gap-4 items-center w-full">
                            <div className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6]/20 rounded-full">
                                <img
                                    width="44"
                                    height="44"
                                    alt=""
                                    className="w-5 h-5 md:w-6 md:h-6"
                                    src="/img/sparkle-white.png"
                                    aria-hidden="true"
                                    loading="lazy"
                                />
                                <p className="text-sm md:text-base font-medium text-white">Why It Matters</p>
                            </div>
                            <h2 id="why-matters-heading" className="text-white/70 font-medium text-xl sm:text-2xl md:text-3xl text-center max-w-xl px-4">
                                Every device we recycle contributes to a cleaner environment.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-0">
                            <article className="space-y-6 sm:space-y-8">
                                <div className="space-y-6 sm:space-y-8">
                                    <figure className="aspect-square relative max-w-sm mx-auto">
                                        <img
                                            src="/img/impact-profile-1.png"
                                            className="w-full h-full lg:h-64 lg:w-64 inline-block object-cover rounded-lg object-center lg:absolute lg:top-10 lg:right-0 lg:-rotate-[14deg]"
                                            alt="Environmental protection from toxic e-waste materials"
                                            loading="lazy"
                                            width="400"
                                            height="400"
                                        />
                                    </figure>
                                    <div className="text-center text-white space-y-2 px-4">
                                        <h3 className="font-medium text-base sm:text-lg">Prevent Toxic Pollution</h3>
                                        <p className="text-sm sm:text-base text-white/80">E-waste contains hazardous
                                            materials like lead, mercury, and cadmium.</p>
                                    </div>
                                </div>
                            </article>
                            <article className="space-y-6 sm:space-y-8">
                                <figure className="aspect-square relative max-w-sm mx-auto">
                                    <img
                                        src="/img/impact-profile-2.png"
                                        className="w-full h-full inline-block object-cover rounded-lg object-center absolute inset-0"
                                        alt="Resource conservation through e-waste recycling"
                                        loading="lazy"
                                        width="400"
                                        height="400"
                                    />
                                </figure>
                                <div className="text-center text-white space-y-2 px-4">
                                    <h3 className="font-medium text-base sm:text-lg">Conserve Natural Resources</h3>
                                    <p className="text-sm sm:text-base text-white/80">Recycling recovers valuable
                                        materials like gold, silver, copper, and rare.</p>
                                </div>
                            </article>
                            <article className="space-y-6 sm:space-y-8">
                                <figure className="aspect-square relative max-w-sm mx-auto">
                                    <img
                                        src="/img/impact-profile-3.png"
                                        className="w-full h-full lg:h-64 lg:w-64 inline-block object-cover rounded-lg object-center lg:absolute lg:top-10 lg:rotate-12"
                                        alt="Carbon emission reduction through sustainable recycling"
                                        loading="lazy"
                                        width="400"
                                        height="400"
                                    />
                                </figure>
                                <div className="text-center text-white space-y-2 px-4">
                                    <h3 className="font-medium text-base sm:text-lg">Reduce Carbon Footprint</h3>
                                    <p className="text-sm sm:text-base text-white/80">Manufacturing new electronics from
                                        recycled materials uses.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section
                    className="bg-[#0D3924] relative overflow-hidden"
                    aria-labelledby="partners-heading"
                >
                    <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                        <div className="max-w-xl text-center mx-auto">
                            <div className="mb-5 space-y-4">
                                <h2 id="partners-heading" className="text-xl font-medium md:text-2xl lg:text-4xl md:leading-tight text-white">
                                    Trusted By Leading Organizations
                                </h2>
                                <p className="text-white/70">
                                    Partnering with businesses committed to sustainability
                                </p>
                            </div>
                            <div className="mt-5 lg:mt-8 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-4">
                                <a
                                    className="w-full sm:w-auto whitespace-nowrap py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary/40 focus:outline-hidden focus:bg-[#274034] disabled:opacity-50 disabled:pointer-events-none"
                                    href="/about"
                                    aria-label="Learn more about our partner organizations"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Impact;