import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";

const About = () => {
    return (
        <>
            <Header/>
            <section className="pt-32 bg-[#061512] space-y-6 lg:space-y-10 px-4">
                <h1 className="text-3xl text-center text-white/80">We are Leading the Future of
                    Sustainable <br/> E-Waste Management</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    <div className="relative h-full w-full aspect-square">
                        <img
                            src="generated-6.png"
                            className="absolute inset-0 w-full h-full object-cover block"
                            alt=""
                        />
                    </div>
                    <div className="text-white text-lg font-normal sm:col-span-2 sm:pl-13">
                        W3 Eco-friendly Ltd is a leading environmental technology company focused on transforming
                        Nigeria's e-waste management landscape. Through advanced digital tools, regulatory-aligned
                        processes, and we secure operational systems, we offer end-to-end solutions for collection,
                        processing, traceability, and compliance reporting.
                        Our services support individuals, corporations, and government agencies in meeting national
                        environmental standards while improving operational efficiency and reducing environmental risks.
                    </div>
                </div>
            </section>
            <section className="bg-[#061512] space-y-6 px-4 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    <div className="order-2 sm:order-1 text-white text-lg font-normal sm:col-span-2 sm:pr-13 flex flex-col items-center justify-center">
                        <p>
                            Mision Statement: To advance sustainable electronic waste management through secure
                            technology solutions, regulatory partnership, and circular resource optimization, enabling
                            safe environmental practices and national compliance adherence.
                        </p>
                    </div>
                    <div className="order-1 sm:order-2 relative h-full w-full aspect-square">
                        <img
                            src="generated-7.png"
                            className="absolute inset-0 w-full h-full object-cover block"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#061D18]">
                <div className="max-w-4xl mx-auto grid sm:grid-cols-[3.5fr_2.5fr] gap-6 sm:gap-10 py-10 px-4">
                    <div className="flex flex-col items-start justify-between p-4 bg-primary rounded-lg">
                        <div
                            className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6]/20 rounded-full">
                            <img width="24" height="24" alt="" className="w-5 h-5 md:w-6 md:h-6"
                                 src="sparkle-white.png"/>
                            <p className="text-sm md:text-base text-white font-medium">Our Story</p>
                        </div>
                        <p className="text-white">
                            We3EcoFriendly began with a simple observation: electronic waste was growing exponentially,
                            yet recycling infrastructure wasn't keeping pace. We saw an opportunity to bridge this gap
                            with technology and innovation. Today, as a subsidiary of W3 Eco-Friendly Ltd, we've grown
                            into a comprehensive platform offering TraceWaste certification, cloud-based ESG analytics,
                            and end-to-end digital infrastructure for smart environmental monitoring.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="h-64 w-full relative rounded-lg overflow-hidden">
                            <img
                                src="people.png"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover block"
                            />
                        </div>
                        <div className="sm:h-[156px] w-full flex flex-col sm:justify-end">
                            <p className="bg-primary text-white rounded-lg p-2">
                                We empower governments, agencies, recyclers, and businesses with cutting-edge technology
                                driving transparency, efficiency, and measurable environmental impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#064E3B]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                        {/* Vision */}
                        <div className="space-y-4 sm:space-y-6">
                            <div
                                className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#051C12] rounded-full">
                                <img width="24" height="24" alt="" className="w-5 h-5 sm:w-6 sm:h-6"
                                     src="sparkle-white.png"/>
                                <p className="text-sm sm:text-base text-white font-medium">Our Vision</p>
                            </div>
                            <p className="text-white text-base sm:text-lg leading-relaxed">
                                We3EcoFriendly began with a simple observation: electronic waste was growing
                                exponentially,
                                yet recycling infrastructure wasn't keeping pace. We saw an opportunity to bridge this
                                gap
                                with technology and innovation.
                                Today, as a subsidiary of W3 Eco-Friendly Ltd, we've grown into a comprehensive platform
                                offering TraceWaste certification, cloud-based ESG analytics, and end-to-end digital
                                infrastructure for smart environmental monitoring.
                            </p>
                        </div>
                        {/* Mission */}
                        <div className="space-y-4 sm:space-y-6">
                            <div
                                className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#051C12] rounded-full">
                                <img width="24" height="24" alt="" className="w-5 h-5 sm:w-6 sm:h-6"
                                     src="sparkle-white.png"/>
                                <p className="text-sm sm:text-base text-white font-medium">Our Mission</p>
                            </div>
                            <p className="text-white text-base sm:text-lg leading-relaxed">
                                We3EcoFriendly began with a simple observation: electronic waste was growing
                                exponentially,
                                yet recycling infrastructure wasn't keeping pace. We saw an opportunity to bridge this
                                gap
                                with technology and innovation.
                                Today, as a subsidiary of W3 Eco-Friendly Ltd, we've grown into a comprehensive platform
                                offering TraceWaste certification, cloud-based ESG analytics, and end-to-end digital
                                infrastructure for smart environmental monitoring.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#061D18]">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 py-10 px-4">
                    <div className="sm:col-span-2 sm:col-start-1 text-white space-y-6">
                        <h2 className="font-semibold text-2xl">Our Team</h2>
                        <p className="max-w-[274px]">
                            We are driven by a shared mission to build sustainable solutions that protect the
                            environment
                            while enabling innovation and growth.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <img
                            src="profile-1.png"
                            alt=""
                            className="w-full aspect-square inline-block object-cover rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="rounded-bl-lg rounded-br-lg bg-black space-y-2 p-2">
                            <p className="text-white text-sm lg:text-base">Odebode Mayowa Tomiwa</p>
                            <span className="text-white/70">UI Designer</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <img
                            src="profile-2.png"
                            alt=""
                            className="w-full aspect-square inline-block object-cover rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="rounded-bl-lg rounded-br-lg bg-black space-y-2 p-2">
                            <p className="text-white text-sm lg:text-base">Odebode Mayowa Tomiwa</p>
                            <span className="text-white/70">UI Designer</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <img
                            src="profile-3.png"
                            alt=""
                            className="w-full aspect-square inline-block object-cover rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="rounded-bl-lg rounded-br-lg bg-black space-y-2 p-2">
                            <p className="text-white text-sm lg:text-base">Odebode Mayowa Tomiwa</p>
                            <span className="text-white/70">UI Designer</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <img
                            src="profile-4.png"
                            alt=""
                            className="w-full aspect-square inline-block object-cover rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="rounded-bl-lg rounded-br-lg bg-black space-y-2 p-2">
                            <p className="text-white text-sm lg:text-base">Odebode Mayowa Tomiwa</p>
                            <span className="text-white/70">UI Designer</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <img
                            src="profile-5.png"
                            alt=""
                            className="w-full aspect-square inline-block object-cover rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="rounded-bl-lg rounded-br-lg bg-black space-y-2 p-2">
                            <p className="text-white text-sm lg:text-base">Odebode Mayowa Tomiwa</p>
                            <span className="text-white/70">UI Designer</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <img
                            src="profile-6.png"
                            alt=""
                            className="w-full aspect-square inline-block object-cover rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="rounded-bl-lg rounded-br-lg bg-black space-y-2 p-2">
                            <p className="text-white text-sm lg:text-base">Odebode Mayowa Tomiwa</p>
                            <span className="text-white/70">UI Designer</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#072416] relative overflow-hidden">
                <div className="absolute bottom-0 left-[200px] w-64 h-64 bg-[#BDFFED] rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute bottom-0 right-[200px] w-80 h-80 bg-[#00DB2C] rounded-full opacity-15 blur-3xl translate-x-1/3 translate-y-1/2"></div>

                <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <div className="max-w-xl text-center mx-auto">
                        <div className="mb-5 space-y-4">
                            <h2 className="text-xl font-medium md:text-2xl md:leading-tight text-white">
                                Powering Smarter Recycling with Technology
                            </h2>
                            <p className="text-white/70">
                                Learn how We3 Ecotech supports businesses with traceable, tech-driven recycling tools.
                            </p>
                        </div>


                        <div
                            className="mt-5 lg:mt-8 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-4">
                            <a className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary/40 focus:outline-hidden focus:bg-primary disabled:opacity-50 disabled:pointer-events-none"
                               href="#">
                                Learn More
                            </a>
                            <a className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#274034] text-white hover:bg-[#274034]/40 focus:outline-hidden focus:bg-[#274034] disabled:opacity-50 disabled:pointer-events-none"
                               href="#">
                                Request Demo
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
};

export default About;