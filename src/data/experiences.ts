import { ExperienceType } from "@/types/ExperienceType";

export const experiences: ExperienceType[] = [
    {
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
    },
    {
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
    },
];
