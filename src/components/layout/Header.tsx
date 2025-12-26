import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef<HTMLElement>(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open on mobile
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'W3 B2', path: '/w3-b2' },
        { name: 'W3 Ecotech', path: '/w3-ecotech' },
        { name: 'Impact', path: '/impact' },
        { name: 'Contact Us', path: '/contact-us' }
    ];

    return (
        <>
            {/* Overlay - only visible on mobile when menu is open */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 md:hidden transition-opacity duration-300"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            <header className={`${isScrolled ? 'absolute' : 'fixed'} top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-10 w-full max-w-2xl mx-auto transition-all duration-300`}>
                <nav ref={menuRef} className={`relative bg-white max-w-[66rem] w-full bg-light-blue rounded-[28px] py-1 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto ${
                    isScrolled ? 'shadow-lg' : ''
                } transition-shadow duration-300`}
                     aria-label="Global"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            className="flex-none rounded-md text-xl inline-block font-bold text-black focus:outline-none focus:opacity-80"
                            to="/"
                            aria-label="Minimal"
                        >
                            <img
                                src="logo.png"
                                className="inline-block object-cover h-10 w-10"
                                width="40"
                                height="40"
                                alt="logo"
                            />
                        </Link>

                        {/* Mobile Menu Toggle Button */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle navigation"
                            >
                                {/* Hamburger Icon */}
                                <svg
                                    className={`${isMenuOpen ? 'hidden' : 'block'} flex-shrink-0 size-4`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="3" x2="21" y1="6" y2="6"></line>
                                    <line x1="3" x2="21" y1="12" y2="12"></line>
                                    <line x1="3" x2="21" y1="18" y2="18"></line>
                                </svg>

                                {/* Close Icon */}
                                <svg
                                    className={`${isMenuOpen ? 'block' : 'hidden'} flex-shrink-0 size-4`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div
                        className={`${
                            isMenuOpen ? 'block' : 'hidden'
                        } overflow-hidden transition-all duration-300 basis-full grow md:block`}
                    >
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-between md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                            {navLinks.map((link, index) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={index}
                                        className={`text-sm md:py-4 focus:outline-none transition-colors relative ${
                                            isActive
                                                ? 'text-primary font-semibold'
                                                : 'text-black hover:text-primary'
                                        }`}
                                        to={link.path}
                                        aria-current={isActive ? 'page' : undefined}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                        {/* Active indicator underline */}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary hidden md:block" />
                                        )}
                                    </Link>
                                );
                            })}

                            {/* User Profile */}
                            <div className="flex justify-start md:justify-center items-center py-2 md:py-0">
                                <Link
                                    className="group inline-flex items-center rounded-full focus:outline-none border border-primary hover:border-opacity-70 transition-all"
                                    to="#"
                                    onClick={closeMenu}
                                >
                                    <img
                                        src="user.png"
                                        className="w-10 h-10 inline-block object-cover rounded-full"
                                        width="40"
                                        height="40"
                                        alt="user image"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}