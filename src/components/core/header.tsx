function Header() {
    return (
        <header className="flex w-full flex-row justify-between items-center max-w-[1240px] px-5 relative z-10">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-y-5 md:gap-y-0">
                <div className="inline-block font-syne text-3xl md:text-[56px] font-bold text-white group">
                    <span className="inline-block group-hover:first-letter:!text-secondary">Furkan</span>
                    <span className="inline-block group-hover:first-letter:!text-secondary ml-2">Koseoglu</span>
                </div>
                <div className="flex flex-row gap-x-4 md:gap-x-8 items-center">
                    <a
                        href="#experiences"
                        className="inline-block font-rubik text-[14px] font-medium text-secondary-dark uppercase cursor-pointer hover:scale-110 hover:tracking-[2px] hover:text-white transform duration-300 hover:shadow-sm hover:first-letter:!text-secondary"
                    >
                        Experiences
                    </a>
                    <div className="inline-block font-rubik text-[14px] font-medium text-secondary-dark uppercase cursor-pointer hover:scale-110 hover:tracking-[2px] hover:text-white transform duration-300 hover:shadow-sm hover:first-letter:!text-secondary">
                        Projects
                    </div>
                    <div className="inline-block font-rubik text-[14px] font-medium text-secondary-dark uppercase cursor-pointer hover:scale-110 hover:tracking-[2px] hover:text-white transform duration-300 hover:shadow-sm hover:first-letter:!text-secondary">
                        Writings
                    </div>
                    <div className="inline-block font-rubik text-[14px] font-medium text-secondary-dark uppercase cursor-pointer hover:scale-110 hover:tracking-[2px] hover:text-white transform duration-300 hover:shadow-sm hover:first-letter:!text-secondary">
                        Skills
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
