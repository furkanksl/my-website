import Image from "next/image";
import { Syne, Rubik } from "next/font/google";

import Header from "@/components/core/header";
import AboutMe from "@/components/home/AboutMe";
import Experience from "@/components/home/Experience";
import { experiences } from "@/data/experiences";

const syne = Syne({ subsets: ["latin"], display: "swap", variable: "--font-syne" });
const rubik = Rubik({ subsets: ["latin"], display: "swap", variable: "--font-rubik" });

export default function Home() {
    return (
        <main
            className={`flex min-h-screen bg-primary w-screen overflow-x-hidden flex-col items-center justify-start relative pt-12 ${syne.variable} ${rubik.variable}`}
        >
            <Header />

            <Image
                src="/blurry-bubble.svg"
                width={500}
                height={217}
                alt="blurry-bubble"
                className="max-w-[500px] !max-h-[217px] object-cover blur-[200px] absolute top-[30%] -right-[140px] z-0"
            />

            <Image
                src="/blurry-bubble.svg"
                width={500}
                height={217}
                alt="blurry-bubble"
                className="max-w-[500px] !max-h-[217px] object-cover blur-[200px] absolute top-[70%] -left-[140px] z-0"
            />

            {/* <Image
                src="/blurry-bubble.svg"
                width={500}
                height={217}
                alt="blurry-bubble"
                className="max-w-[500px] !max-h-[217px] object-cover blur-[200px] absolute top-[95%] -right-[140px] z-0"
            /> */}
            <div className="flex flex-col max-w-[1240px] px-5 mt-[50px] md:mt-[110px] w-screen">
                <AboutMe />

                <div id="experiences" className="flex flex-col mt-[130px] md:mt-[168px] z-10 gap-y-3 md:gap-y-10">
                    <div className="w-full h-[58px] justify-center items-center gap-8 flex flex-row">
                        <div className="w-[72px] h-[0px] border border-secondary"></div>
                        <div className="text-white text-3xl md:text-[32px] font-bold font-syne">
                            {/* places I worked at and things I’ve built */}
                            Experiences
                        </div>
                        <div className="w-[72px] h-[0px] border border-secondary"></div>
                    </div>
                    {experiences.map((experience) => {
                        return <Experience key={experience.id} {...experience} />;
                    })}
                </div>
            </div>

            <div className="flex flex-col mt-[120px] mb-20 gap-y-10">
                <div className="flex flex-row justify-center items-center">
                    {"Get in touch with me".split("").map((letter, index) => {
                        if (letter === " ") {
                            return <div key={index} className="w-1 md:w-2"></div>;
                        } else
                            return (
                                <div
                                    key={index}
                                    className="text-center text-secondary hover:text-white text-2xl md:text-3xl font-bold font-syne transition-all duration-200 "
                                >
                                    {letter}
                                </div>
                            );
                    })}
                </div>
                <a
                    href="mailto:furkankoseoglu65@gmail.com"
                    className="text-center text-white text-xl md:text-4xl font-bold font-syne underline"
                >
                    furkankoseoglu65@gmail.com
                    {/* info@furkanksl.com */}
                </a>
            </div>
        </main>
    );
}
