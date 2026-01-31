const INDUSTRIES = [
    ["Accountant", "/accountant/", 12], ["Adult", "/adult/", 13], ["Architect", "/architect/", 14], ["Automotive", "/automotive/", 15], ["Aviation", "/aviation/", 16],
    ["B2B", null, 17], ["Bank", "/finance/banks/", 18], ["Cannabis & CBD", "/cannabis-cbd/", 19], ["Casino", "/casino/", 20], ["Chiropractor", "/chiropractor/", 21],
    ["Cleaning Services", "/cleaning/", 22], ["Construction", "/construction/", 23], ["Crypto", "/crypto/", 24], ["Cybersecurity", "/cyber-security/", 25], ["Dentist", "/dentist/", 26],
    ["Ecommerce", "/ecommerce/", 27], ["Education", "/education/", 28], ["Electrician", "/electrician/", 29], ["Energy", "/energy/", 30], ["Enterprise", "/enterprise/", 31],
    ["Entertainment", "/entertainment/", 32], ["Events", "/events/", 33], ["Fashion", "/fashion/", 34], ["Finance", "/finance/", 35], ["Financial Advisor", "/finance/adviser/", 36],
    ["Fitness & Nutrition", "/fitness-nutrition/", 37], ["Food", "/food-beverage/", 38], ["Government", "/public-sector/", 39], ["Healthcare", "/healthcare/", 40], ["Hotel", "/hotel/", 41],
    ["HVAC", "/hvac/", 42], ["Insurance", "/insurance/", 43], ["Interior Design", "/interior-design/", 44], ["Landscaping", "/landscaping/", 45], ["Law", "/law/", 46],
    ["Logistics", "/logistics/", 47], ["Luxury", "/luxury/", 48], ["Manufacturing", "/manufacturing/", 49], ["Mortgage Broker", "/finance/mortgage-broker/", 50], ["Moving Company", "/moving-company/", 51],
    ["Pharma", "/pharmaceutical/", 52], ["Plastic Surgery", "/plastic-surgery/", 53], ["Plumbing", "/plumbing/", 54], ["Real Estate", "/real-estate/", 55], ["Recruitment", "/recruitment/", 56],
    ["Retail", "/retail/", 57], ["Roofing", "/roofing/", 58], ["SaaS", "/saas/", 59], ["Small Business", "/small-business/", 60], ["Sports", "/sports/", 61],
    ["Technology", "/technology/", 62], ["Telecom", "/telecoms/", 63], ["Therapist", "/therapist/", 64], ["Tourism", "/travel/", 65], ["Wealth Management", "/finance/wealth-management/", 66], ["Yachting", "/yachting/", 67]
];

export const Industries = () => {
    return (
        <div className={`relative  py-[18.75px] md:py-16 px-[25px]`}>
            <div className="relative  flex flex-wrap  z-10">
                <div className="relative  w-full bg-center px-[25px]">
                    <div className={`relative  mb-[50px] pb-[1%]`}>
                        <div className="relative  flex flex-wrap  z-10">
                            <div className="">
                                <h2 className="text-[26.4px] font-bold tracking-[-0.264px] leading-[33px] mb-[7px] md:text-[40.8px] md:tracking-[-0.408px] md:leading-[51px]">
                                    Industries We Work With
                                </h2>
                                <p className=" ">
                                    At Digibazzar, we extend our Digital
                                    Marketing Agency in Varanasi expertise
                                    across a diverse range of
                                    industries, tailoring strategies
                                    to meet the unique demands and
                                    opportunities each sector
                                    presents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" gap-x-[30px] grid grid-cols-[repeat(1,1fr)] gap-y-[30px] md:grid-cols-[repeat(5,1fr)]">
                        {INDUSTRIES.map(([label, href, iconNum], index) => {
                            const content = (
                                <div className="flex items-center">
                                    <img
                                        src={`https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-${iconNum}.svg`}
                                        alt="Icon"
                                        className="h-10 w-10 mr-[15px]"
                                    />
                                    <h3 className={`font-bold tracking-[0.14px] leading-6 md:leading-[34px] ${href ? "text-white" : "text-sm"}`}>
                                        {label} Digital Marketing
                                    </h3>
                                </div>
                            );

                            if (href) {
                                return (
                                    <a
                                        key={index}
                                        href={href as string}
                                        className="text-amber-300 text-sm items-center  flex"
                                    >
                                        {content}
                                    </a>
                                );
                            }

                            return (
                                <div key={index} className="flex">
                                    {content}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div >
    );
};
