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
                        <div className="w-32">
                            <img
                                src="https://c.animaapp.com/mkz11li0RsXIrT/assets/bird-white-02-1.svg"
                                alt="Bird Marketing Logo"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            A multi award winning digital agency based in the United Kingdom. With a distinct offering in Technical Web, Digital Marketing and Creative.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-lg mb-1">Interested in working with us?</h4>
                            <a href="/quote/" className="text-lg underline hover:text-gray-300 decoration-1">
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
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">London</h3>
                            <address className="not-italic text-gray-300 mb-4 text-sm leading-relaxed">
                                13 Austin Friars,<br />
                                London,<br />
                                EC2N 2HE
                            </address>
                            <div className="flex flex-col space-y-1 text-sm">
                                <a href="tel:+442083381206" className="hover:text-white dark:text-gray-300">+44 208 338 1206</a>
                                <a href="mailto:london@bird.co.uk" className="hover:text-white dark:text-gray-300 underline">london@bird.co.uk</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Careers</h3>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                We are always looking for talented people to join the team. Scan our careers page to find out about working for us and see if there is an opportunity to become part of the flock.
                            </p>
                            <a href="/careers/" className="underline hover:text-white text-sm">Careers</a>
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
                                <a href="tel:+441277286565" className="hover:text-white dark:text-gray-300">+44 1277 286565</a>
                                <a href="mailto:essex@bird.co.uk" className="hover:text-white dark:text-gray-300 underline">essex@bird.co.uk</a>
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
                            <a href="mailto:support@bird.co.uk" className="underline hover:text-white text-sm">support@bird.co.uk</a>
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
                                <a href="tel:+441414719099" className="hover:text-white dark:text-gray-300">+44 141 471 9099</a>
                                <a href="mailto:glasgow@bird.co.uk" className="hover:text-white dark:text-gray-300 underline">glasgow@bird.co.uk</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Legal</h3>
                            <div className="flex flex-col space-y-2 text-gray-300 text-sm">
                                <a href="/terms-conditions/" className="hover:text-white">Terms & Conditions</a>
                                <a href="https://www.nominet.uk/uk-domains/policies/" className="hover:text-white">Nominet Terms</a>
                                <a href="/privacy-policy/" className="hover:text-white">Privacy Policy</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 5: Quick Links */}
                    <div className="flex flex-col">
                        <h3 className="uppercase font-bold mb-4 tracking-wider text-gray-400 text-sm">Quick Links</h3>
                        <div className="flex flex-col space-y-2 text-gray-300 text-sm">
                            <a href="/nest/" className="hover:text-white">Nest</a>
                            <a href="/email/" className="hover:text-white">Email Marketing</a>
                            <a href="/seo-portal/" className="hover:text-white">Marketing Portal</a>
                            <a href="/glossary/" className="hover:text-white">Digital Marketing Glossary</a>
                            <a href="/london/" className="hover:text-white">Digital Marketing Agency London</a>
                            <a href="/essex/" className="hover:text-white">Digital Marketing Agency Essex</a>
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
                            <p>© 2026 Bird Marketing. Bird Marketing Limited - Company No. 08051880 - VAT Reg No. GB204642831</p>
                            <p className="mt-1">Registered Address: 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom. - <a href="/sitemap/" className="underline hover:text-gray-300">Sitemap</a></p>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white" aria-label="Twitter">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a href="#" className="hover:text-white" aria-label="Facebook">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                            </a>
                            <a href="#" className="hover:text-white" aria-label="LinkedIn">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
                            </a>
                            <a href="#" className="hover:text-white" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm-1.634 8.532a3.47 3.47 0 116.94 0 3.47 3.47 0 01-6.94 0zm3.804-1.802a2.316 2.316 0 100 4.632 2.316 2.316 0 000-4.632zM19.98 5.99a1.153 1.153 0 11-2.306 0 1.153 1.153 0 012.306 0z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
