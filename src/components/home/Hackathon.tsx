import { HackathonT } from "@/types/HackathonT";

function Hackathon(hackathon: HackathonT) {
    return (
        <div className="flex flex-col md:flex-row gap-y-3 justify-between items-center w-full border-b border-secondary-dark pb-4 group hover:shadow-[0_0px_10px_#FFFFFFC6] p-3 rounded-lg backdrop-blur-lg">
            <div className="flex flex-col w-full md:w-auto justify-between">
                <a
                    href={hackathon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg md:text-[24px] font-bold font-syne hover:text-secondary cursor-pointer hover:underline"
                >
                    {hackathon.name}
                </a>
                <div className="text-lg md:text-[24px] font-bold font-syne text-secondary-dark">{hackathon.date}</div>
            </div>
            <div className="flex flex-col items-start w-full md:w-auto md:items-end">
                <div className="text-lg md:text-[24px] font-bold font-syne text-secondary">{hackathon.achievement}</div>
                <div className="text-lg md:text-[24px] font-bold font-syne text-secondary-dark">achievement</div>
            </div>
        </div>
    );
}

export default Hackathon;
