import { Link, useLocation } from "react-router";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/navigation";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-[#072416] text-white" role="contentinfo" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/img/logo.avif" alt="W3 Eco Friendly logo" width={40} height={40} className="h-10 w-10 object-contain" loading="lazy" />
              <span className="text-sm font-semibold tracking-tight">W3 Eco Friendly Ltd</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/70">
              Secure electronic-waste collection, responsible recycling and refurbishment, certified data destruction and compliance reporting for enterprises and institutions in Nigeria.
            </p>
          </div>

          {/* Quick links - 5 approved pages only */}
          <nav aria-labelledby="footer-nav-heading">
            <h2 id="footer-nav-heading" className="text-sm font-semibold tracking-wide text-white">
              Pages
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-flex items-center gap-2 text-sm transition-colors focus:outline-none focus-visible:underline ${
                        isActive ? "font-medium text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1 w-1 rounded-full bg-white transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">Contact</h2>
            <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-white/70">
              <p>
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.locality}, {siteConfig.contact.address.region}
                <br />
                {siteConfig.contact.address.countryName}
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white focus:outline-none focus-visible:underline"
                >
                  {siteConfig.contact.email}
                </a>
                <br />
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="hover:text-white focus:outline-none focus-visible:underline"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-xs text-white/50">
                {siteConfig.businessHours.days}: {siteConfig.businessHours.hours}
              </p>
            </address>
          </div>

          {/* Legal note - no placeholder # links */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">More</h2>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Legal and privacy pages will appear here when available. Need help?{" "}
              <Link to="/contact-us" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white focus:outline-none focus-visible:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs leading-6 text-white/50 sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} W3 Eco Friendly Ltd, Nigeria. All rights reserved.</span>
          <span>Ikorodu, Lagos - Serving enterprises &amp; institutions across Nigeria.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
