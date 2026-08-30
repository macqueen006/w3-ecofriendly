import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { primaryNav } from "@/config/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isMenuOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200 ${
          isScrolled
            ? "border-black/10 bg-white/95 backdrop-blur-md shadow-sm"
            : "border-transparent bg-white/80 backdrop-blur-md"
        }`}
        role="banner"
      >
        <nav
          ref={menuRef}
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="W3 Eco Friendly - Home"
          >
            <img
              src="/img/logo.avif"
              alt="W3 Eco Friendly logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              loading="eager"
            />
            <span className="hidden text-sm font-semibold tracking-tight text-zinc-900 sm:inline">
              W3 Eco Friendly
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {primaryNav.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-zinc-900 text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0a3d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Request Pickup
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition-all ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-4 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[12px] h-0.5 w-4 bg-current transition-all ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className={`border-t border-zinc-100 bg-white md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1" role="list">
              {primaryNav.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex w-full rounded-xl px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                        isActive
                          ? "bg-zinc-900 text-white"
                          : "text-zinc-700 hover:bg-zinc-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 border-t border-zinc-100 pt-4">
              <Link
                to="/contact-us"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a3d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Request Pickup
              </Link>
              <p className="mt-2 text-center text-xs text-zinc-500">
                For enterprises &amp; institutions - secure &amp; certified.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so fixed header does not overlap content */}
      <div aria-hidden="true" className="h-16" />
    </>
  );
}
