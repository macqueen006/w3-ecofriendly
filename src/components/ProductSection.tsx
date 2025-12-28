export default function ProductSection() {
    const products = [
        {
            id: 1,
            price: "₦350,000",
            name: "MacBook Air",
            description: "2x Touch Display 2024",
            image: "/img/product.png"
        },
        {
            id: 2,
            price: "₦350,000",
            name: "EliteBook",
            description: "840 G6 2019,512GB 236 SSD",
            image: "/img/product.png"
        },
        {
            id: 3,
            price: "₦350,000",
            name: "MacBook Air",
            description: "2x Touch Display 2024",
            image: "/img/product.png"
        }
    ];

    return (
        <section className="mx-auto bg-[#E7EEEB] py-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center gap-4 justify-center">
                        <div
                            className="inline-flex w-fit justify-center items-center gap-2.5 px-4 py-2 bg-[#CEDAD6] rounded-full">
                            <img src="/img/sparkle.png" width="24" height="24" alt="" className="w-5 h-5 md:w-6 md:h-6"/>
                            <p className="text-sm sm:text-base">Refurbished Technology</p>
                        </div>
                        <h2 className="text-base sm:text-2xl font-medium leading-tight sm:leading-snug text-center px-4">
                            Enterprise-Grade Refurbished Devices for Sustainable IT Procurement
                        </h2>
                    </div>
                </div>

                {/* Products Section */}
                <div className="space-y-8 sm:space-y-10 md:space-y-[44px]">
                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="w-full flex justify-center items-center">
                        <button type="button" className="px-4 py-3 inline-flex mx-auto cursor-pointer justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-primary-foreground focus:outline-hidden focus:bg-primary disabled:opacity-50 disabled:pointer-events-none">
                            See all Products
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

type ProductCard = {
    id: number,
    price: string,
    name: string,
    description: string,
    image: string
}

function ProductCard({product}: { product: ProductCard }) {
    return (
        <div
            className="bg-white rounded-lg overflow-hidden relative h-full min-h-[380px] sm:min-h-64 flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
            {/* Blob background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-[65%] left-[50%] w-20 h-28 sm:w-[91px] sm:h-[142px] bg-emerald-900/20 rounded-full blur-2xl"/>
                <div
                    className="absolute top-[5%] left-[15%] w-20 h-28 sm:w-[91px] sm:h-[142px] bg-emerald-900/20 rounded-full blur-2xl"/>
                <div
                    className="absolute top-[35%] left-[70%] w-20 h-28 sm:w-[91px] sm:h-[142px] bg-[#008661]/20 rounded-full blur-2xl"/>
                <div
                    className="absolute top-[2%] left-[40%] w-20 h-28 sm:w-[91px] sm:h-[142px] bg-[#7929FF]/20 rounded-full blur-2xl"/>
                <div
                    className="absolute top-[45%] left-[8%] w-20 h-28 sm:w-[91px] sm:h-[142px] bg-[#6842FF]/20 rounded-full blur-2xl"/>
                <div
                    className="absolute top-[2%] left-0 w-20 h-28 sm:w-[91px] sm:h-[142px] bg-[#064E3B]/20 rounded-full blur-2xl"/>
                <div
                    className="absolute top-0 left-[75%] w-20 h-28 sm:w-[91px] sm:h-[142px] bg-[#00DB2C]/20 rounded-full blur-2xl"/>
            </div>

            {/* Product Image Container */}
            <div className="relative z-10 p-4 flex-grow">
                <span className="absolute top-4 left-4 sm:top-6 sm:left-6 font-medium bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                  {product.price}
                </span>
                <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <svg className="w-20 h-20 sm:w-24 sm:h-24 text-gray-400" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    )}
                </div>
            </div>

            {/* Product Details */}
            <div className="text-center flex flex-col gap-2 relative z-10 p-4 pt-0">
                <span className="font-medium text-lg leading-relaxed">
                  {product.name}
                </span>
                <span className="text-sm leading-6 text-gray-600">
                  {product.description}
                </span>
            </div>
        </div>
    );
}