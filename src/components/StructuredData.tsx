interface Address {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry: string
}

interface ContactPoint {
    telephone?: string
    email?: string
    contactType?: string
    areaServed?: string
    availableLanguage?: string[]
}

interface OrganizationSchemaProps {
    name?: string
    url?: string
    logo?: string
    description?: string
    address?: Address
    contactPoint?: ContactPoint
    foundingDate?: string
    sameAs?: string[]
}

export function OrganizationSchema({
    name = "W3 Eco Friendly",
    url = "https://w3eco-friendly.com",
    logo = "https://w3eco-friendly.com/img/logo.png",
    description = "Sustainable and eco-friendly solutions for a greener future",
    address = {
        streetAddress: "Suit 73 & 74, Block D, Ipakodo Shopping Complex",
        addressLocality: "Ikorodu",
        addressRegion: "Lagos State",
        addressCountry: "NG"
    },
    contactPoint = {
        telephone: "+234-807-787-5562",
        email: "info@w3eco-friendly.com",
        contactType: "Customer Service",
        areaServed: "NG",
        availableLanguage: ["English"]
    },
    foundingDate = "2020",
    sameAs = [
        "https://facebook.com/w3ecofriendly",
        "https://twitter.com/w3ecofriendly",
        "https://instagram.com/w3ecofriendly",
        "https://linkedin.com/company/w3ecofriendly"
    ]
}: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "url": url,
        "logo": logo,
        "description": description,
        "foundingDate": foundingDate,
        "address": {
            "@type": "PostalAddress",
            ...address
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "9.0765",
            "longitude": "7.3986"
        },
        "telephone": "+234-807-787-5562",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            ...contactPoint
        },
        "sameAs": sameAs
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function StatisticsSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "EnvironmentalAction",
            "name": "W3 Eco-friendly E-Waste Impact",
            "description": "Environmental impact of W3 Eco-friendly e-waste management services",
            "result": [
                {
                    "@type": "QuantitativeValue",
                    "value": "3242.7",
                    "unitText": "tons",
                    "name": "E-waste recovered"
                },
                {
                    "@type": "QuantitativeValue",
                    "value": "1000",
                    "unitText": "tons CO2",
                    "name": "Emissions avoided"
                }
            ]
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export const ContactPageSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "W3 Eco Friendly Ltd",
            "url": "https://w3eco-friendly.com",
            "logo": "https://w3eco-friendly.com/img/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-807-787-5562",
                "contactType": "Customer Service",
                "email": "W3@Ecofriendly.com",
                "areaServed": "NG",
                "availableLanguage": ["English"],
                "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                }
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suit 73 & 74, Block D, Ipakodo Shopping Complex",
                "addressLocality": "Ikorodu",
                "addressRegion": "Lagos State",
                "addressCountry": "NG"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export const ImpactPageSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Environmental Impact - W3 Eco Friendly",
        "description": "Measurable environmental impact from W3 Eco Friendly's e-waste recycling operations",
        "mainEntity": {
            "@type": "Organization",
            "name": "W3 Eco Friendly Ltd",
            "url": "https://w3eco-friendly.com",
            "sameAs": [
                "https://facebook.com/w3ecofriendly",
                "https://twitter.com/w3ecofriendly",
                "https://instagram.com/w3ecofriendly"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "E-Waste Recycling Services",
                "itemListElement": [
                    {
                        "@type": "Service",
                        "serviceType": "Electronic Waste Recycling",
                        "provider": {
                            "@type": "Organization",
                            "name": "W3 Eco Friendly Ltd"
                        }
                    }
                ]
            },
            "makesOffer": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-Waste Collection and Recycling",
                        "description": "Professional electronic waste collection, processing, and recycling services"
                    }
                }
            ]
        },
        "about": [
            {
                "@type": "QuantitativeValue",
                "value": "52847",
                "unitText": "devices",
                "name": "Electronics Recycled",
                "description": "Total number of electronic devices recycled"
            },
            {
                "@type": "QuantitativeValue",
                "value": "56",
                "unitText": "certificates",
                "name": "Certificates Issued",
                "description": "Recycling certificates issued to clients"
            },
            {
                "@type": "QuantitativeValue",
                "value": "8.5",
                "unitText": "tons",
                "name": "Metals Recovered",
                "description": "Precious metals recovered from e-waste"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export const W3EcotechSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "W3 EcoTech - Digital E-Waste Management Platform",
        "description": "Environmental technology platform for waste management, recycling, and circular-economy innovation",
        "brand": {
            "@type": "Organization",
            "name": "W3 Eco Friendly Ltd"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "NGN",
            "offerCount": "4",
            "offers": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "TraceWaste",
                        "description": "Track and monitor waste flow with real-time analytics and comprehensive reporting"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Surveillance Portal",
                        "description": "Compliance monitoring with advanced surveillance and reporting tools"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "API Integration",
                        "description": "Integrate waste data and workflows seamlessly into your existing systems"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Metal Services",
                        "description": "Access to metal markets worldwide with global trading network"
                    }
                }
            ]
        },
        "provider": {
            "@type": "Organization",
            "name": "W3 Eco Friendly Ltd",
            "url": "https://w3eco-friendly.com"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};