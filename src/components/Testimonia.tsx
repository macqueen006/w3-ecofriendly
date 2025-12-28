import {useState} from 'react';

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "W3 Eco-Friendly provided a seamless and secure e-waste solution. Their documentation and recycling certificates strengthened our compliance reporting. An excellent partner for any organization.",
        },
        {
            text: "Outstanding service! The team handled our electronic waste disposal with professionalism and transparency. Their certification process gave us complete peace of mind.",
        },
        {
            text: "Exceptional e-waste management solution. The documentation was thorough and the recycling process was completely transparent. Highly recommended for corporate compliance needs.",
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <>
            {/* Testimonials */}
            <section className="relative max-w-[85rem] bg-[#dbe5e0] overflow-hidden px-4 py-10 mx-auto">
                {/* Blockquote */}
                <blockquote className="text-center lg:mx-auto lg:w-3/5">
                    <header className="flex flex-col items-center gap-4 justify-center max-w-[964px] mx-auto">
                        <div
                            className="inline-flex w-fit justify-center items-center gap-2.5 px-6 py-2 bg-[#CEDAD6] rounded-full">
                            <img width="24" height="24" className="sm:w-6 sm:h-6" alt="sparkle" src="/img/sparkle.png"/>
                            <p className="text-sm sm:text-base font-medium capitalize">testimonials</p>
                        </div>
                        <div className="text-gray-800 text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium ">
                            Read What Our users say about Us
                        </div>
                    </header>

                    <div className="mt-6 relative flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
                        {/* Third - Always visible */}
                        <div className="h-80 w-80 md:h-96 md:w-96 relative mx-auto flex justify-center items-center">
                            <div className="absolute inset-0">
                                <img
                                    src="/img/testimonial-img.png"
                                    className="inline-block w-full h-full object-cover"
                                    style={{ transform: 'translateX(-13%)' }}
                                    alt=""
                                />
                            </div>
                            {/* content */}
                            <div className="relative z-[2] w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 flex flex-col justify-center items-center">
                                <div className="mb-1 flex justify-center items-center">
                                    <svg width="30" height="30" className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 78 78" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.6602 35.8088C24.0597 35.8142 22.4875 36.2315 21.095 37.0204C23.0555 31.9457 26.3072 27.4709 30.5283 24.0388C30.7698 23.84 30.9697 23.5954 31.1167 23.3193C31.2638 23.0431 31.3549 22.7407 31.3851 22.4293C31.4152 22.1179 31.3837 21.8036 31.2924 21.5043C31.2011 21.2051 31.0517 20.9268 30.8528 20.6853C30.6539 20.4438 30.4094 20.2438 30.1332 20.0968C29.8571 19.9498 29.5546 19.8586 29.2432 19.8285C28.9318 19.7983 28.6175 19.8298 28.3183 19.9211C28.019 20.0125 27.7407 20.1618 27.4992 20.3607C18.8448 27.3924 14.9937 37.1286 14.9937 43.165C15.0086 45.2994 15.6446 47.3832 16.8241 49.1621C18.0037 50.941 19.6756 52.338 21.6359 53.1825C22.9045 53.797 24.2938 54.1222 25.7034 54.1344C26.9442 54.1947 28.1842 54.0024 29.3484 53.5692C30.5126 53.1359 31.5767 52.4707 32.4761 51.614C33.3756 50.7572 34.0916 49.7267 34.5809 48.5849C35.0702 47.4431 35.3225 46.2138 35.3225 44.9716C35.3225 43.7294 35.0702 42.5002 34.5809 41.3584C34.0916 40.2166 33.3756 39.1861 32.4761 38.3293C31.5767 37.4725 30.5126 36.8073 29.3484 36.3741C28.1842 35.9408 26.9442 35.7485 25.7034 35.8088H25.6602Z"
                                            fill="#10B981"/>
                                        <path
                                            d="M49.7627 35.8071C48.162 35.8106 46.5893 36.228 45.1975 37.0187C47.1573 31.9494 50.4004 27.4761 54.6092 24.0372C54.8726 23.8473 55.0944 23.6055 55.2609 23.3267C55.4273 23.0479 55.535 22.738 55.5772 22.416C55.6195 22.094 55.5954 21.7668 55.5064 21.4545C55.4175 21.1422 55.2655 20.8514 55.06 20.6C54.8544 20.3486 54.5996 20.142 54.3112 19.9927C54.0228 19.8435 53.7069 19.7549 53.3829 19.7323C53.059 19.7097 52.7338 19.7537 52.4275 19.8615C52.1212 19.9693 51.8402 20.1386 51.6018 20.3591C42.9474 27.3908 39.0962 37.1269 39.0962 43.1634C39.1064 45.2735 39.7239 47.3362 40.8749 49.1049C42.0259 50.8736 43.6617 52.2735 45.587 53.1375C46.8877 53.7701 48.3163 54.0957 49.7627 54.0895C51.0034 54.1498 52.2435 53.9575 53.4077 53.5242C54.5719 53.091 55.636 52.4258 56.5354 51.569C57.4348 50.7122 58.1509 49.6817 58.6402 48.5399C59.1294 47.3981 59.3817 46.1689 59.3817 44.9267C59.3817 43.6845 59.1294 42.4552 58.6402 41.3134C58.1509 40.1716 57.4348 39.1411 56.5354 38.2843C55.636 37.4276 54.5719 36.7624 53.4077 36.3291C52.2435 35.8959 51.0034 35.7036 49.7627 35.7639V35.8071Z"
                                            fill="#10B981"/>
                                    </svg>
                                </div>
                                <div className="transition-opacity duration-500">
                                    <p className="text-white/80 text-center text-xs sm:text-sm leading-relaxed">
                                        {testimonials[currentIndex].text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center items-center gap-4 sm:gap-8 lg:mt-0 lg:absolute lg:bottom-[191.1px] lg:left-1/2 lg:-translate-x-1/2 lg:max-w-4xl lg:w-full lg:justify-between">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex justify-center items-center hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.7576 9.10664L13.655 18.2037L22.7521 27.3063" stroke="#3D3D3D" strokeWidth="3.38685" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex justify-center items-center hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.71 27.3897L22.8699 18.3504L13.8307 9.19043" stroke="#3D3D3D" strokeWidth="3.38685" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </blockquote>
                {/* End Blockquote */}
            </section>
            {/* End Testimonials */}
        </>
    );
}