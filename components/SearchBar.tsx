export const SearchBar = () => {
    return (
        <div className="fixed  pointer-events-none w-full z-[9999] py-3 left-0 top-0 md:py-0">
            <div className="bg-black  hidden z-auto md:z-[100000]">
                <div className=" max-w-none w-auto mx-0 px-0 md:max-w-[2000px] md:w-full md:mx-auto md:px-[70px]">
                    <div className="relative  max-w-[88%] w-auto mx-auto px-0 md:max-w-[2000px] md:w-full md:px-[70px]">
                        <div className="">
                            <div className="">
                                <div className="relative  float-left w-full">
                                    <form role="search" className="">
                                        <input
                                            type="text"
                                            name="s"
                                            defaultValue=""
                                            aria-label="Search"
                                            placeholder="Type what you're looking for"
                                            className="text-base font-semibold bg-black/0  h-auto tracking-[0.16px] leading-4 uppercase w-full p-[15px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-white md:text-[32px] md:h-[60px] md:tracking-[0.32px] md:leading-8"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-0 right-auto top-auto md:-mt-7 md:right-[70px] md:top-2/4">
                            <a
                                href="#"
                                className="text-amber-300  right-auto md:right-3"
                            >
                                <span className="absolute text-white  block h-5 w-5 overflow-hidden left-2/4 top-2/4">
                                    <span className="absolute bg-white  block h-full w-0.5 rounded-[5px] left-[9px]"></span>
                                    <span className="absolute bg-white  block h-full w-0.5 rounded-[5px] left-[9px]"></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
