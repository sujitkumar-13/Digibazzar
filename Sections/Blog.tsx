const BLOG_POSTS = [
    {
        date: "July 8, 2025",
        title: "The Best SEO Agencies in The UK",
        href: "/blog/bird-curated-list/best-seo-agencies-uk/",
        ariaLabel: "The Best SEO Agencies in The UK",
    },
    {
        date: "May 21, 2024",
        title: "The Best Graphic Design Software",
        href: "/blog/bird-curated-list/best-graphic-design-software/",
        ariaLabel: "The Best Graphic Design Software",
    },
    {
        date: "May 15, 2024",
        title: "The Best Keyword Research Tools",
        href: "/blog/bird-curated-list/best-keyword-research-tools/",
        ariaLabel: "The Best Keyword Research Tools",
    },
    {
        date: "May 9, 2024",
        title: "The Best Link Building Tools",
        href: "/blog/bird-curated-list/best-link-building-tools/",
        ariaLabel: "The Best Link Building Tools",
    },
];

export const Blog = () => {
    return (
        <section className="bg-black text-white py-20 md:py-32 relative overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24 mb-32">
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col items-start sticky top-24">
                        <span className="text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2 text-gray-400">
                            News & Information
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Stay <br /> up-to-date
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
                            Stay up-to-date with industry news and information with our
                            articles covering all subjects in the Web and Digital Marketing
                            landscape.
                        </p>
                        <a
                            href="/blog/"
                            className="text-lg font-bold border-b border-white/30 hover:border-yellow-400 pb-1 hover:text-yellow-400 transition-colors"
                        >
                            Read all articles
                        </a>
                    </div>

                    {/* Right Column: List */}
                    <div className="flex flex-col w-full">
                        {BLOG_POSTS.map((post, index) => (
                            <div
                                key={index}
                                className="group flex flex-col md:flex-row md:items-center py-10 border-b border-gray-800 hover:border-yellow-400/50 transition-all duration-300 gap-6 md:gap-10"
                            >
                                <div className="flex items-center gap-6 md:w-auto">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-500 text-sm font-mono group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors">
                                        {index + 1}
                                    </span>
                                    <span className="text-sm text-gray-500 tracking-wider">
                                        {post.date}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-yellow-400 transition-colors leading-snug">
                                        <a href={post.href}>{post.title}</a>
                                    </h3>
                                </div>

                                <div className="md:text-right hidden md:block">
                                    <a
                                        href={post.href}
                                        className="text-xs font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <div className="absolute bottom-[-2vw] left-0 w-full overflow-hidden leading-none opacity-10 select-none pointer-events-none">
                <div className="flex items-center gap-8 animate-marquee-slow whitespace-nowrap">
                    {[...Array(6)].map((_, i) => (
                        <span
                            key={i}
                            className="text-[10vw] font-bold uppercase tracking-tighter"
                            style={{
                                WebkitTextStroke: "1px white",
                                color: "transparent",
                            }}
                        >
                            Industry News
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
      `}</style>
        </section>
    );
};
