export type NavItem = {
  name: string;
  path: string;
};

export const primaryNav: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Impact", path: "/impact" },
  { name: "W3 Shop", path: "/w3-shop" },
  { name: "Contact Us", path: "/contact-us" },
];

export const footerNav: NavItem[] = [...primaryNav];
