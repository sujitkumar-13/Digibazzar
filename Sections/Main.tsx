import { Hero } from "./Hero";
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

export type MainProps = {
    className?: string;
};

export const Main = ({ className }: MainProps) => {
    return (
        <div className={`relative bg-black grow z-[11] md:z-10 ${className || ""}`} id="home">
            <div
                role="main"
                className="relative  w-auto mx-auto px-0 md:max-w-[2000px] md:w-full"
            >
                <Hero />
                <Service />
                <About />
                {/* <Industries /> */}
                <CTA />
                <CaseStudies />
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
