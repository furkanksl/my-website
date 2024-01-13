import { WorkType } from "./WorkType";

export type ExperienceType = {
    id: number;
    company: string;
    companyWebsite: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    works: WorkType[];
    techStack: string[];
};
