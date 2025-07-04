import React from 'react'
import { FaGraduationCap, FaMusic, FaPaintBrush } from 'react-icons/fa'
import { GiKnifeFork } from "react-icons/gi";

const Highlights = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-6xl font-bold mb-10 text-center text-gray-800 mt-20'>Local Highlights</h1>
                <div className='cards flex flex-col md:flex-row w-full md:w-[80%] justify-between items-center py-8 gap-4'>
                    <div className='card w-full md:w-[20%] p-2 flex justify-center items-center flex-col gap-2'>
                        <div className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <FaMusic className="text-xl" />
                        </div>
                        <h1 className='text-center font-semibold'>Festivals</h1>
                        <p className='text-center text-gray-600'>Durga Puja, Kali Puja, and local cultural celebrations</p>
                    </div>
                    <div className='card w-full md:w-[20%] p-2 flex justify-center items-center flex-col gap-2'>
                        <div className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <GiKnifeFork className="text-xl" />
                        </div>
                        <h1 className='text-center font-semibold'>Cuisine</h1>
                        <p className='text-center text-gray-600'>Traditional Bengali dishes and local delicacies</p>
                    </div>
                    <div className='card w-full md:w-[20%] p-2 flex justify-center items-center flex-col gap-2'>
                        <div className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <FaPaintBrush className="text-xl" />
                        </div>
                        <h1 className='text-center font-semibold'>Crafts</h1>
                        <p className='text-center text-gray-600'>Traditional handicrafts and terracotta work</p>
                    </div>
                    <div className='card w-full md:w-[20%] p-2 flex justify-center items-center flex-col gap-2'>
                        <div className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <FaGraduationCap className="text-xl" />
                        </div>
                        <h1 className='text-center font-semibold'>Education</h1>
                        <p className='text-center text-gray-600'>Schools, colleges, and educational institutions</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Highlights