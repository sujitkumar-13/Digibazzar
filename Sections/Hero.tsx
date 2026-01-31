import { LogoCarousel } from "../components/LogoCarousel";
import ParticleIcon from "../components/ParticleIcon";

export type HeroProps = {
    className?: string;
};

export const Hero = ({ className }: HeroProps) => {
    return (
        <div className={`relative flex flex-wrap z-10 ${className || ""}`}>
            <div className="relative w-full bg-center ">
                <div className="relative bg-cover w-full py-[15%] md:py-16">
                    <div className="absolute h-[2%] w-full z-[3] left-0 bottom-0">
                        <img
                            src="https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-4.svg"
                            alt="Icon"
                            className="absolute h-full w-full left-0 -bottom-px"
                        />
                    </div>
                    <div className="relative flex flex-wrap z-10">
                        <div className="relative w-full bg-center px-[25px] mt-[15px]">
                            <div className="relative pb-5">
                                <div className="relative pt-5 md:pt-0">
                                    <div className="relative flex flex-wrap z-10">
                                        {/* Content Side */}
                                        <div className="relative items-stretch flex flex-wrap w-full bg-center mb-[25px] px-[25px] md:flex-nowrap md:w-6/12 md:mb-0">
                                            <div className="relative flex flex-col grow justify-center w-full md:pl-20 text-white">
                                                <div className="min-h-px">
                                                    {/* Top Rated Badge */}
                                                    <div className="mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
                                                        <h5 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">
                                                            Top Rated and Award Winning
                                                        </h5>
                                                    </div>

                                                    {/* Heading */}
                                                    <div className="mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
                                                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                                                            Digital Marketing Agency in India
                                                        </h1>
                                                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                                            That{" "}
                                                            <span className="relative inline-block">
                                                                Delivers Results
                                                                <img
                                                                    src="https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-5.svg"
                                                                    alt=""
                                                                    className="absolute w-full bottom-1 left-0 h-3 z-[-1]"
                                                                />
                                                            </span>
                                                        </h2>
                                                    </div>

                                                    {/* Description */}
                                                    <div className="mb-6 animate-fade-in-up opacity-0 leading-relaxed text-gray-300" style={{ animationDelay: "0.3s" }}>
                                                        Accelerate your business growth with
                                                        our multi award-winning, Full Service
                                                        Digital Marketing Agency in India,
                                                        offering a broad spectrum of tailored
                                                        digital solutions. With headquarters
                                                        in India and branches in Varanasi, our
                                                        proven expertise ensures you outpace
                                                        the competition and achieve measurable
                                                        success.
                                                    </div>

                                                    {/* Form */}
                                                    <div className="mt-8 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
                                                        <form className="max-w-xl">
                                                            <div className="flex flex-col md:flex-row gap-0">
                                                                <input
                                                                    type="text"
                                                                    name="website_url"
                                                                    placeholder="Enter Website Address"
                                                                    className="flex-grow bg-white/10 border border-amber-300 text-white placeholder-gray-400 px-6 py-4 outline-none focus:bg-white/20 transition-colors w-full md:w-auto md:min-w-[300px]"
                                                                />
                                                                <button
                                                                    type="submit"
                                                                    className="bg-amber-300 text-black font-bold px-8 py-4 uppercase hover:bg-amber-400 transition-colors whitespace-nowrap"
                                                                >
                                                                    GET MY FREE PROPOSAL
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    {/* Review Badges */}
                                                    <div className="flex flex-wrap gap-8 items-center justify-start mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
                                                        {[
                                                            { img: "https://c.animaapp.com/mkz11li0RsXIrT/assets/trustpilot-reviews.png", rating: "4.9", count: "98" },
                                                            { img: "https://c.animaapp.com/mkz11li0RsXIrT/assets/google-reviews.png", rating: "4.9", count: "64" },
                                                            { img: "https://c.animaapp.com/mkz11li0RsXIrT/assets/goodfirms-reviews-1.png", rating: "5", count: "60" },
                                                            { img: "https://c.animaapp.com/mkz11li0RsXIrT/assets/clutch-reviews-1.png", rating: "5", count: "65" }
                                                        ].map((badge, i) => (
                                                            <div key={i} className="flex flex-col items-start w-[140px]">
                                                                <img src={badge.img} alt="" className="h-8 w-auto mb-2 object-contain" />
                                                                <div className="text-sm font-bold text-white">
                                                                    {badge.rating}/5 <span className="font-normal text-gray-400 text-xs">({badge.count} Reviews)</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image/Particle Side */}
                                        <div className="relative items-stretch hidden flex-wrap min-h-0 min-w-0 w-full bg-center px-[25px] md:flex md:flex-nowrap md:min-h-[auto] md:min-w-[auto] md:w-6/12 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
                                            <div className="min-h-px min-w-0 w-full flex items-center justify-center">
                                                <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
                                                    <ParticleIcon />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LogoCarousel />
            </div>
        </div>
    );
};