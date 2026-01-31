"use client";

import { motion } from "framer-motion";

export type FooterProps = {
    variant?: string;
    logoUrl?: string;
    logoAlt?: string;
    description?: string;
    ctaText?: string;
    ctaUrl?: string;
    googleReviewImageUrl?: string;
    googleReviewImageAlt?: string;
    trustpilotImageUrl?: string;
    trustpilotImageAlt?: string;
    locations?: Array<{
        name: string;
        url?: string;
        address: React.ReactNode;
        phone: string;
        phoneUrl: string;
        email: string;
        emailUrl: string;
    }>;
    quickLinks?: Array<{
        text: string;
        url: string;
    }>;
    careersTitle?: string;
    careersDescription?: string;
    careersLinkText?: string;
    careersLinkUrl?: string;
    supportTitle?: string;
    supportDescription?: React.ReactNode;
    supportEmail?: string;
    supportEmailUrl?: string;
    legalLinks?: Array<{
        text: string;
        url: string;
    }>;
    paymentIcons?: Array<{
        src: string;
        alt: string;
        aspectClass?: string;
    }>;
    copyrightText?: React.ReactNode;
    sitemapUrl?: string;
    socialLinks?: Array<{
        url: string;
        iconClass: string;
    }>;
};

export const Footer = (_props: FooterProps) => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 text-base">
            <div className="w-full mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
                    {/* Column 1: Branding & CTA */}
                    <div className="flex flex-col space-y-6">
                        <motion.a
                            href="/"
                            className="text-black items-center bg-black flex grow justify-center min-h-[auto] min-w-[auto] text-center ml-[30px] mr-[82px] py-1.5 md:py-2.5 rounded-[10px] md:[align-items:normal] md:block md:grow-0 md:justify-normal md:min-h-0 md:min-w-0 md:text-left md:mx-0 hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src="/logo.webp"
                                alt="The Digibazzar"
                                className="aspect-[399/213] block max-h-[50px] md:max-h-16 w-auto min-h-[auto] min-w-[auto] text-center mx-0 md:inline md:min-h-0 md:min-w-0 md:text-left md:mx-4"
                            />
                        </motion.a>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            A multi award winning digital agency based in the India. With a distinct offering in Technical Web, Digital Marketing and Creative.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-lg mb-1">Interested in working with us?</h4>
                            <a href="/" className="text-lg underline hover:text-gray-300 decoration-1">
                                Start a Project
                            </a>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <img
                                src="https://c.animaapp.com/mkz11li0RsXIrT/assets/google-reviews-1.png"
                                alt="Google Reviews"
                                className="h-12 w-auto object-contain"
                            />
                            <img
                                src="https://c.animaapp.com/mkz11li0RsXIrT/assets/trustpilot-bird3x.png"
                                alt="Trustpilot Reviews"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Column 2: London & Careers */}
                    <div className="flex flex-col space-y-12">
                        <div>
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">India</h3>
                            <address className="not-italic text-gray-300 mb-4 text-sm leading-relaxed">
                                13 Austin Friars,<br />
                                India,<br />
                                EC2N 2HE
                            </address>
                            <div className="flex flex-col space-y-1 text-sm">
                                <a href="tel:+442083381206" className="hover:text-white dark:text-gray-300">+91 7524057749</a>
                                <a href="mailto:thedigibazzar@gmail.com" className="hover:text-white dark:text-gray-300 underline">thedigibazzar@gmail.com</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Careers</h3>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                We are always looking for talented people to join the team. Scan our careers page to find out about working for us and see if there is an opportunity to become part of the flock.
                            </p>
                            <a href="/" className="underline hover:text-white text-sm">Careers</a>
                        </div>
                    </div>

                    {/* Column 3: Essex & Support */}
                    <div className="flex flex-col space-y-12">
                        <div>
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Essex</h3>
                            <address className="not-italic text-gray-300 mb-4 text-sm leading-relaxed">
                                128a High Street,<br />
                                Billericay, Essex,<br />
                                CM12 9XE
                            </address>
                            <div className="flex flex-col space-y-1 text-sm">
                                <a href="tel:7524057749" className="hover:text-white dark:text-gray-300">+91 7524057749</a>
                                <a href="mailto:thedigibazzar@gmail.com" className="hover:text-white dark:text-gray-300 underline">thedigibazzar@gmail.com</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Need Support?</h3>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                On our support plan? feel free to submit a ticket or give us a call during business hours.
                            </p>
                            <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
                                <span className="text-amber-300">⏰</span> 09.00 am – 17.00 pm
                            </div>
                            <a href="mailto:sthedigibazzar@gmail.com" className="underline hover:text-white text-sm">thedigibazzar@gmail.com</a>
                        </div>
                    </div>

                    {/* Column 4: Glasgow & Legal */}
                    <div className="flex flex-col space-y-12">
                        <div>
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Glasgow</h3>
                            <address className="not-italic text-gray-300 mb-4 text-sm leading-relaxed">
                                30 Stanley Street,<br />
                                Glasgow,<br />
                                G41 1JB
                            </address>
                            <div className="flex flex-col space-y-1 text-sm">
                                <a href="tel:7524057749" className="hover:text-white dark:text-gray-300">+91 7524057749</a>
                                <a href="mailto:thedigibazzar@gmail.com" className="hover:text-white dark:text-gray-300 underline">thedigibazzar@gmail.com</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Legal</h3>
                            <div className="flex flex-col space-y-2 text-gray-300 text-sm">
                                <a href="/" className="hover:text-white">Terms & Conditions</a>
                                <a href="https://www.nominet.uk/uk-domains/policies/" className="hover:text-white">Nominet Terms</a>
                                <a href="/" className="hover:text-white">Privacy Policy</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 5: Quick Links */}
                    <div className="flex flex-col">
                        <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Quick Links</h3>
                        <div className="flex flex-col space-y-2 text-gray-300 text-sm">
                            <a href="/" className="hover:text-white">Nest</a>
                            <a href="/" className="hover:text-white">Email Marketing</a>
                            <a href="/" className="hover:text-white">Marketing Portal</a>
                            <a href="/" className="hover:text-white">Digital Marketing Glossary</a>
                            <a href="/" className="hover:text-white">Digital Marketing Agency London</a>
                            <a href="/" className="hover:text-white">Digital Marketing Agency Essex</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="mb-4 md:mb-0">
                            <span className="font-bold text-lg">Home</span>
                        </div>
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

                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <p>© 2026 Digibuzzer Marketing. Digibuzzer Marketing Limited - Company No. 08051880 - VAT Reg No. GB204642831</p>
                            <p className="mt-1">Registered Address: 27 Old Gloucester Street, Varanasi, Uttar Pradesh, India. - <a href="/sitemap/" className="underline hover:text-gray-300">Sitemap</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
