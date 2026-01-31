const services = [
    {
        title: "SEO",
        icon: "https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-6.svg",
        features: [
            {
                title: "Enhanced Visibility",
                description: "Utilise SEO to reach global audiences, elevating brand and growth prospects.",
            },
            {
                title: "Precision Targeting",
                description: "Craft SEO-centric campaigns to engage ideal customers and maximise ROI.",
            },
            {
                title: "Data-Driven Optimisation",
                description: "Employ SEO analytics for strategy enhancement and better performance.",
            },
        ],
    },
    {
        title: "Web Design",
        icon: "https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-7.svg",
        features: [
            {
                title: "Customised Websites",
                description: "Create online realms aligning with brand essence and business objectives.",
            },
            {
                title: "Functional Features",
                description: "Boost user experience focusing on usability and smooth navigation.",
            },
            {
                title: "Reliable Performance",
                description: "Ensure uptime, security, and speed for optimal website functions.",
            },
        ],
    },
    {
        title: "Creative",
        icon: "https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-8.svg",
        features: [
            {
                title: "Strong Brand Presence",
                description: "Build a cohesive, memorable identity resonating with target audience.",
            },
            {
                title: "Engaging Visuals",
                description: "Capture audience interest with top-notch photography, video, and promos.",
            },
            {
                title: "Seamless User Interactions",
                description: "Design user interfaces enhancing customer satisfaction and conversions.",
            },
        ],
    },
    {
        title: "Web Development",
        icon: "https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-9.svg",
        features: [
            {
                title: "Global Accessibility",
                description: "Build lightweight websites to reach diverse audiences, boosting your brand.",
            },
            {
                title: "Bespoke Development",
                description: "Tailor projects to meet client needs, engaging target audiences, maximising ROI.",
            },
            {
                title: "Analytical Advancements",
                description: "Use data-driven methods for continuous website refinement.",
            },
        ],
    },
    {
        title: "PPC",
        icon: "https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-10.svg",
        features: [
            {
                title: "Global Engagement",
                description: "Launch PPC campaigns for instant global reach, enhancing brand visibility.",
            },
            {
                title: "Precision Targeting",
                description: "Design tailored PPC strategies to capture ideal customers, maximising ROI.",
            },
            {
                title: "Performance Metrics",
                description: "Harness data insights for ongoing PPC optimisation, improving campaigns.",
            },
        ],
    },
    {
        title: "Social Media",
        icon: "https://c.animaapp.com/mkz11li0RsXIrT/assets/icon-11.svg",
        features: [
            {
                title: "Audience Expansion",
                description: "Engage and grow your audience through social media’s interactive nature.",
            },
            {
                title: "Content Innovation",
                description: "Drive brand loyalty with creative social media campaigns and strategies.",
            },
            {
                title: "Interactive Promotions",
                description: "Execute real-time promotions on social media to boost brand affinity.",
            },
        ],
    },
];

export const Service = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute h-full w-full left-0 top-0">
                <div className="absolute h-full w-full z-[1] overflow-hidden left-0 top-0">
                    <div className="absolute bg-cover h-full w-full left-0 top-0"></div>
                </div>
            </div>
            <div className="relative flex flex-wrap z-10">
                <div className="relative w-full bg-center px-[50px]">
                    <h2 className="text-[26.4px] font-bold tracking-[-0.264px] leading-[33px] mb-[7px] md:text-[40.8px] md:tracking-[-0.408px] md:leading-[51px]">
                        Our Digital Marketing Services
                    </h2>
                    <p className="pb-6">
                        In the highly competitive online market, building a digital strategy is crucial to cultivating successful, revenue-driving brand engagements. Digibazzar, a leading award-winning digital marketing agency in the Varanasi, can harness the power of data-driven campaigns and multi-channel outreach to elevate your brand’s presence across the web. Our team of savvy marketing professionals, adept in cutting-edge organic search, social media, and paid advertising, works diligently to refine your brand message, expand reach, and drive measurable growth. By leveraging targeted digital strategies, refining customer journeys, and executing creative campaigns, we empower your brand to rise above the digital noise.
                    </p>

                    <div className="mt-[50px] mb-[60px]  ">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {services.map((service, index) => {
                                const isLastInRow = (index + 1) % 3 === 0;
                                const isLastRow = index >= services.length - 3;

                                return (
                                    <div
                                        key={index}
                                        className={`text-amber-300 block p-[60px] border-white/40 
                                            ${!isLastInRow ? 'md:border-r' : ''} 
                                            ${!isLastRow ? 'border-b' : 'max-md:border-b'}
                                        `}
                                    >
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="h-[65px] w-[65px] mb-10"
                                        />
                                        <h3 className="text-white text-[19.2px] font-bold tracking-[0.192px] leading-6 mb-[30px] md:text-[27.2px] md:tracking-[0.272px] md:leading-[34px]">
                                            {service.title}
                                        </h3>
                                        {service.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="text-white text-lg gap-x-2.5 flex leading-[25.2px] mb-[15px]">
                                                <i className="text-amber-300 font-normal block h-[34px] min-w-[30px] text-center align-middle w-[34px] font-icomoon"></i>
                                                <div>
                                                    <span className="font-semibold">{feature.title}:</span> {feature.description}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
