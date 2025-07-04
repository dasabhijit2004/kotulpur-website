import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="bg-gray-800 text-white w-full flex items-center justify-center p-6">
                <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-between items-start gap-6">
                    {/* Explore Kotulpur */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold">Explore Kotulpur</h4>
                        <p className="text-sm">
                            Discover the beauty and culture of Kotulpur, West Bengal
                        </p>
                        <div className="flex gap-3 mt-2">
                            <Link href="/">
                                <FaFacebook className="text-xl hover:text-blue-500 transition-colors" />
                            </Link>
                            <Link href="/">
                                <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <div className="flex flex-col gap-1 text-sm">
                            <Link href="#home" className="hover:text-blue-500">Home</Link>
                            <Link href="#about" className="hover:text-blue-500">About</Link>
                            <Link href="#attractions" className="hover:text-blue-500">Attractions</Link>
                            <Link href="#direction" className="hover:text-blue-500">How to Reach</Link>
                            <Link href="#gallery" className="hover:text-blue-500">Gallery</Link>
                        </div>
                    </div>

                    {/* Nearby Destinations */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold">Nearby Destinations</h4>
                        <div className="flex flex-col gap-1 text-sm">
                            <p>Bishnupur</p>
                            <p>Joyrambati</p>
                            <p>Kamarpukur</p>
                            <p>Susunia Hills</p>
                            <p>Joypur Forest</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="flex flex-wrap text-center justify-center items-center bg-gray-900 text-gray-300 text-sm py-2 px-4">
                &copy; {new Date().getFullYear()}
                &nbsp;
                <Link
                    href="https://abhijit-das.vercel.app"
                    className="text-blue-400 hover:underline ml-1"
                >
                    Abhijit Das
                </Link>
                . All rights reserved.
            </p>
        </>
    )
}

export default Footer
