import { projects } from "@/data/projects";
import Project from "./Project";

function Projects() {
    return (
        <div className="flex flex-col justify-start items-start mt-[130px] md:mt-[168px] z-10 gap-y-3 md:gap-y-10">
            <div className="w-full h-[58px] justify-center items-center gap-8 flex flex-row">
                <div className="w-[72px] h-[0px] border border-secondary"></div>
                <div className="text-white text-3xl md:text-[32px] font-bold font-syne">Projects</div>
                <div className="w-[72px] h-[0px] border border-secondary"></div>
            </div>
            <div className="grid grid-flow-row justify-center items-center mx-auto gap-x-3">
                {projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
