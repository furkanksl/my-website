import { hackathons } from "@/data/hackathons";
import React from "react";
import Hackathon from "./Hackathon";

function Hackathons() {
    return (
        <div
            id="hackathons"
            className="flex flex-col justify-start items-start mt-[130px] md:mt-[168px] z-10 gap-y-3 md:gap-y-10"
        >
            <div className="w-full h-[58px] justify-center items-center gap-8 flex flex-row">
                <div className="w-[72px] h-[0px] border border-secondary"></div>
                <div className="text-white text-3xl md:text-[32px] font-bold font-syne">Hackathons</div>
                <div className="w-[72px] h-[0px] border border-secondary"></div>
            </div>
            <div className="flex flex-col gap-y-5 w-full">
                {hackathons.map((hackathon, index) => (
                    <Hackathon key={index} {...hackathon} />
                ))}
            </div>
        </div>
    );
}

export default Hackathons;
