export const Contact = () => {
    return (
        <section className="bg-black text-white py-20 md:py-32 relative overflow-hidden"  id="contact">
            <div className="w-full px-6 md:px-16 lg:px-24 mb-24 md:mb-40">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <span className="text-sm font-bold tracking-widest uppercase flex items-center gap-2 text-gray-400">
                            Let's Work Together{" "}
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                            Wanna get in touch?{" "}
                            <span className="text-yellow-400">Let's talk</span>
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 md:pt-4">
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            We offer exceptional services tailored to a wide range of
                            businesses that want to improve the effectiveness of their digital
                            marketing activities with discernible returns on investment. We
                            aim to get back to all enquiries rapidly.
                        </p>
                        <div className="flex flex-col gap-4">
                            <p
                                className="text-4xl md:text-5xl font-bold border-b-2 border-white/30 hover:border-yellow-400 pb-2 inline-block w-max transition-colors"
                            >
                                Start a project
                            </p>
                            <p
                                className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors mt-4"
                            >
                                Request a Quote &rarr;
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Marquee */}
            <div className="absolute bottom-[-2vw] left-0 w-full overflow-hidden leading-none opacity-20 select-none pointer-events-none">
                <div className="flex items-center gap-8 animate-marquee-slow whitespace-nowrap">
                    {/* Repeated Text */}
                    {[...Array(8)].map((_, i) => (
                        <span
                            key={i}
                            className="text-[10vw] font-bold uppercase tracking-tighter"
                            style={{
                                WebkitTextStroke: "2px white",
                                color: "transparent",
                            }}
                        >
                            Start a Project
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
