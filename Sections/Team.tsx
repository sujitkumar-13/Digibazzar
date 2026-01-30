const TEAM_MEMBERS = [
    { name: "Brett", src: "brett_black_bg.jpg" },
    { name: "George", src: "georgec-photo.jpg" },
    { name: "Edward", src: "Edward-Kemp-3.jpg" },
    { name: "Phoebe", src: "Phoebe-Leung-3.jpg" },
    { name: "Ryan", src: "Ryan-Lynch.jpg" },
    { name: "George", src: "georges-photo.jpg" },
    { name: "Sofia", src: "sofia-3.jpg" },
    { name: "Dan", src: "Dans-Photo.jpg" },
    { name: "Jennifer", src: "Jennifer500x500.jpg" },
    { name: "Michael", src: "michael.jpg" },
    { name: "Ed", src: "Ed500x500.jpg" },
    { name: "Francesca", src: "fran-500.jpg" },
    { name: "Jaden", src: "Jaden500x500.jpg" },
    { name: "Callum", src: "callum500x5001.jpg" },
    { name: "Jessica", src: "Jess500x500-cv2500.jpg" },
    { name: "Jordan", src: "Bird_MarketingHR-6622-500-3.jpg" },
    { name: "Luke", src: "Luke500x500.jpg" },
    { name: "Jason", src: "Jason-Scott-Colour-Black-Background-500-2-2.jpg" },
    { name: "Vicki", src: "vicki.jpg" },
    { name: "Lewis", src: "Lewis500x500.jpg" },
    { name: "Steven", src: "Bird_Marketing-Steve-500-2.jpg" },
    { name: "Philip", src: "Phil500x500.jpg" }
];

export const Team = () => {
    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24">
                {/* Header Section */}
                <div className="mb-16 max-w-5xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight">
                        Expert Digital Marketing Team
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight">
                        Trusted Specialists Committed to{" "}
                        <span className="relative inline-block">
                            Your Success
                            <img
                                src="https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-5.svg"
                                alt=""
                                className="absolute w-full bottom-[-5px] left-0 h-[12px] z-[-1]"
                            />
                        </span>
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                        Backed by years of experience, our UK team delivers data-driven
                        strategies designed to drive real business growth. We focus on
                        creating impactful solutions that help brands succeed in an
                        ever-evolving digital landscape. Trusted by companies nationwide, we
                        are committed to excellence, transparency, and measurable results.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div key={index} className="aspect-square w-full overflow-hidden bg-gray-100 relative group">
                            <img
                                alt={`${member.name} - Staff profile picture`}
                                src={`https://c.animaapp.com/mkz11li0RsXIrT/assets/${member.src}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
