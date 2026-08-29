export const siteConfig = {
  name: "W3 Eco Friendly Ltd",
  shortName: "W3 Eco Friendly",
  url: "https://w3eco-friendly.com",
  description:
    "W3 Eco Friendly Ltd provides secure electronic-waste collection, responsible recycling and refurbishment, certified data destruction, compliance certification and environmental-impact reporting for enterprises and institutions in Nigeria.",
  locale: "en_NG",
  logo: "https://w3eco-friendly.com/img/logo.avif",
  ogImage: "https://w3eco-friendly.com/img/hero.avif",
  contact: {
    email: "W3@Ecofriendly.com",
    emailSecondary: "info@w3eco-friendly.com",
    phoneDisplay: "+234 807 787 5562",
    phoneHref: "+2348077875562",
    address: {
      street: "Suit 73 & 74, Block D, Ipakodo Shopping Complex",
      locality: "Ikorodu",
      region: "Lagos State",
      country: "NG",
      countryName: "Nigeria",
    },
  },
  businessHours: {
    days: "Monday – Friday",
    hours: "09:00 – 18:00",
    closedNote: "Weekends: Closed",
  },
  areaServed: "NG",
  foundingYear: "2020",
} as const;

export type SiteConfig = typeof siteConfig;
