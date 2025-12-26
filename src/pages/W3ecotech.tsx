import Footer from "../components/layout/Footer.tsx";
import Header from "../components/layout/Header.tsx";

const W3Ecotech = () => {
    return (
        <>
            <Header/>
            <main className="pt-24 bg-[url('/hero-main.png')] min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat">
                <div
                    className="max-w-6xl py-8 px-4 sm:px-6 lg:px-8 lg:py-10 mx-auto space-y-8 relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                    <div className="space-y-6 lg:space-y-10 w-full lg:max-w-1/2">
                        <div
                            className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6]/20 rounded-full">
                            <span className="text-sm md:text-base font-medium text-white">Digital recycling</span>
                        </div>
                        <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
                            Building a Sustainable <br className="hidden sm:block"/> Future
                        </h2>
                        <p className="text-white text-base sm:text-lg max-w-xl">
                            W3 EcoTech is an environmental technology company building the digital future of waste
                            management, recycling, and circular-economy innovation.
                        </p>
                        <div className="flex flex-col justify-start items-center gap-2 sm:flex-row sm:gap-4">
                            <a className="w-full sm:w-auto whitespace-nowrap py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary/40 focus:outline-hidden focus:bg-primary disabled:opacity-50 disabled:pointer-events-none"
                               href="#">Learn More</a>
                            <a className="w-full sm:w-auto whitespace-nowrap py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#274034] text-white hover:bg-[#274034]/40 focus:outline-hidden focus:bg-[#274034] disabled:opacity-50 disabled:pointer-events-none"
                               href="#">Request Demo</a>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-1/2 relative space-y-6 lg:space-y-10">
                        <div className="bg-white/10 p-4 rounded-lg w-fit ml-auto">
                            <div className="text-white text-sm sm:text-base">Nature for a Sustained future</div>
                        </div>
                        <div
                            className="space-y-4 bg-white/10 p-4 rounded-lg text-white max-w-full sm:max-w-[300px] ml-auto">
                            <span className="block text-sm sm:text-base">Waste Management</span>
                            <span className="text-sm sm:text-base">
                              Join us today. In enhancing compliance and efficiency throughout recycling value chain
                            </span>
                        </div>
                        <div
                            className="text-white flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-4">
                            <div className="flex flex-col items-center">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                                    <div
                                        className="bg-white/10 rounded-full w-20 h-20 sm:w-24 sm:h-24 absolute top-0 left-0"></div>
                                    <div
                                        className="bg-white/15 rounded-full w-16 h-16 sm:w-20 sm:h-20 absolute top-2 left-2"></div>
                                    <div
                                        className="bg-white/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 absolute top-4 left-4"></div>
                                    <div
                                        className="bg-white/25 rounded-full w-8 h-8 sm:w-12 sm:h-12 absolute top-6 left-6"></div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="h-16 sm:h-20 w-px bg-white"></div>
                                </div>
                                <span
                                    className="p-3 sm:p-4 rounded-lg bg-white/15 block w-fit h-fit text-sm sm:text-base text-center">
                                    Nature for a sustained future
                                  </span>
                            </div>
                            <div className="flex gap-4 bg-white/10 rounded-lg p-4 w-fit">
                                <div className="flex gap-4 items-center">
                                    <div className="flex items-center -space-x-2">
                                        <img className="shrink-0 size-7 rounded-full"
                                             src="profile-sm-1.png"
                                             alt="Avatar"/>
                                        <img className="shrink-0 size-7 rounded-full"
                                             src="profile-sm-2.png"
                                             alt="Avatar"/>
                                        <img className="shrink-0 size-7 rounded-full"
                                             src="profile-sm-3.png"
                                             alt="Avatar"/>
                                        <img className="shrink-0 size-7 rounded-full"
                                             src="profile-sm-4.png"
                                             alt="Avatar"/>
                                    </div>
                                    <div className="text-white">
                                        <span className="block text-sm font-bold">57M+</span>
                                        <span className="text-sm text-white/70">Client Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="bg-[#052216]">
                <div className="max-w-6xl py-8 px-4 sm:px-6 lg:px-8 lg:py-10 mx-auto space-y-8">
                    <div className="flex flex-col gap-4 items-center w-full">
                        <div className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6]/20 rounded-full">
                            <img width="24" height="24" alt="" className="w-5 h-5 md:w-6 md:h-6" src="sparkle-white.png"/>
                            <p className="text-sm md:text-base font-medium text-white">About Us</p>
                        </div>
                        <div className="text-white font-medium text-xl sm:text-2xl md:text-3xl text-center max-w-xl px-4">
                            Innovative Technology for Smarter E-Waste Management.
                        </div>
                    </div>
                    <div className="relative">
                        <div className="max-w-[440px] mx-auto h-64 sm:h-80 md:h-96 relative">
                            <div className="w-full h-full relative rounded-lg overflow-hidden">
                                <img
                                    src="hd-image.png"
                                    className="absolute w-full h-full object-cover object-center inset-0"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="w-full h-full absolute inset-0 p-4 sm:p-6 lg:p-4">
                            <div className="w-full max-w-2xl mx-auto h-full relative space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24">
                                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
                                    <p className="text-xs sm:text-sm text-white p-3 sm:p-4 bg-white/10 rounded-lg w-full md:max-w-[303px] h-fit">
                                        W3 EcoTech is an environmental technology company building the digital
                                        infrastructure for waste management, recycling, and circular-economy innovation.
                                    </p>
                                    <p className="text-xs sm:text-sm text-white p-3 sm:p-4 bg-white/10 rounded-lg w-full md:max-w-[303px]">
                                        We transform electronic waste management through innovative technology, making
                                        responsible recycling accessible to every individual and organization while
                                        creating measurable environmental impact.
                                    </p>
                                </div>
                                <div className="flex justify-start md:justify-end">
                                    <p className="text-xs sm:text-sm text-white p-3 sm:p-4 bg-white/10 rounded-lg w-full md:max-w-[303px]">
                                        As a subsidiary of W3 Eco-Friendly Ltd, we empower governments, agencies,
                                        recyclers, and businesses with cutting-edge technology driving transparency,
                                        efficiency, and measurable environmental impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0E3C27] overflow-hidden">
                <div className="max-w-6xl py-8 px-4 sm:px-6 lg:px-8 lg:py-10 mx-auto">
                    <div className="space-y-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div
                                className="flex flex-col px-4 py-10 rounded-lg gap-4 w-full md:max-w-[300px] bg-primary-foreground">
                                <div
                                    className="w-[154.92px] h-[164.74px] mx-auto rounded-lg ring-4 ring-[#c1dbcf] relative overflow-hidden">
                                    <img
                                        src="dashboard.png"
                                        alt=""
                                        className="w-full h-full inset-0 object-cover object-center inline-block"
                                    />
                                </div>
                                <div className="">
                                    <h2 className="text-center font-medium text-white text-2xl">Trace waste</h2>
                                    <p className="text-center text-white text-sm">
                                        Track and monitor waste flow with real-time analytics and comprehensive
                                        reporting.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col px-4 py-10 rounded-lg gap-4 w-full md:max-w-[300px] bg-[#09513E]">
                                <div
                                    className="w-[154.92px] h-[164.74px] mx-auto rounded-lg ring-4 ring-[#c1dbcf] relative overflow-hidden">
                                    <img
                                        src="dashboard-2.png"
                                        alt=""
                                        className="w-full h-full inset-0 object-cover object-center inline-block"
                                    />
                                </div>
                                <div className="">
                                    <h2 className="text-center font-medium text-white text-2xl">Surveillance Portal</h2>
                                    <p className="text-center text-white text-sm">
                                        Compliance monitoring with advanced surveillance and reporting tools.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative max-w-2xl mx-auto px-4">
                            <div className="relative max-w-[414px] mx-auto">
                                <div className="hidden sm:block absolute -top-12 -left-12">
                                    <svg width="75" height="89" viewBox="0 0 75 89" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M28.4012 7.08833C28.4012 7.08833 43.9031 10.1401 55.7332 29.2308C67.2376 47.7958 73.894 50.147 73.894 50.147"
                                            stroke="white" strokeWidth="1.58125"/>
                                        <path
                                            d="M17.23 21.8468C17.23 21.8468 32.2865 26.1669 41.7566 46.1417C50.9659 65.5664 57.3057 68.457 57.3057 68.457"
                                            stroke="white" strokeWidth="1.58125"/>
                                        <path
                                            d="M0.100922 38.5712C0.100922 38.5712 15.6028 41.623 27.4329 60.7137C38.9373 79.2787 45.5938 81.6299 45.5938 81.6299"
                                            stroke="white" strokeWidth="1.58125"/>
                                    </svg>
                                </div>
                                <div className="hidden sm:block absolute -bottom-7 left-0 right-0 overflow-hidden">
                                    <svg className="w-full max-w-[400px] mx-auto" height="35" viewBox="0 0 565 35"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M501.698 0.740234C501.698 0.740234 366.784 15.6792 280.805 8.10544C197.194 0.740234 63.3027 17.8738 63.3027 17.8738"
                                            stroke="white" strokeWidth="1.48987"/>
                                        <path
                                            d="M442.121 21.2632C442.121 21.2632 343.876 32.1418 281.266 26.6266C220.38 21.2632 122.879 33.7399 122.879 33.7399"
                                            stroke="white" strokeWidth="1.08493"/>
                                    </svg>
                                </div>
                                <h2 className="text-white text-center text-2xl font-medium sm:text-3xl md:text-5xl">Ecotech
                                    Products</h2>
                            </div>
                            <p className="text-center mt-6 md:text-lg text-gray-100 dark:text-neutral-400">
                                From secure pickups to certified recycling and expert support, we handle your
                                electronics responsibly from start to finish.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div
                                className="flex flex-col px-4 py-10 rounded-lg gap-4 w-full md:max-w-[300px] bg-primary">
                                <div
                                    className="w-[154.92px] h-[164.74px] mx-auto rounded-lg ring-4 ring-[#c1dbcf] relative overflow-hidden">
                                    <img
                                        src="dashboard.png"
                                        alt=""
                                        className="w-full h-full inset-0 object-cover object-center inline-block"
                                    />
                                </div>
                                <div className="">
                                    <h2 className="text-center font-medium text-white text-2xl">Api</h2>
                                    <p className="text-center text-white text-sm">
                                        Integrate waste data and workflows seamlessly into your existing systems.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col px-4 py-10 rounded-lg gap-4 w-full md:max-w-[300px] bg-black">
                                <div
                                    className="w-[154.92px] h-[164.74px] mx-auto rounded-lg ring-4 ring-[#c1dbcf] relative overflow-hidden">
                                    <img
                                        src="dashboard-2.png"
                                        alt=""
                                        className="w-full h-full inset-0 object-cover object-center inline-block"
                                    />
                                </div>
                                <div className="">
                                    <h2 className="text-center font-medium text-white text-2xl">Metal Services</h2>
                                    <p className="text-center text-white text-sm">
                                        Gain access to metal markets worldwide with our global trading network.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#072416] relative overflow-hidden">
                <div
                    className="absolute bottom-0 left-[200px] w-64 h-64 bg-[#BDFFED] rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                <div
                    className="absolute bottom-0 right-[200px] w-80 h-80 bg-[#00DB2C] rounded-full opacity-15 blur-3xl translate-x-1/3 translate-y-1/2"></div>

                <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <div className="max-w-xl text-center mx-auto">
                        <div className="mb-5 space-y-4">
                            <h2 className="text-xl font-medium md:text-2xl lg:text-4xl md:leading-tight text-white">
                                We are building technology for a cleaner, smarter,
                            </h2>
                            <p className="text-white/70">
                                Join organizations committed to responsible technology management, traceability, and
                                compliance excellence.
                            </p>
                        </div>
                        <div
                            className="mt-5 lg:mt-8 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-4">
                            <a className="w-full sm:w-auto whitespace-nowrap py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#274034] text-white hover:bg-[#274034]/40 focus:outline-hidden focus:bg-[#274034] disabled:opacity-50 disabled:pointer-events-none"
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

export default W3Ecotech;