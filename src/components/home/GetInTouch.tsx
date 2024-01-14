function GetInTouch() {
    return (
        <div className="flex flex-col mt-[120px] mb-20 gap-y-10">
            <div className="flex flex-row justify-center items-center">
                {"Get in touch with me".split("").map((letter, index) => {
                    if (letter === " ") {
                        return <div key={index} className="w-1 md:w-2"></div>;
                    } else
                        return (
                            <div
                                key={index}
                                className="text-center text-secondary hover:text-white hover:scale-110 text-2xl md:text-3xl font-bold font-syne transition-all duration-200 "
                            >
                                {letter}
                            </div>
                        );
                })}
            </div>
            <a
                href="mailto:furkankoseoglu65@gmail.com"
                className="text-center text-white text-xl md:text-4xl font-bold font-syne underline hover:drop-shadow-[0_0px_10px_#FFFFFF]"
            >
                furkankoseoglu65@gmail.com
                {/* info@furkanksl.com */}
            </a>
        </div>
    );
}

export default GetInTouch;
