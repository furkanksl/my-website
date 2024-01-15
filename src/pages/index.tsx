import { Syne, Rubik } from "next/font/google";

import Header from "@/components/core/header";
import AboutMe from "@/components/home/AboutMe";
import Experiences from "@/components/home/Experiences";
import GetInTouch from "@/components/home/GetInTouch";
import Projects from "@/components/home/Projects";
import BlurryBubbles from "@/components/home/BlurryBubbles";
import Hackathons from "@/components/home/Hackathons";

const syne = Syne({ subsets: ["latin"], display: "swap", variable: "--font-syne" });
const rubik = Rubik({ subsets: ["latin"], display: "swap", variable: "--font-rubik" });

export default function Home() {
    return (
        <main
            className={`flex min-h-screen bg-primary w-screen overflow-x-hidden flex-col items-center justify-start relative pt-12 ${syne.variable} ${rubik.variable}`}
        >
            <Header />
            <BlurryBubbles />

            <div className="flex flex-col max-w-[1240px] px-5 mt-[50px] md:mt-[110px] w-screen">
                <AboutMe />
                <Experiences />
                <Projects />
                <Hackathons />
                <GetInTouch />
            </div>
        </main>
    );
}
