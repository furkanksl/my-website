import { ExperienceType } from "@/types/ExperienceType";

const dappd: ExperienceType = {
    company: "Dappd",
    position: "Sr. Fullstack Engineer | TPM",
    companyWebsite: "https://dappd.net",
    startDate: "2022",
    endDate: "Present",
    techStack: [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "Solidity",
        "Hardhat",
        "Ethers.js",
        "Wagmi",
        "React Query",
        "Graphql",
        "tRPC",
        "Prisma",
        "Postgresql",
        "Firebase",
        "AWS",
        "Github",
    ],
    description:
        "I have worked on many projects from scratch to live. Built many apps and integrated many smart-contracts.",
    projects: [
        {
            image: "/liquid-project.webp",
            name: "Liquid",
            url: "https://www.getliquid.io/",
        },
        {
            image: "/statis-network-project.webp",
            name: "Statis Network",
            url: "https://www.stasis.network/",
        },
    ],
};

const motleylabs: ExperienceType = {
    company: "Motley Labs",
    position: "Fullstack Engineer (Contractor)",
    companyWebsite: "https://twitter.com/MotleyLabs",
    startDate: "May",
    endDate: "Sept 2023",
    techStack: ["Next.js", "TailwindCSS", "TypeScript", "Redux", "Solana", "SWR", "Prisma", "Golang", "Github"],
    description:
        "I have worked on nightmarket.io product which is main product of the company. Implemented UIs,cool animations and websockets. They ended up shutting down the company due to crypto winter.",
    projects: [
        {
            image: "/motleylab-2.webp",
            name: "Motley Labs",
            url: "https://twitter.com/nightmarketio",
        },
        {
            image: "/motleylab-1.webp",
            name: "Motley Labs",
            url: "https://twitter.com/nightmarketio",
        },
    ],
};

const shuttlescanner: ExperienceType = {
    company: "Shuttlescanner",
    position: "Fullstack Engineer (part-time)",
    companyWebsite: "https://shuttlescanner.web.app/",
    startDate: "Mar",
    endDate: "Jul 2022",
    techStack: ["Angular", "TailwindCSS", "TypeScript", "Mysql", "Golang", "Firebase", "Git"],
    description:
        "Shuttlescanner is a young startup which is a different booking platform for other alternatives. I mostly worked on backend and some frontend. I implemented a lot of features and fixed a lot of bugs. I also implemented a lot of tests for the backend.",
    projects: [
        {
            image: "/shuttlescanner-2.webp",
            name: "Shuttlescanner",
            url: "https://shuttlescanner.web.app/",
        },
        {
            image: "/shuttlescanner-1.webp",
            name: "Shuttlescanner",
            url: "https://shuttlescanner.web.app/",
        },
    ],
};

const projectMoonshot: ExperienceType = {
    company: "Project Moonshot",
    position: "Frontend Engineer",
    companyWebsite: "https://project-moonshot-web.web.app/",
    startDate: "Jun 2021",
    endDate: "Jul 2022",
    techStack: ["Angular", "TailwindCSS", "TypeScript", "Mysql", "Golang", "Firebase", "Git"],
    description:
        "As a Frontend Developer in Moonshot, I was working with deseign implementations and various of smart contract interactions in Moonshot. Faucet , Mining, Vesting , NFT etc. I was huge part of their nft marketplace called MoonBoxes",
    projects: [
        {
            image: "/project-moonshot-2.webp",
            name: "Project Moonshot",
            url: "https://moonboxesio.web.app/info",
        },
        {
            image: "/project-moonshot-1.webp",
            name: "Project Moonshot",
            url: "https://project-moonshot-web.web.app/",
        },
    ],
};

export const experiences: ExperienceType[] = [dappd, motleylabs, shuttlescanner, projectMoonshot];
