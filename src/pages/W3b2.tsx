import Header from "@/components/layout/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import {Link} from "react-router";

const W3b2 = () => {
    return (
        <>
            <Header/>
            <main id="main-content">
                <section
                    className="relative bg-primary-foreground"
                    aria-labelledby="hero-heading"
                >
                    <picture aria-hidden="true">
                        <source srcSet="/img/background-b2b.avif" type="image/avif"/>
                        <img
                            src="/img/background-b2b.avif"
                            alt="hero background"
                            width={1440}
                            height={900}
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            style={{zIndex: 0}}
                        />
                    </picture>
                    <div className="relative z-10 max-w-4xl mx-auto px-4 xl:px-0 pt-24 sm:py-32 md:py-40 space-y-6">
                        {/* Main Heading - H1 for SEO */}
                        <h1
                            id="hero-heading"
                            className="font-semibold text-white text-center text-2xl sm:text-3xl md:text-5xl"
                        >
                            Transforming E-Waste Into <br aria-hidden="true"/>
                            Sustainable Value
                        </h1>

                        {/* Supporting Description */}
                        <p className="text-white text-base sm:text-lg text-center max-w-2xl mx-auto">
                            We collect, recycle, and recover electronics responsibly. From certified pickups to
                            refurbished products, we're building a cleaner, smarter, and more sustainable world.
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div
                            className="text-white text-lg text-center max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
                            <Link
                                to="/contact-us"
                                className="w-full sm:w-auto px-6 py-3 bg-primary text-white text-base font-medium rounded-lg hover:bg-[#053527] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                                aria-label="Contact our e-waste management experts"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/contact-us"
                                className="w-full sm:w-auto px-6 py-3 bg-[#2A3734] text-white text-base font-medium rounded-lg hover:bg-[#2A3734] transition-colors focus:outline-none focus:ring-2 focus:ring-[#064E3B]/50"
                                aria-label="Request e-waste pickup service"
                            >
                                Watch Demo
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="bg-[#061512]" aria-labelledby="about-heading">
                    <div className="max-w-6xl py-8 px-4 sm:px-6 lg:px-8 lg:py-10 mx-auto space-y-8">
                        <div className="relative">
                            <figure className=" mx-auto relative">
                                <div className="w-full h-162.5 rounded-lg overflow-x-scroll relative p-4">
                                    <img
                                        src="/img/b2b-dashboard.avif"
                                        className="absolute w-full h-full object-contain lg:object-cover object-center inset-0"
                                        alt="W3 EcoTech digital waste management platform interface"
                                        width="440"
                                        height="384"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </figure>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
};

export default W3b2;