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
    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative  max-w-[88%] w-auto mx-auto px-0 md:max-w-[2000px] md:w-full md:px-[70px]">

                <div className="relative  h-[100px]">
                    <div className="absolute  flex h-full translate-x-[-508.002px] w-full left-0 md:translate-x-[-172.938px]">
                        {LOGOS.map((logo, index) => (
                            <div
                                key={index}
                                className={`absolute h-2.5 ${index > 0 ? `translate-x-[${index * 100}.0%]` : ""} w-[33.3333%] p-[50px] left-0 md:h-[89.234px] md:w-[16.6%]`}
                            >
                                <div className="h-full">
                                    <div className="flex flex-col h-full justify-center">
                                        <div className="leading-[0px]">
                                            <div className={`h-full ${logo.maxWidth}`}>

                                                <img
                                                    src={logo.src}
                                                    alt={logo.alt || ""}
                                                    className={`relative ${logo.aspect} ${logo.isPlaceholder ? "h-auto min-h-px min-w-px opacity-100 w-full md:h-[74.3785px] md:opacity-0 md:w-[89.2344px]" : "min-h-px min-w-px w-full"}`}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
