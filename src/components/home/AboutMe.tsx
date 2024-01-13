function AboutMe() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-y-5 md:gap-y-0 gap-x-[40px] lg:gap-x-[120px]">
            <div
                id="me-wrapper"
                className="flex relative group"
                onMouseLeave={(e) => {
                    if (window) {
                        const ticketElm: any = document.getElementById("me-wrapper");
                        ticketElm.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                    }
                }}
                onMouseMove={(e) => {
                    if (window) {
                        const ticketElm: HTMLDivElement = document.getElementById("me-wrapper") as HTMLDivElement;
                        if (ticketElm.matches(":hover")) {
                            const { x, y, width, height } = ticketElm.getBoundingClientRect();
                            // console.log(ticketElm.getBoundingClientRect());
                            const centerPoint = { x: x + width / 2, y: y + height / 2 };
                            // window.addEventListener("mousemove", (e) => {
                            const degreeX = (e.clientY - centerPoint.y) * 0.05;
                            const degreeY = (e.clientX - centerPoint.x) * -0.05;

                            ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
                            // });
                        }
                    }
                }}
            >
                <div className="flex border-secondary border h-[34px] w-[110px] rounded-full absolute -top-4 right-0 group-hover:animate-move-reversed-l backdrop-blur-sm z-20"></div>
                <div className="flex border-secondary border h-[178px] w-[55px] rounded-full absolute bottom-10 -left-8 group-hover:animate-move-vertical  backdrop-blur-sm z-20">
                    <div className="flex md:hidden md:group-hover:flex typewriter">Hi 👋</div>
                </div>
                <div id="me" className="me-container">
                    <div className="me flex overflow-visible bg-secondary-darker rounded-[30px] max-h-[296px] max-w-[80vw] md:max-h-[506px] md:max-w-[454px] h-screen w-screen relative !bg-my-pic bg-cover group hover:shadow-[0_0px_20px_rgba(255,_145,_66,_1)] shadow-none shadow-secondary"></div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start w-full z-10">
                <div className="text-white text-[32px] font-bold font-syne mx-auto md:mx-0">About me</div>
                <div className="text-secondary-dark text-lg font-normal font-rubik leading-7 tracking-wide pt-6">
                    I was born in 1998 and in a very small village at Van/Turkey. I was too crious about the android
                    phones when I was in highschool. Changing firmware of phones for fun. And studied Computer
                    Engineering at university with finishing it with 3.3/4 GPA.
                    <br />
                    <br />I did my intership as Fullstack Engineer remotely (before covid) to a company in London/UK.
                    Before graduation from university, I started to work as a Frontend Engineer. Currently, working as a
                    Senior Fullstack Engineer and exploring the AI field.
                </div>
                <div className="text-secondary text-lg font-bold font-syne pt-8">follow me on:</div>
                <div className="flex w-full justify-between pt-4">
                    <div className="flex-1 flex justify-start">
                        <a
                            href="https://github.com/furkanksl"
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="w-min text-neutral-400 text-base md:text-xl font-bold font-['Inter'] uppercase tracking-[2.06px] cursor-pointer hover:scale-110 hover:text-white"
                        >
                            Github
                        </a>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <a
                            href="https://www.linkedin.com/in/furkanksl/"
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="w-min text-neutral-400 text-base md:text-xl font-bold font-['Inter'] uppercase tracking-[2.06px] cursor-pointer hover:scale-110 hover:text-white"
                        >
                            Linkedin
                        </a>
                    </div>

                    <div className="flex-1 flex justify-end">
                        <a
                            href="https://twitter.com/frknksglu"
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="w-min text-neutral-400 text-base md:text-xl font-bold font-['Inter'] uppercase tracking-[2.06px] cursor-pointer hover:scale-110 hover:text-white"
                        >
                            Twitter
                        </a>
                    </div>
                </div>

                <div className="text-white text-opacity-70 text-2xl font-bold font-syne mt-10 md:mt-[100px]">
                    my last posts
                </div>
                <div className="cursor-pointer text-neutral-400 text-lg font-normal font-rubik underline tracking-wide">
                    How to check is array or not on type level
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
