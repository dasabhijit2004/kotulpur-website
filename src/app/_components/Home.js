import React from 'react'

const Home = () => {
  return (
    <>
        <div className='banner w-full min-h-screen bg-black text-white flex items-center justify-center p-10' >
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4 text-center'>Welcome to Kotulpur</h1>
                <p className='text-lg md:text-xl mb-8 text-center'>Discover the beauty and culture of our town.</p>
                <a href="/about" className='bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors'>
                    Explore Now
                </a>
            </div>
        </div>
    </>
  )
}

export default Home