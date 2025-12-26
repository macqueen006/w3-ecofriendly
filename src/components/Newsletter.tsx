import { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (email && email.includes('@')) {
            // Handle newsletter subscription
            console.log('Subscribing email:', email);
            // Add your subscription logic here
            setEmail('');
        }
    };

    const handleKeyPress = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <section className="bg-[#072416] py-10 px-4 relative overflow-hidden">
            <div
                className="absolute bottom-0 left-[200px] w-64 h-64 bg-[#BDFFED]/50 rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            <div
                className="absolute bottom-0 right-[200px] w-80 h-80 bg-[#00DB2C]/30 rounded-full opacity-15 blur-3xl translate-x-1/3 translate-y-1/2"></div>
            <div className="max-w-[871px] mx-auto space-y-4 text-white text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight sm:leading-tight md:leading-tight lg:leading-[96px] font-bold">
                    Newsletter
                </h2>

                {/* Newsletter Input */}
                <div className="w-full">
                    {/* Mobile Layout */}
                    <div className="sm:hidden space-y-3">
                        <div className="border border-white rounded-full py-3 px-5 bg-[#072416]/50 backdrop-blur-sm">
                            <input
                                type="email"
                                placeholder="Enter your Mail Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="bg-transparent w-full text-white text-base leading-relaxed placeholder:text-white/60 focus:outline-none"
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="bg-[#3d8c77] w-full text-white text-base leading-relaxed font-semibold rounded-full px-5 py-3 hover:bg-[#2d6b5a] active:bg-[#235647] focus:bg-[#2d6b5a] focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 transform active:scale-[0.98]"
                        >
                            Join Now
                        </button>
                    </div>

                    {/* Tablet & Desktop Layout */}
                    <div className="hidden sm:flex border max-w-lg mx-auto border-white rounded-full p-1 bg-[#072416]/50 backdrop-blur-sm">
                        <input
                            type="email"
                            placeholder="Enter your Mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="bg-transparent rounded-full flex-1 px-5 py-1.5 text-white text-base leading-relaxed placeholder:text-white/60 focus:outline-none transition-all"
                        />
                        <button type="button" className="py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#3d8c77] text-white hover:bg-primary focus:outline-hidden focus:bg-primary disabled:opacity-50 disabled:pointer-events-none">
                            Join Now
                        </button>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed md:leading-relaxed font-medium px-4 sm:px-0 max-w-lg mx-auto">
                Discover our latest repurified tech and stay informed on sustainable product drops.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;