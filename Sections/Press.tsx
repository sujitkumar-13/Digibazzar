const PRESS_LOGOS = [
    "business-insider@3x.png",
    "businessing-mag@3x.png",
    "yahoo-finance@3x.png",
    "flux@3x.png",
    "magpress@3x.png",
    "mycustomer@3x.png",
    "quora@3x.png",
    "new-theory@3x.png",
    "talk-business@3x.png",
    "the-london-economic@3x.png"
];

export const Press = () => {
    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden border-t border-gray-100">
            <div className="w-full px-6 md:px-16 lg:px-24 mb-16">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight leading-tight">
                        Press Coverage, Exposure for Our Notable Achievements.
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Sometimes our achievements are press worthy. Here's some examples of
                        websites we have been mentioned on.
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Marquee Track */}
                <div className="flex items-center gap-12 md:gap-24 animate-marquee w-max py-4">
                    {/* Loop for seamless marquee */}
                    {[...PRESS_LOGOS, ...PRESS_LOGOS, ...PRESS_LOGOS, ...PRESS_LOGOS].map((src, i) => (
                        <div key={i} className="flex-shrink-0">
                            <img
                                src={`https://c.animaapp.com/mkz11li0RsXIrT/assets/${src}`}
                                alt="Press Logo"
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
        </section>
    );
};
