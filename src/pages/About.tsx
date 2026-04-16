import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import SEO from "../components/SEO.tsx";
import {OrganizationSchema, StatisticsSchema} from "../components/StructuredData.tsx";
import {Link} from "react-router";

const About = () => {

    const profiles = [
        {
            id: 1,
            name: "Sodiq Adigun",
            title: "Managing Director",
            img: "frame-1.avif"
        },
        {
            id: 2,
            name: "Teri Wellington",
            title: "Executive secretary/ Law",
            img: "frame-2.avif"
        },
        {
            id: 3,
            name: "Zakari Dekina",
            title: "Head of surveillance",
            img: "frame-3.avif"
        },
        {
            id: 4,
            name: "Chineye Dijdh",
            title: "Sales Marketing Specialist",
            img: "frame-4.avif"
        },
        {
            id: 5,
            name: "Aibor Adewale Michael",
            title: "HSE Officer",
            img: "frame-5.avif"
        },
        {
            id: 6,
            name: "Adewale Oluwasegun",
            title: "Auditor",
            img: "frame-6.avif"
        }
    ];

    return (
        <>
            <SEO
                title="About Us - Sustainable E-Waste Management Solutions"
                description="W3 Eco-friendly Ltd is Nigeria's leading environmental technology company transforming e-waste management through advanced digital tools, regulatory compliance, and secure operations."
                keywords="e-waste management Nigeria, sustainable recycling, electronic waste disposal, environmental technology, ESG compliance, circular economy, waste traceability"
                url="/about"
                image="https://w3eco-friendly.com/og-about.jpg"
            />

            {/* Structured Data */}
            <OrganizationSchema/>
            <StatisticsSchema/>

            <Header/>
            <main>
                {/* Hero Section */}
                <section className="py-32 bg-[#061512] space-y-6 lg:space-y-10 px-4" aria-labelledby="hero-heading">
                    <h1 id="hero-heading" className="text-3xl text-center text-white/80">
                        We are Leading the Future of Sustainable <br/> E-Waste Management
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
                        <figure className="relative h-full w-full aspect-square">
                            <img
                                src="/img/generated-6.avif"
                                className="absolute inset-0 w-full h-full object-cover block"
                                alt="Modern e-waste recycling facility with advanced technology"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                width="400"
                                height="400"
                            />
                        </figure>

                        <article className="text-white text-lg font-normal sm:col-span-2 sm:pl-13">
                            <p>
                                <strong>W3 Eco-friendly Ltd</strong> is a leading environmental technology company
                                focused on transforming
                                Nigeria's e-waste management landscape. Through advanced digital tools,
                                regulatory-aligned
                                processes, and secure operational systems, we offer end-to-end solutions for collection,
                                processing, traceability, and compliance reporting.
                            </p>
                            <p className="mt-4">
                                Our services support individuals, corporations, and government agencies in meeting
                                national
                                environmental standards while improving operational efficiency and reducing
                                environmental risks.
                            </p>
                        </article>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="bg-[#061D18]" aria-labelledby="story-heading">
                    <div className="max-w-4xl mx-auto grid sm:grid-cols-[3.5fr_2.5fr] gap-6 sm:gap-10 py-10 px-4">
                        <article className="flex flex-col items-start justify-between p-4 bg-primary rounded-lg">
                            <header
                                className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6]/20 rounded-full">
                                <img
                                    width="24"
                                    height="24"
                                    alt=""
                                    className="w-5 h-5 md:w-6 md:h-6"
                                    src="/img/sparkle-white.avif"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <h2 id="story-heading" className="text-sm md:text-base text-white font-medium">Our
                                    Story</h2>
                            </header>

                            <p className="text-white mt-4">
                                W3 Eco-friendly Ltd began with a simple but urgent observation: electronic waste in
                                Nigeria was growing exponentially, while formal recycling infrastructure and
                                accountability mechanisms were failing to keep pace. Recognizing the environmental,
                                health, and regulatory risks posed by unmanaged e-waste, we identified an opportunity to
                                bridge this gap through technology,
                                W3 Ecotech a technology subsidiary focused on digital environmental infrastructure.
                            </p>
                        </article>

                        <aside className="space-y-6">
                            <figure className="h-64 w-full relative rounded-lg overflow-hidden">
                                <img
                                    src="/img/trash-truck.avif"
                                    alt="W3 Eco-friendly team members working together"
                                    className="absolute inset-0 w-full h-full object-cover block"
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="256"
                                />
                            </figure>

                            <div className="sm:h-39 w-full flex flex-col sm:justify-end">
                                <blockquote className="bg-primary text-white rounded-lg p-2">
                                    We empower governments, agencies, recyclers, and businesses with cutting-edge
                                    technology
                                    driving transparency, efficiency, and measurable environmental impact.
                                </blockquote>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="bg-[#064E3B]" aria-labelledby="vision-mission-heading">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
                        <h2 id="vision-mission-heading" className="sr-only">Our Vision and Mission</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                            {/* Vision */}
                            <article className="space-y-4 sm:space-y-6">
                                <header
                                    className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#051C12] rounded-full">
                                    <img
                                        width="24"
                                        height="24"
                                        alt=""
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        src="/img/sparkle-white.avif"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <h3 className="text-sm sm:text-base text-white font-medium">Our Vision</h3>
                                </header>

                                <p className="text-white text-base sm:text-lg leading-relaxed">
                                    To advance sustainable electronic waste management through secure technology
                                    solutions, regulatory partnership, and circular resource optimization—enabling safe
                                    environmental practices, national compliance, and measurable impact.
                                </p>
                            </article>

                            {/* Mission */}
                            <article className="space-y-4 sm:space-y-6">
                                <header
                                    className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#051C12] rounded-full">
                                    <img
                                        width="24"
                                        height="24"
                                        alt=""
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        src="/img/sparkle-white.avif"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <h3 className="text-sm sm:text-base text-white font-medium">Our Mission</h3>
                                </header>

                                <p className="text-white text-base sm:text-lg leading-relaxed">
                                    To become Nigeria’s most trusted e-waste management company, setting the benchmark
                                    for transparency, compliance, and circular economy leadership through innovation and
                                    responsible operations.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-[#061D18]" aria-labelledby="team-heading">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 py-10 px-4">
                        <header className="sm:col-span-2 sm:col-start-1 text-white space-y-6">
                            <h2 id="team-heading" className="font-semibold text-2xl">Our Team</h2>
                            <p className="max-w-68.5">
                                Our team is led by an innovative Project Director and supported by strong regulatory
                                backing, alongside professionals and expertise across environmental management,
                                technology, compliance, and circular economy systems. Together, we are driven by a
                                shared mission
                            </p>
                        </header>

                        {profiles.map((profile) => (
                            <article key={profile.id} className="col-span-1">
                                <figure>
                                    <img
                                        src={`/img/${profile.img}`}
                                        alt={`Team member profile`}
                                        className="w-full aspect-square inline-block object-cover rounded-tl-lg rounded-tr-lg"
                                        loading="lazy"
                                        decoding="async"
                                        width="300"
                                        height="300"
                                    />
                                    <figcaption className="rounded-bl-lg rounded-br-lg bg-black space-y-2 p-2">
                                        <p className="text-white text-sm lg:text-base">{profile.name}</p>
                                        <p className="text-white/70 text-sm">{profile.title}</p>
                                    </figcaption>
                                </figure>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-[#072416] relative overflow-hidden" aria-labelledby="cta-heading">
                    {/* Decorative elements */}
                    <div
                        className="absolute bottom-0 left-50 w-64 h-64 bg-[#BDFFED] rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"
                        aria-hidden="true"></div>
                    <div
                        className="absolute bottom-0 right-50 w-80 h-80 bg-[#00DB2C] rounded-full opacity-15 blur-3xl translate-x-1/3 translate-y-1/2"
                        aria-hidden="true"></div>

                    <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                        <div className="max-w-2xl text-center mx-auto">
                            <header className="mb-5 space-y-4">
                                <h2 id="cta-heading"
                                    className="text-xl font-medium md:text-2xl md:leading-tight text-white">
                                    Powering Smarter Recycling with Technology
                                </h2>
                                <p className="text-white/70">
                                    We believe that the future of e-waste management lies at the intersection of
                                    technology, regulation, and transparency.
                                </p>
                            </header>

                            <nav
                                className="mt-5 lg:mt-8 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-4"
                                aria-label="Call to action">
                                <Link
                                    className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                                    to="/w3-ecotech"
                                    aria-label="Learn more about W3 Ecotech services"
                                >
                                    Learn More
                                </Link>
                                <Link
                                    className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#274034] text-white hover:bg-[#274034]/40 focus:outline-none focus:ring-2 focus:ring-[#274034] focus:ring-offset-2 transition-colors"
                                    to="/contact-us"
                                    aria-label="Request a demo of our platform"
                                >
                                    Request Demo
                                </Link>
                            </nav>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
};

export default About;