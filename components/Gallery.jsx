import { useMemo } from "react";


export default function EventsSection() {

    const images = Array.from({ length: 9 }, (_, i) => `gallery/${i + 1}.webp`);
    const leftImages = useMemo(() => [...images].sort(() => Math.random() - 0.5), []);
    const rightImages = useMemo(() => [...images].sort(() => Math.random() - 0.5), []);

    return (
        <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background via-transparent to-background z-5" />

            <div className="flex overflow-visible">
                <MarqueeColumn images={leftImages} />
                <MarqueeColumn images={images} reverse />
                <MarqueeColumn images={rightImages} />
            </div>
        </div>
    )
}

const MarqueeColumn = ({ reverse = false, images }) => {
    return (
        <div className="relative h-[160vh] overflow-y-hidden">
            <div className={`flex px-5 flex-col gap-4 ${reverse ? "animate-marquee-v-reverse" : "animate-marquee-v"}`}>
                {[...images, ...images].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt=""
                        draggable={false}
                        className="h-80 w-80 rounded-xl object-cover border border-white/20 odd:translate-x-2 even:-translate-x-2 odd:rotate-2 even:-rotate-2 transition-all duration-200 hover:brightness-120"
                    />
                ))}
            </div>
        </div>
    );
}