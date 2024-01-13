import { ExperienceType } from "@/types/ExperienceType";

const dappd: ExperienceType = {
    id: 1,
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
    works: [
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
    id: 2,
    company: "Motley Labs",
    position: "Fullstack Engineer (Contractor)",
    companyWebsite: "https://twitter.com/MotleyLabs",
    startDate: "May",
    endDate: "Sept 2023",
    techStack: ["Next.js", "TailwindCSS", "TypeScript", "Redux", "Solana", "SWR", "Prisma", "Golang", "Github"],
    description:
        "I have worked on nightmarket.io product which is main product of the company. Implemented UIs,cool animations and websockets. They ended up shutting down the company due to crypto winter.",
    works: [
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
    id: 3,
    company: "Shuttlescanner",
    position: "Fullstack Engineer (part-time)",
    companyWebsite: "https://shuttlescanner.web.app/",
    startDate: "Mar",
    endDate: "Jul 2022",
    techStack: ["Angular", "TailwindCSS", "TypeScript", "Mysql", "Golang", "Firebase", "Git"],
    description:
        "Shuttlescanner is a young startup which is a different booking platform for other alternatives. I mostly worked on backend and some frontend. I implemented a lot of features and fixed a lot of bugs. I also implemented a lot of tests for the backend.",
    works: [
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
    id: 4,
    company: "Project Moonshot",
    position: "Frontend Engineer",
    companyWebsite: "https://project-moonshot-web.web.app/",
    startDate: "Jun 2021",
    endDate: "Jul 2022",
    techStack: ["Angular", "TailwindCSS", "TypeScript", "Mysql", "Golang", "Firebase", "Git"],
    description:
        "As a Frontend Developer in Moonshot, I was working with deseign implementations and various of smart contract interactions in Moonshot. Faucet , Mining, Vesting , NFT etc. I was huge part of their nft marketplace called MoonBoxes",
    works: [
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

const cofounder: ExperienceType = {
    id: 5,
    company: "Carbofil & Nemria",
    position: "Technical Co-Founder",
    companyWebsite: "https://carbofil.com/",
    startDate: "Mar 2021",
    endDate: "Mar 2022",
    techStack: ["Flutter", "Node.js", "Firebase", "Git"],
    description:
        "We have built an app that suggests daily activities and eco-friendly brands to people who are trying to live more sustainably. When people start to switch to a sustainable lifestyle they need to do a lot of research and find out what they will do on their own. We have helped these people to find those things, do it with a community and see the collective impact. Previously we worked on Nemria and Carbofil is the result of this learning process!",
    works: [
        {
            image: "/cofounder-2.webp",
            name: "Carbofil & Nemria",
            url: "https://carbofil.com/",
        },
        {
            image: "/cofounder-1.webp",
            name: "carbofil & Nemria",
            url: "https://nemria.com/",
        },
    ],
};

export const experiences: ExperienceType[] = [dappd, motleylabs, shuttlescanner, projectMoonshot, cofounder];
