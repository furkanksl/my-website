import { ProjectType } from "./ProjectType";

export type ExperienceType = {
    company: string;
    companyWebsite: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    projects: ProjectType[];
    techStack: string[];
};
