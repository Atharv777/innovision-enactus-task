"use client"

import LightTunnel from "@/components/LightTunnel";
import CountUp from "@/components/CountUp";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Countdown from "@/components/Countdown";
import SponsorsMarquee from "@/components/SponsorsMarquee";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import Gallery from "@/components/Gallery";
import { useState } from "react";
import { RegModal } from "@/components/RegModal";

import { ToastContainer } from 'react-toastify';

export default function Home() {

    const [selectedDay, setSelectedDay] = useState(1);
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);

    const closeRegModal = () => {
        setIsRegModalOpen(false)
    }

    return (

        <div className="relative min-h-screen max-w-screen overflow-x-hidden flex flex-col items-center">

            <Header />

            <div className="absolute w-full h-screen">
                <LightTunnel
                    cableColor="#ededed"
                    pulseColor="#787878"
                    speed={0.15}
                    brightness={0.5}
                    mouseInteraction={false}
                />
            </div>

            <div className="relative z-2 flex flex-col items-center justify-center w-full h-screen px-8 sm:px-16 md:px-24 max-w-250">
                <div className="relative">
                    <h1 className="inline text-7xl md:text-9xl font-extrabold tracking-tight z-2">Innovision</h1>
                    <h1 className="absolute top-0 left-0 blur-xl opacity-50 select-none text-7xl md:text-9xl font-extrabold tracking-tight z-1">Innovision</h1>
                </div>

                <p className="text-base sm:text-lg md:text-[26px] font-light tracking-wide text-white/70 text-center mt-3">The Annual Tech Fest of NSUT, a grand celebration of innovation, technology, and creativity.</p>

                <div className="flex w-full flex-row gap-10 max-w-125 mt-15">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 } }}
                        className='flex-1 w-full'
                    >
                        <Button className="w-full hover:font-bold" onClick={() => { setIsRegModalOpen(true) }}>Register Now</Button>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.4 } }}
                        className='flex-1 w-full'
                    >
                        <Button className="w-full hover:font-bold" href="#events">Check our events</Button>
                    </motion.div>
                </div>

                <div className="flex flex-row items-center justify-between w-full mt-20">
                    <div className="flex flex-col items-center will-change-contents flex-1">
                        <div>
                            <CountUp to={4000} separator="," duration={0.1} className="text-2xl sm:text-3xl md:text-4xl font-bold" />
                            <span className="text-2xl sm:text-3xl md:text-4xl font-medium">{"+"}</span>
                        </div>
                        <p className="text-xs md:text-base">Participants</p>
                    </div>
                    <div className="flex flex-col items-center will-change-contents flex-1">
                        <div>
                            <CountUp to={30} separator="," duration={0.1} className="text-2xl sm:text-3xl md:text-4xl font-bold" />
                            <span className="text-2xl sm:text-3xl md:text-4xl font-medium">{"+"}</span>
                        </div>
                        <p className="text-xs md:text-base">Events</p>
                    </div>
                    <div className="flex flex-col items-center will-change-contents flex-1">
                        <div>
                            <span className="text-2xl sm:text-3xl md:text-4xl font-medium">{"₹"}</span>
                            <CountUp to={500000} separator="," duration={0.1} className="text-2xl sm:text-3xl md:text-4xl font-bold" />
                            <span className="text-2xl sm:text-3xl md:text-4xl font-medium">{"+"}</span>
                        </div>
                        <p className="text-xs md:text-base">in Prizes</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-2 absolute bottom-10'>
                    <svg width="29" height="16.5" viewBox="0 0 58 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-bounce'>
                        <path d="M4 4L29 29L54 4" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-sm text-white/70'>Scroll</p>
                </div>
            </div>

            <SponsorsMarquee />

            <div className="mt-25 flex flex-col gap-8 px-8 sm:px-16 md:px-24" id="events">
                <div className="flex w-fit flex-col gap-8">
                    <div className="inline-flex items-center gap-0 bg-white/10 rounded-md">
                        {[1, 2].map((tab) => {
                            const active = selectedDay === tab;

                            return (
                                <div key={tab} className="relative">
                                    {active && (
                                        <motion.span layoutId="segment-indicator" className="absolute inset-0 rounded-md bg-primary" />
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => setSelectedDay(tab)}
                                        className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-transparent px-5 py-2 text-base font-medium outline-none transition-colors ${active
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {tab === 1 && "Day 1"}
                                        {tab === 2 && "Day 2"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <EventsSection day={selectedDay} />
            </div>

            <div className="mt-40 flex flex-col gap-10 items-center" id="gallery">
                <h3 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-bold">Glimpses of the Past</h3>
                <Gallery />
            </div>

            <div className="w-full flex flex-col items-center gap-3 mt-30">
                <h3 className="text-3xl sm:text-5xl font-bold text-center">Starting In</h3>

                <Countdown startDate={new Date("2026-11-02T18:30:00.000Z")} />

                <motion.div
                    initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 } }}
                    className="w-full flex justify-center mt-14"
                >
                    <Button className="w-full max-w-120 hover:font-bold" onClick={() => { setIsRegModalOpen(true) }}>Register Now</Button>
                </motion.div>
            </div>

            <Footer />

            <RegModal isExpanded={isRegModalOpen} onClose={closeRegModal} />

            <ToastContainer />
        </div>
    );
}