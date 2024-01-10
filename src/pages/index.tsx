import { Syne, Rubik } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${syne.className} ${rubik.className}`}
        ></main>
    );
}
