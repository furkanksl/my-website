import { ExperienceT } from "@/types/ExperienceT";
import clsx from "clsx";
import Image from "next/image";

function Experience(experience: ExperienceT) {
    return (
        <div
            key={experience.id}
            className="flex flex-col lg:flex-row lg:items-start gap-x-6 lg:justify-between mb-10 h-full"
        >
            <div className="flex flex-col w-full">
                <div className="justify-start items-center gap-8 inline-flex mt-16">
                    <div className="flex md:hidden h-2 w-2 rounded-full bg-secondary"></div>
                    <div className="hidden md:flex w-10 md:w-[72px] h-[2px] md:h-1 rounded-full border-[3px] border-secondary"></div>
                    <div className="flex flex-col md:flex-row gap-x-2 ">
                        <div className="text-white text-xl md:text-xl font-light font-syne leading-loose">
                            {experience.position}
                        </div>
                        <div className="text-white/80 text-lg md:text-xl font-normal font-syne leading-loose">
                            ({experience.startDate} - {experience.endDate})
                        </div>
                    </div>
                </div>

                {/* <div className="flex h-0.5 bg-white/30 w-full mt-4"></div> */}

                <div className="justify-start items-start gap-4 inline-flex mt-10">
                    <div className="text-secondary text-base font-medium font-rubik leading-snug tracking-tight">
                        Company :
                    </div>
                    <a
                        href={experience.companyWebsite}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="cursor-pointer underline hover:scale-110 hover:underline-offset-2 text-secondary-dark text-base font-semibold font-rubik leading-snug tracking-[1px]"
                    >
                        {experience.company}
                    </a>
                </div>

                {/* <div className="justify-start items-start gap-4 inline-flex mt-4">
                <div className="text-secondary text-base font-medium font-rubik leading-snug tracking-tight">
                    Website :
                </div>
                <a
                    href="https://dappd.net"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="cursor-pointer hover:underline hover:scale-110 hover:underline-offset-2 text-white text-base font-normal font-['Rubik'] leading-snug tracking-tight"
                >
                    https://dappd.net
                </a>
            </div> */}
                <div className="flex w-full justify-start items-start gap-4 flex-wrap md:flex-row mt-4">
                    <div className="w-min whitespace-nowrap text-secondary text-base font-medium font-rubik leading-snug tracking-tight">
                        Tech stack :
                    </div>
                    <div className="flex flex-wrap gap-x-[6px] justify-start items-center">
                        {experience.techStack.map((tech, index) => {
                            return (
                                <div
                                    key={index + experience.company}
                                    className="text-secondary-dark hover:scale-110 hover:text-secondary-light text-base font-normal font-rubik leading-snug tracking-tight"
                                >
                                    {tech + (index !== experience.techStack.length - 1 ? "," : "")}
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className="text-orange-400 text-sm font-normal font-rubik leading-snug tracking-tight">
                Logo design
            </div> */}
                </div>
                <div className="max-w-[696px] text-slate-400 text-base font-normal font-rubik leading-7 mt-8">
                    {experience.description}
                </div>
            </div>

            <div className="flex relative h-[316px] w-full  mt-16 pb-4">
                <div className="w-full flex flex-row gap-x-4 overflow-x-auto md:overflow-visible h-[296px] items-start justify-start relative backdrop-blur-md">
                    {experience.works.map((item, index) => {
                        const zIndex = `z-[${(index + 1) * 10}]`;

                        return (
                            <a
                                href={item.url}
                                target="_blank"
                                referrerPolicy="no-referrer"
                                key={index}
                                style={{
                                    right: `${(experience.works.length - 1 - index) * 100}px`,
                                }}
                                className={clsx(
                                    "group md:absolute top-0 flex h-[280px] w-[400px] bg-transparent rounded-xl hover:z-50 md:hover:scale-110 transition-all duration-500 ease-in-out hover:border-2 hover:border-secondary hover:md:shadow-[0_0px_20px_rgba(255,_145,_66,_1)]",
                                    zIndex
                                )}
                            >
                                <Image
                                    src={item.image}
                                    width={400}
                                    height={280}
                                    alt={"project-image-" + index}
                                    className={clsx("object-fill rounded-xl w-screen max-w-[396px] h-full", zIndex)}
                                />

                                <div className=" cursor-pointer text-base md:text-lg text-white hover:text-black hover:bg-secondary-light font-rubik hidden group-hover:md:flex absolute bottom-0 right-0 w-screen max-w-[400px] h-10 justify-center items-center bg-black/30 transition-all duration-500 ease-out delay-100 rounded-b-lg">
                                    Visit
                                </div>
                            </a>
                        );
                    })}
                </div>
                <div className="flex md:hidden h-[280px] w-[100px] absolute right-0 bottom-0 top-0 bg-gradient-to-l from-black/80 to-transparent mb-4 pointer-events-none"></div>
            </div>
        </div>
    );
}

export default Experience;
