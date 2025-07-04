"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="bg-white text-black p-4 fixed top-0 w-full z-50 shadow">
                <div className="flex items-center justify-between">
                    <Link href={'/'} className="text-2xl font-bold">Kotulpur</Link>

                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            className="text-black focus:outline-none z-50 relative"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label="Toggle Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation Menu */}
                    <ul className="hidden md:flex md:flex-row md:items-center md:space-x-6">
                        <li><Link href="#home" className="hover:text-blue-600 transition-colors">Home</Link></li>
                        <li><Link href="#about" className="hover:text-blue-600 transition-colors">About</Link></li>
                        <li><Link href="#attractions" className="hover:text-blue-600 transition-colors">Attractions</Link></li>
                        <li><Link href="#direction" className="hover:text-blue-600 transition-colors">Directions</Link></li>
                        <li><Link href="#highlights" className="hover:text-blue-600 transition-colors">Highlights</Link></li>
                        {/* <li><Link href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link></li> */}
                        <li><Link href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</Link></li>
                    </ul>
                </div>
            </header>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-transparent bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close button inside sidebar */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-black hover:text-blue-600 transition-colors"
                        aria-label="Close Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="px-6 py-4">
                    <ul className="flex flex-col space-y-6">
                        <li>
                            <Link 
                                href="#home" 
                                className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="#about" 
                                className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="#attractions" 
                                className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Attractions
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="#direction" 
                                className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Directions
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="#highlights" 
                                className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Highlights
                            </Link>
                        </li>
                        {/* <li>
                            <Link 
                                href="#testimonials" 
                                className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Testimonials
                            </Link>
                        </li> */}
                        <li>
                            <Link 
                                href="#gallery" 
                                className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;