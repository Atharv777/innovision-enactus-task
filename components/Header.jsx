

export default function Header() {

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed z-10 flex items-center justify-between gap-7 top-7 left-[50%] translate-x-[-50%] px-8 sm:px-12 py-3 border border-white/40 backdrop-blur-md rounded-full">
            <p className="will-change-transform text-sm font-medium text-white/80 hover:text-white hover:font-semibold transition-all duration-300 cursor-pointer" onClick={() => scrollToId("events")}>Events</p>
            <p className="will-change-transform text-sm font-medium text-white/80 hover:text-white hover:font-semibold transition-all duration-300 cursor-pointer" onClick={() => scrollToId("gallery")}>Gallery</p>
            <p className="will-change-transform text-sm font-medium text-white/80 hover:text-white hover:font-semibold transition-all duration-300 cursor-pointer" onClick={() => scrollToId("contact")}>Contact Us</p>
        </div>
    )
}

