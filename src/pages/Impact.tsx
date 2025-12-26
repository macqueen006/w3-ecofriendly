import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";

const Impact = () => {
    return (
        <>
            <Header/>
            <main className="pt-24 bg-[url('/impact-hero.png')] min-h-screen md:min-h-[600px] lg:min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat">
                <div className="max-w-6xl py-8 px-4 sm:px-6 lg:px-8 lg:py-10 mx-auto space-y-8 relative flex flex-col lg:flex-row items-start w-full gap-8 lg:gap-0">
                    <div className="space-y-6 lg:space-y-10 w-full lg:w-1/2">
                        <div className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6]/20 rounded-full">
                            <span className="text-sm md:text-base font-medium text-white">Our Environmental Impact</span>
                        </div>
                        <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
                            Measurable Change Real Results
                        </h2>
                        <p className="text-white text-base sm:text-lg max-w-xl">
                            Every device we recycle contributes to a cleaner, healthier environment. By keeping
                            electronic waste out of landfills and giving devices a second life, we reduce pollution.
                        </p>
                        <div className="flex flex-col justify-start items-center gap-2 sm:flex-row sm:gap-4">
                            <a className="w-full sm:w-auto whitespace-nowrap py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary/40 focus:outline-hidden focus:bg-primary disabled:opacity-50 disabled:pointer-events-none"
                               href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col md:flex-row md:flex-wrap lg:flex-col gap-4 md:justify-center lg:justify-start">
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-[200px] lg:w-64 h-36 mx-auto md:mx-0 lg:mx-0 rounded-lg bg-[url('/card-frame-1.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                            <div className="flex flex-col gap-1 items-center text-white">
                                <div>
                                    <img
                                        src="/trash-icon.svg"
                                        className="w-full h-full inline-block object-cover object-center"
                                        width={40}
                                        height={40}
                                        alt="trash-icon"
                                    />
                                </div>
                                <h2 className="font-bold text-xl">52,847</h2>
                                <p className="text-sm">Electronics Recycled</p>
                            </div>
                        </div>
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-[200px] lg:w-64 h-36 mx-auto md:mx-0 lg:ml-20 xl:ml-36 rounded-lg bg-[url('/card-frame-2.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                            <div className="flex flex-col gap-1 items-center text-white">
                                <div>
                                    <img
                                        src="/certificate-icon.svg"
                                        className="w-full h-full inline-block object-cover object-center"
                                        width={40}
                                        height={40}
                                        alt="certificate-icon"
                                    />
                                </div>
                                <h2 className="font-bold text-xl">56</h2>
                                <p className="text-sm">Certificates Issued</p>
                            </div>
                        </div>
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-[200px] lg:w-auto mx-auto md:mx-0">
                            <div className="hidden lg:flex flex-col items-center absolute -top-28 left-24">
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

                            <div className="w-full lg:w-64 h-36 rounded-lg bg-[url('/card-frame-3.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                                <div className="flex flex-col gap-1 items-center text-white">
                                    <div>
                                        <img
                                            src="/metal-can-icon.svg"
                                            className="w-full h-full inline-block object-cover object-center"
                                            width={40}
                                            height={40}
                                            alt="metal-can-icon"
                                        />
                                    </div>
                                    <h2 className="font-bold text-xl">8.5T</h2>
                                    <p className="text-sm">Metals Recovered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="bg-primary-foreground relative overflow-hidden">
                <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto space-y-8">
                    <div className="flex flex-col gap-4 items-center w-full">
                        <div className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6]/20 rounded-full">
                            <img width="44" height="44" alt="" className="w-5 h-5 md:w-6 md:h-6" src="/sparkle-white.png"/>
                            <p className="text-sm md:text-base font-medium text-white">Why It Matters</p>
                        </div>
                        <div className="text-white/70 font-medium text-xl sm:text-2xl md:text-3xl text-center max-w-xl px-4">
                            Every device we recycle contributes to a cleaner environment.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-6 sm:space-y-8">
                                <div className="aspect-square relative max-w-sm mx-auto">
                                    <img
                                        src="/impact-profile-1.png"
                                        className="w-full h-full lg:h-64 lg:w-64 inline-block object-cover rounded-lg object-center lg:absolute lg:top-10 lg:right-0 lg:-rotate-[14deg]"
                                        alt=""
                                    />
                                </div>
                                <div className="text-center text-white space-y-2 px-4">
                                    <p className="font-medium text-base sm:text-lg">Prevent Toxic Pollution</p>
                                    <p className="text-sm sm:text-base text-white/80">E-waste contains hazardous materials like lead, mercury, and cadmium.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="aspect-square relative max-w-sm mx-auto">
                                <img
                                    src="/impact-profile-2.png"
                                    className="w-full h-full inline-block object-cover rounded-lg object-center absolute inset-0"
                                    alt=""
                                />
                            </div>
                            <div className="text-center text-white space-y-2 px-4">
                                <p className="font-medium text-base sm:text-lg">Conserve Natural Resources</p>
                                <p className="text-sm sm:text-base text-white/80">Recycling recovers valuable materials like gold, silver, copper, and rare.</p>
                            </div>
                        </div>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="aspect-square relative max-w-sm mx-auto">
                                <img
                                    src="/impact-profile-3.png"
                                    className="w-full h-full lg:h-64 lg:w-64 inline-block object-cover rounded-lg object-center lg:absolute lg:top-10 lg:rotate-12"
                                    alt=""
                                />
                            </div>
                            <div className="text-center text-white space-y-2 px-4">
                                <p className="font-medium text-base sm:text-lg">Reduce Carbon Footprint</p>
                                <p className="text-sm sm:text-base text-white/80">Manufacturing new electronics from recycled materials uses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#0D3924] relative overflow-hidden">
                <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <div className="max-w-xl text-center mx-auto">
                        <div className="mb-5 space-y-4">
                            <h2 className="text-xl font-medium md:text-2xl lg:text-4xl md:leading-tight text-white">
                                Trusted By Leading Organizations
                            </h2>
                            <p className="text-white/70">
                                Partnering with businesses committed to sustainability
                            </p>
                        </div>
                        <div
                            className="mt-5 lg:mt-8 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-4">
                            <a className="w-full sm:w-auto whitespace-nowrap py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary/40 focus:outline-hidden focus:bg-[#274034] disabled:opacity-50 disabled:pointer-events-none"
                               href="#">
                                Learn More
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
};

export default Impact;