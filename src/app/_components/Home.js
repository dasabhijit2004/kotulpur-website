import React from 'react'

const Home = () => {
  return (
    <>
      <div
        className="relative w-full min-h-screen flex items-center justify-center p-10 bg-[url('/hero.png')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Welcome to Kotulpur
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center">
            Discover the beauty and culture of our town.
          </p>
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Now
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
