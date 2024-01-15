import { ProjectType } from "@/types/ProjectType";

export const projects: ProjectType[] = [
    {
        id: 1,
        name: "ZUNOTE",
        image: "/zunote.webp",
        description:
            "ZUNOTE is a multi-platform productivity app that you can take notes over voice recordings and set reminder to get notified at time. And it is open-source. I have launched the website and chrome-extension. Now working on desktop and mobile app.",
        links: [
            "https://zunote.io/",
            "https://github.com/furkanksl/zunote-web",
            "https://github.com/furkanksl/zunote-extension/releases/tag/0.1",
        ],
    },
    {
        id: 2,
        name: "Horae",
        image: "/horae.webp",
        description: "A time tracking app to log hours of the day.",
        links: ["https://gethorae.com/", "https://play.google.com/store/apps/details?id=com.categorize.time"],
    },

    {
        id: 3,
        name: "Brig Note",
        image: "/brignote.webp",
        description:
            "A voice recording app that lets you take timestamped notes while listening to a lecture or interviewing someone. It was #3 product of the day in Product Hunt when launched. I made this app with my friends in Nemria time.",
        links: [
            "https://nemria.com/brig-note",
            "https://apps.apple.com/tt/app/brig-note/id1564488528?ign-mpt=uo%3D2&ref=nemria-brig-note",
            "https://www.producthunt.com/products/brig-note",
        ],
    },
];
