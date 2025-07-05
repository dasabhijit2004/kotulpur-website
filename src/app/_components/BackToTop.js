'use client'

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {

    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / docHeight) * 100;

        setScrollPercentage(scrollPercentage);

        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <>
            <div >
                {isVisible && (
                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300"
                        aria-label="back to top"
                    >
                        <svg
                            className="absolute top-0 left-0 w-full h-full"
                            width="60"
                            height="60"
                            viewBox="0 0 120 120"
                        >
                            <circle
                                cx="60"
                                cy="60"
                                r="54"
                                stroke="black"
                                strokeWidth="8"
                                fill="transparent"
                            />
                            <circle
                                cx="60"
                                cy="60"
                                r="54"
                                stroke="lightblue"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={339.292}
                                strokeDashoffset={
                                    339.292 - (scrollPercentage / 100) * 339.292
                                }
                                strokeLinecap="round"
                                style={{ transition: "stroke-dashoffset 0.2s linear" }}
                            />
                        </svg>
                        <FaArrowUp className="relative z-10 w-5 h-5" />
                    </button>
                )}
            </div>
        </>
    )
}

export default BackToTop