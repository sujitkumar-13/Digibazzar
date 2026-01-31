import { LogoCarousel } from "../components/LogoCarousel";
import ParticleIcon from "../components/ParticleIcon";
import { Service } from "./Service";
import { About } from "./About";
// import { Industries } from "./Industries";
import { CTA } from "./CTA";
import { CaseStudies } from "./CaseStudies";
import { Blog } from "./Blog";
import { Team } from "./Team";
// import { Location } from "./Location";
import { Press } from "./Press";
import { Content } from "./Content";
import { AdditionalContent } from "./AdditionalContent";
import { Contact } from "./Contact";

export type HeroFormProps = {
    variant: string;
    topRatedText?: string;
    mainHeading?: string;
    subHeading?: string;
    emphasizedText?: string;
    iconUrl?: string;
    placeholderText?: string;
    buttonText?: string;
    formAction?: string;
    formId?: string;
    formUid?: string;
    formUrl?: string;
    postId?: string;
    postTitle?: string;
    csrfToken?: string;
};

export const HeroForm = (props: HeroFormProps) => {
    if (props.variant === "top-rated") {
        return (
            <div className="mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
                <h5 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">
                    {props.topRatedText || "Top Rated and Award Winning"}
                </h5>
            </div>
        );
    }

    if (props.variant === "heading") {
        return (
            <div className="mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {props.mainHeading || "Digital Marketing Agency in UK"}
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {props.subHeading || "That "}
                    <span className="relative inline-block">
                        {props.emphasizedText || "Delivers Results"}
                        <img
                            src="https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-5.svg"
                            alt=""
                            className="absolute w-full bottom-1 left-0 h-3 z-[-1]"
                        />
                    </span>
                </h2>
            </div>
        );
    }

    if (props.variant === "spacer-small") {
        return (
            <div className="h-4"></div>
        );
    }

    if (props.variant === "spacer-large") {
        return <div className="h-10"></div>;
    }

    if (props.variant === "form") {
        return (
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
                <form action={props.formAction} className="max-w-xl">
                    <div className="flex flex-col md:flex-row gap-0">
                        <input
                            type="text"
                            name="website_url"
                            placeholder={props.placeholderText || "Enter Website Address"}
                            className="flex-grow bg-white/10 border border-amber-300 text-white placeholder-gray-400 px-6 py-4 outline-none focus:bg-white/20 transition-colors w-full md:w-auto md:min-w-[300px]"
                        />
                        <button
                            type="submit"
                            className="bg-amber-300 text-black font-bold px-8 py-4 uppercase hover:bg-amber-400 transition-colors whitespace-nowrap"
                        >
                            {props.buttonText || "GET MY FREE PROPOSAL"}
                        </button>
                    </div>

                    {/* Hidden Inputs preserved for functionality if needed */}
                    <input type="hidden" name="form_id" value={props.formId || "11"} />
                </form>
            </div>
        );
    }

    return null;
};
export type ReviewBadgesProps = {
    href?: string;
    imageUrl?: string;
    rating: string;
    reviewCount?: string;
};

