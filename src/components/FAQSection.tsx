import { useState, type SetStateAction} from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What does We3 Ecofriendly do?",
            answer: "We3 Ecofriendly helps individuals and businesses recycle electronic waste safely. We offer scheduled pickups, certified recycling, refurbished electronics, and expert support."
        },
        {
            question: "How do I schedule a pickup?",
            answer: "You can easily schedule a pickup through our website or mobile app. Simply select your preferred date and time, list the items you want to recycle, and our team will come to your location to collect them."
        },
        {
            question: "Do you support businesses?",
            answer: "Yes! We offer comprehensive B2B solutions for businesses of all sizes. Our services include bulk e-waste collection, asset management, data destruction, and compliance reporting to help your organization meet sustainability goals."
        },
        {
            question: "Can I speak to an expert?",
            answer: "Absolutely! Our team of e-waste specialists is available to answer your questions. You can reach us through our contact page, phone support, or live chat. We're here to help you make informed decisions about electronic recycling."
        },
        {
            question: "What happens after collection?",
            answer: "After collection, your electronics are transported to our certified facility where they undergo thorough sorting, data wiping, and responsible recycling. Reusable components are refurbished, while materials are safely processed to minimize environmental impact."
        }
    ];

    const toggleFAQ = (index: SetStateAction<number>) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-10 sm:py-12 md:py-14 lg:py-[57px] px-4 sm:px-6">
            <div className="max-w-[1234px] mx-auto">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 justify-center max-w-4xl mx-auto">
                        <div className="inline-flex w-fit justify-center items-center gap-2.5 px-6 py-2 bg-[#CEDAD6] rounded-full">
                            <img width="24" height="24" alt="" src="/img/sparkle.png"/>
                            <p className="text-sm sm:text-base font-medium">FAQS</p>
                        </div>
                        <h2 className="text-base sm:text-2xl font-bold md:leading-tight max-w-2xl mx-auto text-gray-900 text-center">
                            Find quick answers to the most common questions about our services.
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-x-12 lg:gap-y-[44px] lg:items-start max-w-5xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`w-full p-4 sm:py-5 space-y-3 shadow-lg rounded-lg bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl ${
                                    openIndex === index ? 'lg:row-span-2' : ''
                                }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex gap-4 sm:gap-5 md:gap-6 items-start justify-start text-left group focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 rounded-md p-1 -m-1"
                                    aria-expanded={openIndex === index}
                                >
                                    <div className="flex-shrink-0 mt-1 transition-transform duration-300">
                                        {openIndex === index ? (
                                            <svg
                                                width="20"
                                                height="20"
                                                className="sm:w-6 sm:h-6 text-[#064E3B]"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                width="20"
                                                height="20"
                                                className="sm:w-6 sm:h-6 text-black"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="sm:text-lg font-semibold text-gray-800">
                                        {faq.question}
                                    </h3>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >

                                    <p className="mt-2 text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;