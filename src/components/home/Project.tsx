import { ProjectType } from "@/types/ProjectType";
import clsx from "clsx";
import Image from "next/image";

export default function Project(project: ProjectType) {
    // const projectImage = "bg-[url('" + project.image + "')]";
    const projectImage = "url('" + project.image + "')";
    return (
        <div className="flex flex-col gap-y-3 items-center justify-start">
            <div
                style={{
                    backgroundImage: projectImage,
                }}
                className={clsx(
                    "z-10 flex px-3 w-[300px] h-[300px] bg-white/10 rounded-lg relative group shadow-[0_0px_5px_#FFFFFFC6] md:shadow-none hover:md:!shadow-[0_0px_20px_#FFFFFFC6] overflow-visible hover:scale-110 transition-all duration-300 bg-center bg-no-repeat bg-[length:100%_auto]"
                )}
            >
                <div className="z-20 opacity-0 group-hover:opacity-100 invisible md:visible rounded-lg absolute top-0 bottom-0 right-0 left-0 h-full w-full backdrop-blur-md bg-white/5 transition-all delay-150"></div>
                <div className="z-30 flex-col m-auto hidden md:flex max-h-[200px] h-0 group-hover:h-full overflow-y-auto opacity-0 group-hover:opacity-100 delay-100 transition-all text-center text-base text-secondary-darker font-rubik font-thin duration-500">
                    <p className="font-bold">{project.name}</p>
                    <p>{project.description}</p>

                    {/* {project.name + "\n" + project.description} */}
                </div>
                <div className="w-0 group-hover:w-12 rounded-r-lg absolute backdrop-blur-3xl hidden flex-col gap-y-3 opacity-0 md:flex group-hover:opacity-100 group-hover:-right-12 bottom-0 right-0 top-0 h-[calc(100%_-_40px)] my-auto transition-all duration-500 delay-200 items-center justify-start py-2">
                    {project.links.map((link, index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="flex h-8 w-8 rounded-full hover:scale-110 transition-all duration-300"
                        >
                            <Image
                                src={link.includes("github.com") ? "/github.svg" : "/internet.svg"}
                                width={32}
                                height={32}
                                alt={link.includes("github.com") ? "github icon" : "internet icon"}
                            />
                        </a>
                    ))}
                </div>
                {/* <div className="h-12 absolute bg-white flex opacity-0 group-hover:flex group-hover:opacity-100 group-hover:bottom-0 -bottom-12 right-0 left-0 w-full transition-all duration-300 delay-150"></div> */}
            </div>

            <div className="flex md:hidden text-center text-lg text-white font-rubik font-bold backdrop-blur-md">
                {project.name}
            </div>

            <div className="h-12 flex md:hidden rounded-lg backdrop-blur-xl flex-row w-[260px] mx-auto items-center justify-center px-2 gap-x-4 shadow-[0_0px_5px_#FFFFFFC6]">
                {project.links.map((link, index) => (
                    <a
                        key={index}
                        href={link}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex h-8 w-8 rounded-full hover:scale-110 transition-all duration-300"
                    >
                        <Image
                            src={link.includes("github.com") ? "/github.svg" : "/internet.svg"}
                            width={32}
                            height={32}
                            alt={link.includes("github.com") ? "github icon" : "internet icon"}
                        />
                    </a>
                ))}
            </div>

            <div className="flex md:hidden text-center text-base text-white font-rubik font-thin backdrop-blur-md">
                {project.description}
            </div>
        </div>
    );
}
