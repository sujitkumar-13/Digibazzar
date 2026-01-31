"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export type FooterProps = {
    className?: string;
};

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export const Footer = ({ className }: FooterProps) => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            const elem = document.getElementById(targetId);
            if (elem) {
                const offset = 80;
                const elementPosition = elem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <footer className={`bg-black text-white pt-16 pb-8 text-base ${className}`}>
            <div className="w-full mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Branding */}
                    <div className="flex flex-col space-y-6">
                        <motion.a
                            href="/"
                            className="flex items-center"
                        >
                            <img
                                src="/logo.webp"
                                alt="The Digibazzar"
                                className="aspect-[399/213] block max-h-12 w-auto"
                            />
                        </motion.a>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                            A multi award winning digital agency based in India. With a distinct offering in Technical Web, Digital Marketing and Creative.
                        </p>
                    </div>

                    {/* Careers */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="uppercase font-bold tracking-wider text-gray-400 text-sm">Careers</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Looking for talented people to join the team. Scan our careers page to find out about working for us.
                        </p>
                        <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="text-amber-400 text-sm font-semibold hover:underline">Join the flock &rarr;</a>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="uppercase font-bold tracking-wider text-gray-400 text-sm">Need Support?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            On our support plan? feel free to submit a ticket or give us a call during business hours.
                        </p>
                        <p className="text-xs text-gray-500">09.00 am – 17.00 pm</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="uppercase font-bold tracking-wider text-gray-400 text-sm">Quick Links</h3>
                        <div className="flex flex-col space-y-2">
                            {QUICK_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="text-gray-400 text-sm hover:text-amber-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="uppercase font-bold tracking-wider text-gray-400 text-sm">Contact Us</h3>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                <address className="not-italic text-sm text-gray-400 leading-relaxed">
                                    27 Old Gloucester Street,<br />
                                    Varanasi, Uttar Pradesh, India
                                </address>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                                <a href="tel:+917524057749" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    +91 7524057749
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                                <a href="mailto:thedigibazzar@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-amber-400/30">
                                    thedigibazzar@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="flex gap-2">
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/bitcoin-btc-logo-2.png" alt="Bitcoin" className="h-6 w-auto" />
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/monero-xmr-logo.png" alt="Monero" className="h-6 w-auto" />
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/ethereum-eth-logo-2.png" alt="Ethereum" className="h-6 w-auto" />
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/tether-usdt-logo-2.png" alt="Tether" className="h-6 w-auto" />
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/usd-coin-usdc-logo-2.png" alt="USD Coin" className="h-6 w-auto" />
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/visa-new-png.png" alt="Visa" className="h-6 w-auto" />
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/mastercard-icon-small.png" alt="Mastercard" className="h-6 w-auto" />
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/swift-logo-60.png" alt="Swift" className="h-6 w-auto" />
                            <img src="https://c.animaapp.com/mkz11li0RsXIrT/assets/direct-debit-icon-small-white-cons.png" alt="Direct Debit" className="h-6 w-auto" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs border-t border-white/5 pt-8">
                        <div className="text-center md:text-left space-y-2">
                            <p>© 2026 Digibazzar Marketing. All Rights Reserved.</p>
                            <p>Registered Address: 27 Old Gloucester Street, Varanasi, Uttar Pradesh, India. | <a href="/sitemap/" className="hover:text-amber-400 underline decoration-white/10">Sitemap</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
