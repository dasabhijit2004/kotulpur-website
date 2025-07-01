import React from 'react'
import { FaBus, FaTrain } from 'react-icons/fa'

const Direction = () => {
    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center p-6 md:p-10 flex-col bg-gray-50">
                <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center text-gray-800">
                    How to Reach
                </h1>
                <div className='card w-1/4'>
                    <div className='icon p-4 bg-gray-900 flex items-center justify-center rounded-full'>
                        <FaTrain className='text-white'/>
                    </div>
                    <div className='description'>
                        Kotulpur has its own railway station on the South Eastern Railway line. Regular trains connect from Howrah, Midnapore, and other major stations in West Bengal.
                    </div>
                    <div className='timing'>
                        <p>3 hours from Howrah</p>
                        <p>Multiple trains daily</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Direction