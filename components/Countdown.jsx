import React, { useEffect, useState } from 'react'

export default function Countdown({ startDate }) {

    const [days, setDays] = useState("00")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")

    useEffect(() => {
        const x = setInterval(() => {
            const now = new Date().getTime()
            var distance = startDate.getTime() - now;

            if (distance < 0) {
                distance = 0
            }

            setDays(String(Math.floor(distance / (86400000))).padStart(2, '0'))
            setHours(String(Math.floor((distance % (86400000)) / (3600000))).padStart(2, '0'))
            setMinutes(String(Math.floor((distance % (3600000)) / (60000))).padStart(2, '0'))
            setSeconds(String(Math.floor((distance % (60000)) / 1000)).padStart(2, '0'))

            if (distance == 0) {
                clearInterval(x)
            }
        }, 1000)
    }, [startDate])

    return (
        <div className="flex items-center justify-center">
            <ul className="flex gap-7 sm:gap-14 list-none pt-5 sm:pt-10">
                <li className="flex flex-col items-center uppercase gap-1 sm:gap-0">
                    <span className="text-5xl sm:text-8xl font-bold tabular-nums tracking-tight">{days}</span>
                    <span className="text-xs sm:text-lg text-white/60">days</span>
                </li>
                <li className="flex flex-col items-center uppercase gap-1 sm:gap-0">
                    <span className="text-5xl sm:text-8xl font-bold tabular-nums tracking-tight">{hours}</span>
                    <span className="text-xs sm:text-lg text-white/60">Hours</span>
                </li>
                <li className="flex flex-col items-center uppercase gap-1 sm:gap-0">
                    <span className="text-5xl sm:text-8xl font-bold tabular-nums tracking-tight">{minutes}</span>
                    <span className="text-xs sm:text-lg text-white/60">Minutes</span>
                </li>
                <li className="flex flex-col items-center uppercase gap-1 sm:gap-0">
                    <span className="text-5xl sm:text-8xl font-bold tabular-nums tracking-tight">{seconds}</span>
                    <span className="text-xs sm:text-lg text-white/60">Seconds</span>
                </li>
            </ul>
        </div>
    )
}
