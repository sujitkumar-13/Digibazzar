const LOGOS = [
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/badge.svg",
        maxWidth: "max-w-[95px]",
        aspect: "aspect-[auto_100_/_100]",
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/clutch-bird3x.png",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/goodfirms-bird3x.png",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/designrush-bird3x.png",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/topinteractive-bird3x.png",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/googlepartner-bird3x.png",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/manifest-bird3x.png",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/trustpilot-bird3x.png",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
        alt: "trust pilot logo",
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/image-4.svg",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
        isPlaceholder: true,
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/image-4.svg",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
        isPlaceholder: true,
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/image-4.svg",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
        isPlaceholder: true,
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/image-4.svg",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
        isPlaceholder: true,
    },
    {
        src: "https://c.animaapp.com/mkz11li0RsXIrT/assets/digital-bird3x.png",
        maxWidth: "max-w-[170px]",
        aspect: "aspect-[auto_901_/_751]",
    },
];

export const LogoCarousel = () => {
    // Double the logos for seamless loop
    const doubledLogos = [...LOGOS, ...LOGOS];

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="flex w-fit animate-marquee whitespace-nowrap">
                {doubledLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
                    >
                        <div className={`${logo.maxWidth} w-full`}>
                            <img
                                src={logo.src}
                                alt={logo.alt || ""}
                                className={`${logo.aspect} w-full object-contain ${logo.isPlaceholder ? "opacity-50 grayscale" : ""}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