export const ReviewBadges = (props: ReviewBadgesProps) => {
    if (!props.href) {
        return (
            <strong className="font-bold  ">
                {props.rating}
            </strong>
        );
    }

    return (
        <a href={props.href} className=" ">
            {props.imageUrl && (
                <img
                    src={props.imageUrl}
                    alt=""
                    className="aspect-[auto_74_/_32]   max-w-full mb-[15px]"
                />
            )}
            <strong className="font-bold  ">
                {props.rating}
            </strong>
            {props.reviewCount && `/5 (${props.reviewCount} Reviews)`}
        </a>
    );
};
export const HeroImage = () => {
    return (
        <div className="relative flex flex-col grow justify-center min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="min-h-px min-w-0 md:min-w-[auto] h-full flex items-center justify-center">
                <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
                    <ParticleIcon />
                </div>
            </div>
        </div>
    );
};
export const Hero = () => {
    return (
        <div className="relative bg-black grow z-[11] md:z-10" id="home">
            <div
                role="main"
                className="relative  w-auto mx-auto px-0 md:max-w-[2000px] md:w-full"
            >
                <div className="relative   flex flex-wrap  z-10">
                    <div className="relative   w-full bg-center ">
                        <div className="relative bg-cover  w-full py-[15%] md:py-16">
                            <div className="absolute h-[2%] w-full z-[3] left-0 bottom-0">
                                <img
                                    src="https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-4.svg"
                                    alt="Icon"
                                    className="absolute   h-full w-full left-0 -bottom-px"
                                />
                            </div>
                            <div className="relative flex flex-wrap  z-10">
                                <div className="relative w-full bg-center px-[25px] mt-[15px]">
                                    <div className="relative pb-5">
                                        <div className="relative pt-5 md:pt-0">
                                            <div className="relative   flex flex-wrap  z-10 ">
                                                <div className="relative items-stretch flex flex-wrap w-full bg-center mb-[25px] px-[25px] md:flex-nowrap md:w-6/12 md:mb-0">
                                                    <div className="relative flex flex-col grow justify-center w-full md:pl-20">
                                                        <div className="  min-h-px">
                                                            <HeroForm variant="top-rated" />
                                                            <HeroForm
                                                                variant="heading"
                                                                mainHeading="Digital Marketing Agency in India"
                                                                subHeading="That "
                                                                emphasizedText="Delivers Results"
                                                                iconUrl="https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-5.svg"
                                                            />
                                                            <HeroForm variant="spacer-small" />
                                                            <div className="  mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
                                                                Accelerate your business growth with
                                                                our multi award-winning, Full Service
                                                                Digital Marketing Agency in UK,
                                                                offering a broad spectrum of tailored
                                                                digital solutions. With headquarters
                                                                in the UK and branches worldwide, our
                                                                proven expertise ensures you outpace
                                                                the competition and achieve measurable
                                                                success.
                                                            </div>
                                                            <div className="  mt-[5px] mb-6">
                                                                <HeroForm
                                                                    variant="form"
                                                                    formId="11"
                                                                    formUid="93bc79"
                                                                    formUrl="/?utm_source=birdmarketing.co.uk&utm_medium=redirect&utm_campaign=domain_redirect"
                                                                    postId="11503"
                                                                    postTitle="Digital Marketing Agency UK"
                                                                    csrfToken="ISSVjG0GSgAtzgs5uFklxkuAFxoJ3wHarYYD7opj"
                                                                    placeholderText="Enter Website Address"
                                                                    buttonText="GET MY FREE PROPOSAL"
                                                                />
                                                            </div>
                                                            <div className=" ">
                                                                <HeroForm variant="spacer-large" />
                                                            </div>
                                                            <div className="flex flex-wrap gap-8 items-center justify-start mt-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
                                                                {[
                                                                    { img: "https://c.animaapp.com/mkz11li0RsXIrT/assets/trustpilot-reviews.png", rating: "4.9", count: "98" },
                                                                    { img: "https://c.animaapp.com/mkz11li0RsXIrT/assets/google-reviews.png", rating: "4.9", count: "64" },
                                                                    { img: "https://c.animaapp.com/mkz11li0RsXIrT/assets/goodfirms-reviews-1.png", rating: "5", count: "60", isGoodFirms: true },
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
                                                <div className="relative items-stretch   hidden flex-wrap min-h-0 min-w-0 w-full bg-center px-[25px] md:flex md:flex-nowrap md:min-h-[auto] md:min-w-[auto] md:w-6/12">
                                                    <HeroImage />
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
                <Service />
                <About />
                {/* <Industries /> */}
                <CTA />
                <CaseStudies variant="" />
                <Blog />
                <Team />
                {/* <Location /> */}
                <Press />
                <Content />
                <AdditionalContent />
                <Contact />
            </div>
        </div>
    );
};
