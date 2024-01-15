import { WorkT } from "./WorkT";

export type ExperienceT = {
    id: number;
    company: string;
    companyWebsite: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    works: WorkT[];
    techStack: string[];
};
