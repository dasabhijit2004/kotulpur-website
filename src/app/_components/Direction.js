import React from 'react'
import { FaBus, FaCar, FaClock, FaTrain } from 'react-icons/fa';
import { FaTrainSubway } from "react-icons/fa6";

const Direction = () => {
    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <div className="w-full md:max-w-[80%] min-h-screen flex items-center justify-center p-6 md:p-10 flex-col gap-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center text-gray-800 mt-20">
                        How to Reach
                    </h1>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10'>
                        <div className='card w-full md:w-1/4 bg-gray-200 p-6 text-center flex flex-col justify-center items-center gap-5 rounded-2xl hover:shadow-gray-500 hover:shadow-lg transform transition-all duration-300'>
                            <FaTrain className='text-white bg-gray-800 p-3 rounded-full w-12 h-12' />
                            <div className='description'>
                                Arambag and Bishnupur are two nearest railway station on the South Eastern Railway line. Regular trains connect from Howrah, Midnapore, and other major stations.
                            </div>
                            <div className='timing'>
                                <p className='flex gap-2 items-center justify-center'><FaClock />3 hours from Howrah</p>
                                <p className='flex gap-2 items-center justify-center'><FaTrainSubway />Multiple trains daily</p>
                            </div>
                        </div>
                        <div className='card w-full md:w-1/4 bg-gray-200 p-6 text-center flex flex-col justify-center items-center gap-5 rounded-2xl hover:shadow-gray-500 hover:shadow-lg transform transition-all duration-300'>
                            <FaBus className='text-white bg-gray-800 p-3 rounded-full w-12 h-12' />
                            <div className='description'>
                                State transport and private buses operate regular services from Kolkata, Bankura, and nearby districts to Kotulpur. The bus stand is centrally located in town for services.
                            </div>
                            <div className='timing'>
                                <p className='flex gap-2 items-center justify-center'><FaClock />4 hours from Kolkata</p>
                                <p className='flex gap-2 items-center justify-center'><FaTrainSubway />Multiple trains daily</p>
                            </div>
                        </div>
                        <div className='card w-full md:w-1/4 bg-gray-200 p-6 text-center flex flex-col justify-center items-center gap-5 rounded-2xl hover:shadow-gray-500 hover:shadow-lg transform transition-all duration-300'>
                            <FaCar className='text-white bg-gray-800 p-3 rounded-full w-12 h-12' />
                            <div className='description'>
                                Well-connected by road networks, Kotulpur is accessible via private vehicles. The roads are in good condition, making for a comfortable journey through rural Bengal.
                            </div>
                            <div className='timing'>
                                <p className='flex gap-2 items-center justify-center'><FaClock />120 KM from Kolkata</p>
                                <p className='flex gap-2 items-center justify-center'><FaTrainSubway />Multiple trains daily</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[400px] rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27924.86328783549!2d87.5748107122794!3d23.012358317548237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f82194141cffef%3A0xa08884ae48d27b67!2sKotulpur%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1751518380921!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Direction