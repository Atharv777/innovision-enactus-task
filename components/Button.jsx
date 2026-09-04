import { useRouter } from 'next/navigation';
import React from 'react';

export default function Button({ onClick, href, className, ...props }) {

    const router = useRouter();

    return (
        <button onClick={onClick ? onClick : () => { router.push(href) }} className={`text-xs sm:text-sm font-semibold bg-white/90 hover:bg-white transition-all duration-250 text-black px-4 py-2 sm:py-3 rounded-sm relative cursor-pointer buttonCorners ${className}`} {...props}>
            {props.children}
        </button>
    )
}
