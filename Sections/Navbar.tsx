export const Navbar = () => {
    const MENU_LINKS = [
        { label: "About", href: "/about/" },
        { label: "Services", subMenu: true },
        { label: "Industries", subMenu: true },
        { label: "Case Studies", href: "/case-studies/" },
        { label: "Careers", href: "/careers/" },
        { label: "Blog", href: "/blog/" },
        { label: "Contact", href: "/contact/" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-[9999] h-20 flex items-center">
            <div className="w-full px-6 md:px-10 h-full flex items-center justify-between">
                {/* NavbarLogo */}
                <div className="flex items-center h-full">
                    <a href="/" className="flex items-center py-4">
                        <img
                            alt="Bird Marketing"
                            src="https://c.animaapp.com/mkz11li0RsXIrT/assets/bird-white-02-1.svg"
                            className="h-8 md:h-10 w-auto"
                        />
                    </a>
                </div>

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
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        {/* Submenu content would go here */}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* DesktopButtons */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="relative">
                        <a
                            href="/quote/"
                            className="bg-amber-400 text-black px-6 py-2 rounded-md text-sm font-bold uppercase hover:bg-amber-500 transition-colors whitespace-nowrap"
                        >
                            Get A Quote
                        </a>
                    </div>
                    <div className="flex items-center space-x-2 text-white text-sm font-semibold uppercase cursor-pointer hover:text-amber-300 transition-colors whitespace-nowrap">
                        <img
                            src="https://c.animaapp.com/mkz11li0RsXIrT/assets/en.svg"
                            alt="EN"
                            className="w-5 h-5"
                        />
                        <span>EN (UK)</span>
                    </div>
                </div>

                {/* MobileMenu */}
                <div className="flex items-center md:hidden h-full">
                    <a
                        href="/quote/"
                        className="bg-amber-400 text-black px-4 py-2 rounded-md text-xs font-bold uppercase mr-4"
                    >
                        Get A Quote
                    </a>
                    <button type="button" aria-label="Toggle Menu" className="text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};
