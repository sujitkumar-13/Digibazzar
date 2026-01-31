"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const MENU_LINKS = [
        { label: "Home", href: "/" },
        { label: "About", href: "/" },
        { label: "Services", subMenu: true },
        { label: "Industries", subMenu: true },
        { label: "Case Studies", href: "/case-studies/" },
        { label: "Careers", href: "/careers/" },
        { label: "Blog", href: "/" },
        { label: "Contact", href: "/" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`fixed top-0 left-0 w-full transition-colors duration-300 z-[100000] h-20 flex items-center border-b border-white/5 ${isMenuOpen ? 'bg-black' : 'bg-black/95 backdrop-blur-md'}`}>
            <div className="w-full px-6 md:px-10 h-full flex items-center justify-between relative z-50">
                {/* NavbarLogo */}
                <motion.a
                    href="/"
                    className="text-black items-center flex grow justify-center min-h-[auto] min-w-[auto] text-center ml-[30px] mr-[82px] py-1.5 md:py-2.5 rounded-[10px] md:[align-items:normal] md:block md:grow-0 md:justify-normal md:min-h-0 md:min-w-0 md:text-left md:mx-0 transition-all"
                >
                    <img
                        src="/logo.webp"
                        alt="The Digibazzar"
                        className="aspect-[399/213] block max-h-12 w-auto text-center mx-0 md:inline md:min-h-0 md:min-w-0 md:text-left md:mx-4"
                    />
                </motion.a>

                {/* DesktopMenu */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex list-none items-center space-x-8">
                        {MENU_LINKS.map(({ label, href, subMenu }) => (
                            <li key={label} className="relative group">
                                <a
                                    href={href}
                                    className="text-white text-sm font-semibold uppercase tracking-wider hover:text-amber-300 transition-colors"
                                >
                                    <span className="relative">{label}</span>
                                </a>
                                {subMenu && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-white/10 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4">
                                        <div className="space-y-2">
                                            <a href="#" className="block text-white/70 hover:text-amber-300 text-xs uppercase tracking-wider">Service 1</a>
                                            <a href="#" className="block text-white/70 hover:text-amber-300 text-xs uppercase tracking-wider">Service 2</a>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* DesktopButtons */}
                <div className="hidden md:flex items-center space-x-6">
                    <a
                        href="/"
                        className="bg-amber-400 text-black px-6 py-2 rounded-md text-sm font-bold uppercase hover:bg-amber-500 transition-all font-black tracking-widest"
                    >
                        Get A Quote
                    </a>
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center md:hidden gap-3">
                    <a
                        href="/"
                        className="bg-amber-400 text-black px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-wider"
                    >
                        Get A Quote
                    </a>
                    <button
                        type="button"
                        aria-label="Toggle Menu"
                        className="text-white p-2 outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* MobileMenu Overlay Content */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="fixed inset-0 z-[90] md:hidden flex flex-col pt-24"
                        style={{ backgroundColor: '#000000' }}
                    >
                        {/* Header inside Menu (to match ref image header layout) */}
                        <div className="absolute top-0 left-0 w-full h-20 px-6 flex items-center justify-between">
                            <img
                                src="/logo.webp"
                                alt="Bird"
                                className="h-8 w-auto invert brightness-0"
                            />
                            <div className="flex items-center gap-4">
                                <a
                                    href="/"
                                    className="bg-amber-400 text-black px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-wider"
                                >
                                    Get A Quote
                                </a>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white p-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col items-center justify-center space-y-2 px-6 text-center">
                            {MENU_LINKS.map(({ label, href }, idx) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.05 }}
                                >
                                    <a
                                        href={href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-white text-[2.75rem] leading-[1.1] font-black uppercase tracking-tighter hover:text-amber-400 transition-colors"
                                    >
                                        {label}
                                    </a>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="pt-6"
                            >
                                <button className="flex items-center gap-3 text-white border-b-2 border-amber-400 pb-1 text-3xl font-black uppercase tracking-widest">
                                    <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-8" />
                                    EN (UK)
                                </button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="p-8 pb-10 text-center"
                        >
                            <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-[0.2em] max-w-[320px] mx-auto font-medium">
                                © Bird Marketing, Bird Marketing Limited - Company No. 08051880 - VAT Reg No. GB204642821
                                <br />
                                Registered in England & Wales. Registered Office: Sovereign House, Arisdale Avenue, South Ockendon, Essex, RM15 5TT
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

