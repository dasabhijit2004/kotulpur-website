import React from 'react'
import { FaStar } from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";


const Testimonials = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-6xl font-bold mb-10 text-center text-gray-800'>What People Say</h1>
                <div className='cards w-[80%] flex justify-between items-center'>
                    <div className='card w-[32%] flex flex-col gap-3 bg-gray-200 p-2 rounded-2xl'>
                        <div className='head flex gap-4 items-center'>
                            <IoPerson className='bg-gray-800 text-white p-1 w-8 h-8 rounded-full' />
                            <div className='flex flex-col'>
                                <p className='text-lg font-semibold'>Amitabha Gupta</p>
                                <p>Blogger</p>
                            </div>
                        </div>
                        <p>"It was an enriching experience to some of the not so well known Temple Town of Bankura and we did not mind missing India’s Cricket World cup triumph for it."</p>
                        <div className='rating flex'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                    <div className='card w-[32%] flex flex-col gap-3 bg-gray-200 p-2 rounded-2xl'>
                        <div className='head flex gap-4 items-center'>
                            <IoPerson className='bg-gray-800 text-white p-1 w-8 h-8 rounded-full' />
                            <div className='flex flex-col'>
                                <p className='text-lg font-semibold'>Amitabha Gupta</p>
                                <p>Blogger</p>
                            </div>
                        </div>
                        <p>"It was an enriching experience to some of the not so well known Temple Town of Bankura and we did not mind missing India’s Cricket World cup triumph for it."</p>
                        <div className='rating flex'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                    <div className='card w-[32%] flex flex-col gap-3 bg-gray-200 p-2 rounded-2xl'>
                        <div className='head flex gap-4 items-center'>
                            <IoPerson className='bg-gray-800 text-white p-1 w-8 h-8 rounded-full' />
                            <div className='flex flex-col'>
                                <p className='text-lg font-semibold'>Amitabha Gupta</p>
                                <p>Blogger</p>
                            </div>
                        </div>
                        <p>"It was an enriching experience to some of the not so well known Temple Town of Bankura and we did not mind missing India’s Cricket World cup triumph for it."</p>
                        <div className='rating flex'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials