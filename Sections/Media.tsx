// export type MediaSectionProps = {
//     variant: string;
//     sectionTitle?: string;
//     sectionDescription?: string;
//     heading?: string;
//     description?: string;
//     footerText?: string;
//     mediaLogos?: Array<{
//         src: string;
//         alt: string;
//     }>;
//     industries?: Array<{
//         href: string;
//         iconSrc: string;
//         iconAlt: string;
//         title: string;
//         isLink: boolean;
//     }>;
// };

// export const Media = (props: MediaSectionProps) => {
//     return (
//         <div
//             className={`relative overflow-hidden ${props.variant === "simple" ? "pt-[125px]" : ""}`}
//         >
//             <div className="absolute  h-full w-full left-0 top-0">
//                 <div className="absolute  h-full w-full z-[1] overflow-hidden left-0 top-0">
//                     <div className="absolute bg-cover  h-full w-full left-0 top-0"></div>
//                 </div>
//             </div>
//             <div className="relative  flex flex-wrap ml-[-25px] mr-[-25px] z-10">
//                 <div className="relative  w-full bg-center px-[25px]">

//                     {props.variant === "simple" ? (
//                         <div className="">
//                             <div className="bg-neutral-500  h-px w-1/5 mx-auto my-[0.5px]"></div>
//                         </div>
//                     ) : (
//                         <div className="caret-transparent relative bg-cover w-full pt-[18.75px] pb-[50px] md:py-16">
//                             <div className="absolute  h-full w-full left-0 top-0">
//                                 <div className="absolute  h-full w-full z-[1] overflow-hidden left-0 top-0">
//                                     <div className="absolute bg-neutral-100 bg-cover  h-full w-full left-0 top-0"></div>
//                                 </div>
//                             </div>
//                             <div className="relative  flex flex-wrap ml-[-25px] mr-[-25px] z-10 px-[50px] md:px-0">
//                                 <div className="relative text-black  w-full bg-center px-[25px]">

//                                     <div className="relative  mb-[50px]">
//                                         <div className="absolute  h-full w-full left-0 top-0">
//                                             <div className="absolute bg-cover  h-full w-full left-0 top-0"></div>
//                                         </div>
//                                         <div className="relative  flex flex-wrap ml-[-25px] mr-[-25px] z-10">
//                                             <div className="relative  w-full bg-center mb-[25px] px-[25px] md:w-6/12 md:mb-0">

//                                                 <div className=" mb-6">
//                                                     <div className="">
//                                                         <h3 className="text-[19.2px] font-bold tracking-[0.192px] leading-6 md:text-[27.2px] md:tracking-[0.272px] md:leading-[34px]">
//                                                             {props.heading}
//                                                         </h3>
//                                                     </div>
//                                                 </div>
//                                                 <div className="">
//                                                     <div className=" h-2.5"></div>
//                                                 </div>
//                                                 <div className=" mb-6">
//                                                     <div className="">
//                                                         <p className="">
//                                                             {props.description}
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="">
//                                                     <div className=" h-5"></div>
//                                                 </div>

//                                             </div>
//                                             <div className="relative  w-full bg-center px-[25px] md:w-6/12">
//                                                 <div className=""></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="relative  mb-[50px]">
//                                         <div className="absolute  h-full w-full left-0 top-0">
//                                             <div className="absolute bg-cover  h-full w-full left-0 top-0"></div>
//                                         </div>
//                                         <div className="relative  flex flex-wrap ml-[-25px] mr-[-25px] z-10">
//                                             <div className="relative  w-full bg-center px-[25px]">

