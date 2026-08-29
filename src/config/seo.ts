import { siteConfig } from "./site";

type SeoEntry = {
  title: string;
  description: string;
  url: string;
  image?: string;
  robots?: string;
};

export const seoConfig: Record<string, SeoEntry> = {
  "/": {
    title: "W3 Eco Friendly Ltd - Secure E-Waste Collection, Recycling & Data Destruction in Nigeria",
    description:
      "Secure electronic-waste collection, certified recycling, refurbishment, data destruction and compliance certification for enterprises, government and institutions in Lagos and across Nigeria. Request a pickup.",
    url: "/",
    image: `${siteConfig.url}/img/hero.avif`,
  },
  "/about": {
    title: "About W3 Eco Friendly Ltd - Responsible E-Waste Management in Nigeria",
    description:
      "Learn how W3 Eco Friendly Ltd delivers compliant, secure and documented e-waste management - collection, processing, data destruction, certification and environmental-impact reporting.",
    url: "/about",
    image: `${siteConfig.url}/img/generated-6.avif`,
  },
  "/impact": {
    title: "Environmental Impact - Measurable Results from Responsible Recycling",
    description:
      "Verified environmental outcomes from responsible e-waste management. Transparency, traceability and compliance for ESG and regulatory reporting.",
    url: "/impact",
    image: `${siteConfig.url}/img/impact-hero.avif`,
  },
  "/w3-shop": {
    title: "W3 Shop - Refurbished Technology, Coming Soon",
    description:
      "W3 Shop is being prepared as a trusted destination for carefully inspected refurbished devices that extend the useful life of technology. Coming soon.",
    url: "/w3-shop",
    image: `${siteConfig.url}/img/hero.avif`,
    robots: "noindex, follow",
  },
  "/contact-us": {
    title: "Contact Us - Request an E-Waste Pickup",
    description:
      "Request an e-waste pickup, ask about secure data destruction or compliance certification. W3 Eco Friendly Ltd, Ikorodu, Lagos - W3@Ecofriendly.com - +234 807 787 5562.",
    url: "/contact-us",
  },
};
