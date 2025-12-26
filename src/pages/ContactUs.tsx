import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";

const ContactUs = () => {
    return (
        <div className="bg-secondary-foreground">
            <Header/>
            <section className="max-w-[36rem] mx-auto pt-24 space-y-6 p-4">
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 bg-white/40 rounded-[20px]">
                    <div className="space-y-3">
                        <h2 className="text-lg font-semibold text-center px-4">
                            Get In Touch with Our Team
                        </h2>
                        <p className="text-base text-center text-gray-700">
                            Our support team is always available to provide assistance and guidance.
                        </p>
                    </div>
                    <div className="max-w-[685px] w-full mx-auto space-y-6">
                        <div className="w-full space-y-[14px]">
                            <label htmlFor="input-label" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="email"
                                id="input-label"
                                className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm focus:border-transparent focus:ring-2 focus:ring-[#0F5132] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="w-full space-y-[14px]">
                            <label htmlFor="input-label" className="block text-sm font-medium mb-2">Email
                                Address</label>
                            <input
                                type="email"
                                id="input-label"
                                className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm focus:border-transparent focus:ring-2 focus:ring-[#0F5132] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="mideybrown21@gmail.com"
                            />
                        </div>
                        <div className="w-full space-y-[14px]">
                            <label htmlFor="input-label" className="block text-sm font-medium mb-2">Company
                                (Optional)</label>
                            <input
                                type="email"
                                id="input-label"
                                className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm focus:border-transparent focus:ring-2 focus:ring-[#0F5132] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Educatech.NG Ltd"
                            />
                        </div>
                        <div className="w-full space-y-[14px]">
                            <label htmlFor="input-label" className="block text-sm font-medium mb-2">Message</label>
                            <div className="w-full space-y-3">
                            <textarea
                                className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-200 rounded-lg sm:text-sm focus:border-transparent focus:ring-2 focus:ring-[#0F5132] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                rows={6}
                                placeholder="Tell Us how we can help you?"
                            ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[472px] mx-auto p-4 sm:p-6">
                    <button type="button"
                            className="px-4 py-3 inline-flex w-full justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary text-white hover:bg-primary-foreground focus:outline-hidden focus:bg-primary disabled:opacity-50 disabled:pointer-events-none">
                        Send Message
                    </button>
                </div>
            </section>
            <div className="max-w-[380px] mx-auto space-y-6 p-4 sm:p-6">
                <h2 className="font-bold text-2xl text-center">Prefer a visit Approach ?</h2>
                <p className="text-base text-gray-700 text-center">Suit 73 & 74, Block D, Ipakodo Shopping Complex
                    Ikorodu Lagos State Nigeria</p>
                <div className="flex items-center justify-between w-[250px] mx-auto sm:w-full">
                    <span className="text-sm text-gray-700">W3@Ecofrienldy.com</span>
                    <span className="text-sm text-gray-700">+2348077875562</span>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default ContactUs;