//                                                 <div className=" gap-x-[30px] grid grid-cols-[repeat(2,1fr)] gap-y-0 overflow-hidden md:grid-cols-[repeat(5,1fr)]">
//                                                     {props.mediaLogos?.map((logo, index) => (
//                                                         <div
//                                                             key={index}
//                                                             className=""
//                                                         >
//                                                             <img
//                                                                 src={logo.src}
//                                                                 alt={logo.alt}
//                                                                 className=" max-w-[200px] mx-auto"
//                                                             />
//                                                         </div>
//                                                     ))}
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="">
//                                         <div className=" h-5"></div>
//                                     </div>
//                                     <div className="">
//                                         <div className="">
//                                             <p className=" text-center">
//                                                 <i className="relative text-[25px] font-normal  inline-block h-[13px] leading-[15px] max-w-full align-middle w-[15px] mr-[15px] -top-0.5 font-fontawesome"></i>
//                                                 {props.footerText}
//                                             </p>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div className="relative  py-[18.75px] md:py-16">
//                                 <div className="absolute  h-full w-full left-0 top-0">
//                                     <div className="absolute  h-full w-full z-[1] overflow-hidden left-0 top-0">
//                                         <div className="absolute bg-black bg-cover  h-full w-full left-0 top-0"></div>
//                                     </div>
//                                 </div>
//                                 <div className="relative  flex flex-wrap ml-[-25px] mr-[-25px] z-10">
//                                     <div className="relative  w-full bg-center px-[25px]">
//                                         <div className="relative ">
//                                             <div className="">
//                                                 <div className="relative  mb-[50px] pb-[1%]">
//                                                     <div className="absolute  h-full w-full left-0 top-0">
//                                                         <div className="absolute bg-cover  h-full w-full left-0 top-0"></div>
//                                                     </div>
//                                                     <div className="relative  flex flex-wrap ml-[-25px] mr-[-25px] z-10">
//                                                         <div className="relative  w-full bg-center mb-[25px] px-[25px] md:w-6/12 md:mb-0">
//                                                             <div className="relative ">
//                                                                 <div className="">
//                                                                     <div className="">
//                                                                         <div className="">
//                                                                             <h2 className="text-[26.4px] font-bold tracking-[-0.264px] leading-[33px] mb-[7px] md:text-[40.8px] md:tracking-[-0.408px] md:leading-[51px]">
//                                                                                 {props.sectionTitle}
//                                                                             </h2>
//                                                                             <p className="">
//                                                                                 {props.sectionDescription}
//                                                                             </p>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="relative  w-full bg-center px-[25px] md:w-6/12">
//                                                             <div className="relative ">
//                                                                 <div className=""></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className=" gap-x-[30px] grid grid-cols-[repeat(1,1fr)] gap-y-[30px] md:grid-cols-[repeat(5,1fr)]">
//                                                     {props.industries?.map((industry, index) =>
//                                                         industry.isLink ? (
//                                                             <a
//                                                                 key={index}
//                                                                 href={industry.href}
//                                                                 className="text-amber-300 text-sm items-center  flex"
//                                                             >
//                                                                 <div className="items-center  flex">
//                                                                     <img
//                                                                         src={industry.iconSrc}
//                                                                         alt={industry.iconAlt}
//                                                                         className=" h-10 w-10 mr-[15px]"
//                                                                     />
//                                                                     <h3 className="text-white font-bold tracking-[0.14px] leading-6 md:leading-[34px]">
//                                                                         {industry.title}
//                                                                     </h3>
//                                                                 </div>
//                                                             </a>
//                                                         ) : (
//                                                             <div
//                                                                 key={index}
//                                                                 className="items-center  flex"
//                                                             >
//                                                                 <img
//                                                                     src={industry.iconSrc}
//                                                                     alt={industry.iconAlt}
//                                                                     className=" h-10 w-10 mr-[15px]"
//                                                                 />
//                                                                 <h3 className="text-sm font-bold tracking-[0.14px] leading-6 md:leading-[34px]">
//                                                                     {industry.title}
//                                                                 </h3>
//                                                             </div>
//                                                         ),
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                 </div>
//             </div>
//         </div>
//     );
// };
