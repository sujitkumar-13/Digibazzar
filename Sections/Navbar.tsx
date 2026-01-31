"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const MENU_LINKS = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            const elem = document.getElementById(targetId);
            if (elem) {
                const offset = 80; // Header height
                const elementPosition = elem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full transition-colors duration-300 z-[100000] h-20 flex items-center border-b border-white/5 ${isMenuOpen ? 'bg-black' : 'bg-black/95 backdrop-blur-md'}`}>
            <div className="w-full px-6 flex items-center justify-between relative z-50">
                {/* NavbarLogo */}
                <motion.a
                    href="/"
                    className="flex items-center"
                    onClick={(e) => handleLinkClick(e, "#home")}
                >
                    <div className="flex flex-col items-center">
                        <img
                            src="/logo.webp"
                            alt="Digibazzar"
                            className="aspect-[399/213] block max-h-12 w-auto text-center mx-0 md:inline md:min-h-0 md:min-w-0 md:text-left md:mx-4"
                        />
                    </div>
                </motion.a>

                {/* Mobile Controls (Visible only on mobile inside this header) */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            const contactElem = document.getElementById("contact");
                            if (contactElem) {
                                const offset = 80;
                                const elementPosition = contactElem.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                            }
                        }}
                        className="bg-amber-400 text-black px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-wider"
                    >
                        Get A Quote
                    </button>
                    <button
                        type="button"
                        aria-label="Toggle Menu"
                        className="text-white p-2 outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* DesktopMenu */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex list-none items-center space-x-8">
                        {MENU_LINKS.map(({ label, href }) => (
                            <li key={label} className="relative group">
                                <a
                                    href={href}
                                    onClick={(e) => handleLinkClick(e, href)}
                                    className="text-white text-sm font-semibold uppercase tracking-wider hover:text-amber-300 transition-colors"
                                >
                                    <span className="relative">{label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* DesktopButtons */}
                <div className="hidden md:flex items-center space-x-6">
                    <button
                        onClick={() => {
                            const contactElem = document.getElementById("contact");
                            if (contactElem) {
                                const offset = 80;
                                const elementPosition = contactElem.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                            }
                        }}
                        className="bg-amber-400 text-black px-6 py-2 rounded-md text-sm font-bold uppercase hover:bg-amber-500 transition-all font-black tracking-widest"
                    >
                        Get A Quote
                    </button>
                </div>
            </div>

            {/* MobileMenu Overlay Content */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black z-40 md:hidden flex flex-col pt-10"
                    >
                        <div className="flex-grow flex flex-col items-center justify-center space-y-4 px-10 text-center">
                            {MENU_LINKS.map(({ label, href }, idx) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.04 }}
                                >
                                    <a
                                        href={href}
                                        onClick={(e) => handleLinkClick(e, href)}
                                        className="text-white text-[2.5rem] font-black uppercase tracking-tighter hover:text-amber-400 transition-colors"
                                    >
                                        {label}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

