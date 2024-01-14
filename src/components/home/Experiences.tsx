import { experiences } from "@/data/experiences";
import Experience from "./Experience";

function Experiences() {
    return (
        <div id="experiences" className="flex flex-col mt-[130px] md:mt-[168px] z-10 gap-y-3 md:gap-y-10">
            <div className="w-full h-[58px] justify-center items-center gap-8 flex flex-row">
                <div className="w-[72px] h-[0px] border border-secondary"></div>
                <div className="text-white text-3xl md:text-[32px] font-bold font-syne">
                    {/* places I worked at and things I’ve built */}
                    Experiences
                </div>
                <div className="w-[72px] h-[0px] border border-secondary"></div>
            </div>
            {experiences.map((experience) => {
                return <Experience key={experience.id} {...experience} />;
            })}
        </div>
    );
}

export default Experiences;
