export type CaseStudiesSectionProps = {
    variant: string;
    sectionTitle?: string;
    sectionSubtitle?: string;
    sectionDescription?: string;
    viewAllText?: string;
    viewAllHref?: string;
    filterText?: string;
    filterLinks?: Array<{
        text: string;
        href: string;
    }>;
    caseStudies?: Array<{
        title: string;
        href: string;
        imageUrl: string;
        imageAlt: string;
        ariaLabel: string;
    }>;
};

export const CaseStudies = (props: CaseStudiesSectionProps) => {
    if (props.variant === "empty") {
        return (
            <div className=" caret-transparent absolute bg-white content-['_'] h-full opacity-50 w-full z-[3] left-0 top-0"></div>
        );
    }

    return (
        <div className="relative bg-cover  w-full py-[50px] md:py-[125px] ">
            <div className="absolute   h-full w-full left-0 top-0">
                <div className="absolute   h-full w-full z-[1] overflow-hidden left-0 top-0">
                    <div className="absolute bg-white bg-[url('https://c.animaapp.com/mkz11li0RsXIrT/assets/Bird-Marketing-birds-bg-test3-19.svg')] bg-no-repeat bg-cover   h-full w-full bg-center left-0 top-0"></div>
                </div>
                <div className="absolute bg-white   content-['_'] h-full opacity-50 w-full z-[3] left-0 top-0"></div>
            </div>
            <div className="relative   flex flex-wrap z-10 pl-[50px] md:pl-[102.4px]">
                <div className="relative text-black items-stretch bg-cover   flex flex-wrap w-full bg-center mb-[75px] md:flex-nowrap md:w-6/12 md:mb-0">
                    <div className="  w-full">
                        <div className="relative   pr-[50px] top-auto md:sticky md:pr-[102.4px] md:top-[280.25px]">
                            <div className=" ">
                                <div className="  mb-6">
                                    <h6 className="text-xs tracking-[0.36px] leading-7 mb-[7px] md:text-base md:tracking-[0.48px] md:leading-[17.6px]">
                                        <em className="relative text-xs bg-[linear-gradient(to_right,rgb(0,0,0)_0px,rgb(0,0,0)_100%)] bg-no-repeat bg-size-[100%_1px] tracking-[0.36px] leading-7 uppercase bg-[position:left_90%] pb-0.5 md:text-base md:tracking-[0.48px] md:leading-[17.6px]">
                                            OUR WORKS
                                        </em>
                                        <span className="text-amber-300 text-[45px] tracking-[0.36px] leading-7 md:tracking-[0.48px] md:leading-[17.6px]">
                                            .
                                        </span>
                                    </h6>
                                </div>
                                <div className="  mb-6">
                                    <h2 className="text-[26.4px] font-bold tracking-[-0.264px] leading-[33px] mb-[7px] md:text-[61px] md:tracking-[-0.61px] md:leading-[67.1px]">
                                        Case Studies, a selection of{" "}
                                        <em className="relative text-[26.4px] bg-[linear-gradient(to_right,rgb(255,215,75)_0px,rgb(255,215,75)_100%)] bg-no-repeat bg-size-[100%_80%] tracking-[-0.264px] leading-[33px] bg-[position:left_70%] px-[3px] md:text-[61px] md:tracking-[-0.61px] md:leading-[67.1px]">
                                            successful projects.
                                        </em>
                                    </h2>
                                </div>
                                <div className="  inline-block mb-6">
                                    <div className=" ">
                                        <p className="text-lg   leading-[30.6px] md:text-[12.8px] md:leading-[21.76px]">
                                            We always put our clients first to deliver our best
                                            time after time. Below is some of our proudest work.
                                        </p>
                                    </div>
                                </div>
                                <div className="  text-left">
                                    <h6 className="text-2xl tracking-[0.72px] leading-7">
                                        <span className="relative rounded-bl rounded-br rounded-tl rounded-tr">
                                            <a
                                                role="button"
                                                href="/case-studies/"
                                                className="relative inline-block"
                                            >
                                                View all Case Studies
                                            </a>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative items-stretch bg-cover   flex flex-wrap w-full bg-center md:flex-nowrap md:w-6/12">
                    <div className="relative   flex flex-col grow w-full">
                        <div className="  min-h-full">
                            <div className=" ">
                                <div className="  hidden max-w-full text-center mb-[15px] mx-auto md:max-w-none md:mx-0">
                                    <h4 className="relative font-bold inline-block tracking-[0.08px] leading-[18px] uppercase border mb-0 pl-[60px] pr-10 py-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/20 md:hidden md:leading-5 md:mb-2 md:pl-[30px] md:pr-0 md:py-0 md:border-0 md:border-none md:border-white">
                                        Filter
                                    </h4>
                                    <div className="  gap-x-3.5 hidden flex-wrap gap-y-3.5 mt-5 md:flex md:mt-0">
                                        <a
                                            href="#"
                                            className="relative text-sm font-medium   inline-block leading-6 uppercase mx-5 my-2.5 py-1 md:block"
                                        >
                                            All
                                        </a>
                                        <a
                                            href="#"
                                            className="relative text-sm font-medium   inline-block leading-6 uppercase mx-5 my-2.5 py-1 md:block"
                                        >
                                            Homepage Case Study
                                        </a>
                                    </div>
                                </div>
                                <div className="  flex flex-wrap">
                                    <div className="relative   w-full mb-5 md:mb-[35px]">
                                        <div className="relative   w-full overflow-hidden left-0 top-0">
                                            <div className="relative   overflow-hidden rounded-l-[10px]">
                                                <div className=" ">
                                                    <a
                                                        aria-label="Supermicro"
                                                        href="/case-studies/supermicro/"
                                                        className="absolute text-amber-300 bg-cover   block h-full w-full z-[100] bg-center left-0 top-0"
                                                    ></a>
                                                    <div className="relative bg-cover   leading-[0px] w-full z-0 bg-center left-0 top-0">
                                                        <img
                                                            src="https://c.animaapp.com/mkz11li0RsXIrT/assets/Super-Micro-00.png"
                                                            alt=""
                                                            sizes="(max-width: 900px) 100vw, 900px"
                                                            className="relative aspect-[auto_900_/_604] bg-cover   max-w-full object-cover w-full z-0 bg-center left-0 top-0"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative   w-full z-[200] pt-[25px]">
                                                <a
                                                    href="/case-studies/supermicro/"
                                                    aria-label="Supermicro"
                                                    className="absolute text-black bg-cover   block h-full w-full z-10 bg-center left-0 top-0"
                                                ></a>
                                                <span className="relative text-black   block pointer-events-none z-[11]"></span>
                                                <div className="relative text-black   inline-block pointer-events-none w-full z-[11]">
                                                    <h3 className="text-[19.2px] font-bold bg-[linear-gradient(to_right,rgb(0,0,0)_0px,rgb(0,0,0)_100%)] bg-no-repeat bg-size-[0px_2px] tracking-[0.192px] leading-[24.96px] max-w-full bg-right-bottom">
                                                        <a
                                                            href="/case-studies/supermicro/"
                                                        >
                                                            Supermicro
                                                        </a>
                                                    </h3>
                                                    <div className="  w-full">
                                                        <span className="text-sm   block leading-[22.4px] max-w-full mt-2.5 md:text-base md:leading-[25.6px] md:max-w-[90%]"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative   w-full my-5 md:my-[35px]">
                                        <div className="relative   w-full overflow-hidden left-0 top-0">
                                            <div className="relative   overflow-hidden rounded-l-[10px]">
                                                <div className=" ">
                                                    <a
                                                        aria-label="Aramex"
                                                        href="/case-studies/aramex/"
                                                        className="absolute text-amber-300 bg-cover   block h-full w-full z-[100] bg-center left-0 top-0"
                                                    ></a>
                                                    <div className="relative bg-cover   leading-[0px] w-full z-0 bg-center left-0 top-0">
                                                        <img
                                                            src="https://c.animaapp.com/mkz11li0RsXIrT/assets/Aramex-00-1024x683.png"
                                                            alt=""
                                                            sizes="(max-width: 1024px) 100vw, 1024px"
                                                            className="relative aspect-[auto_1920_/_1280] bg-cover   max-w-full object-cover w-full z-0 bg-center left-0 top-0"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative   w-full z-[200] pt-[25px]">
                                                <a
                                                    href="/case-studies/aramex/"
                                                    aria-label="Aramex"
                                                    className="absolute text-black bg-cover   block h-full w-full z-10 bg-center left-0 top-0"
                                                ></a>
                                                <span className="relative text-black   block pointer-events-none z-[11]"></span>
                                                <div className="relative text-black   inline-block pointer-events-none w-full z-[11]">
                                                    <h3 className="text-[19.2px] font-bold bg-[linear-gradient(to_right,rgb(0,0,0)_0px,rgb(0,0,0)_100%)] bg-no-repeat bg-size-[0px_2px] tracking-[0.192px] leading-[24.96px] max-w-full bg-right-bottom">
                                                        <a
                                                            href="/case-studies/aramex/"
                                                        >
                                                            Aramex
                                                        </a>
                                                    </h3>
                                                    <div className="  w-full">
                                                        <span className="text-sm   block leading-[22.4px] max-w-full mt-2.5 md:text-base md:leading-[25.6px] md:max-w-[90%]"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative   w-full mt-5 md:mt-[35px]">
                                        <div className="relative   w-full overflow-hidden left-0 top-0">
                                            <div className="relative   overflow-hidden rounded-l-[10px]">
                                                <div className=" ">
                                                    <a
                                                        aria-label="Fahad Alrajhi Group"
                                                        href="/case-studies/fahad-alrajhi-group/"
                                                        className="absolute text-amber-300 bg-cover   block h-full w-full z-[100] bg-center left-0 top-0"
                                                    ></a>
                                                    <div className="relative bg-cover   leading-[0px] w-full z-0 bg-center left-0 top-0">
                                                        <img
                                                            src="https://c.animaapp.com/mkz11li0RsXIrT/assets/fahad-alrajhi-group-00-1024x683.jpg"
                                                            alt=""
                                                            sizes="(max-width: 1024px) 100vw, 1024px"
                                                            className="relative aspect-[auto_1919_/_1280] bg-cover   max-w-full object-cover w-full z-0 bg-center left-0 top-0"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative   w-full z-[200] pt-[25px]">
                                                <a
                                                    href="/case-studies/fahad-alrajhi-group/"
                                                    aria-label="Fahad Alrajhi Group"
                                                    className="absolute text-black bg-cover   block h-full w-full z-10 bg-center left-0 top-0"
                                                ></a>
                                                <span className="relative text-black   block pointer-events-none z-[11]"></span>
                                                <div className="relative text-black   inline-block pointer-events-none w-full z-[11]">
                                                    <h3 className="text-[19.2px] font-bold bg-[linear-gradient(to_right,rgb(0,0,0)_0px,rgb(0,0,0)_100%)] bg-no-repeat bg-size-[0px_2px] tracking-[0.192px] leading-[24.96px] max-w-full bg-right-bottom">
                                                        <a
                                                            href="/case-studies/fahad-alrajhi-group/"
                                                        >
                                                            Fahad Alrajhi Group
                                                        </a>
                                                    </h3>
                                                    <div className="  w-full">
                                                        <span className="text-sm   block leading-[22.4px] max-w-full mt-2.5 md:text-base md:leading-[25.6px] md:max-w-[90%]"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
