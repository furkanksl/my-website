import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            syne: ["var(--font-syne)"],
            rubik: ["var(--font-rubik)"],
        },
        extend: {
            backgroundImage: {
                "my-pic": "url('/me.webp')",
            },
            colors: {
                primary: "#1A1A1A",
                secondary: "#FF9142",
                "secondary-light": "#FF9142",
                "secondary-dark": "#8D8D8D",
                "secondary-darker": "#606060",
            },
            keyframes: {
                "move-reversed-l": {
                    "0%": { right: "0px" },
                    "20%": { right: "-60px", transform: "rotate(90deg)" },
                    "100%": { bottom: "0", top: "calc(100% - 85px)", right: "-60px", transform: "rotate(90deg)" },
                },
                "move-vertical": {
                    "0%": {},
                    "70%": { transform: "rotate(0deg)", left: "-32px" },
                    "80%": { transform: "rotate(70deg)", left: "10px" },
                    "100%": { bottom: "calc(100% - 90px)", transform: "rotate(90deg)", left: "90px" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-in-out",
                "move-vertical": "move-vertical 1s forwards",
                "move-reversed-l": "move-reversed-l 1s forwards",
            },
        },
    },
    plugins: [],
};
export default config;
