"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const images = [
  '/image1.png', '/image2.png', '/image3.png', '/image4.png',
  '/image5.png', '/image6.png', '/image7.png', '/image8.png',
  '/image9.png', '/image10.png', '/image11.png', '/image12.png',
  '/image13.png', '/image14.png', '/image15.png', '/image16.png'
]

const Gallery = () => {
  const [page, setPage] = useState(0) // 0 = first 8, 1 = next 8

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % Math.ceil(images.length / 8))
    }, 5000) // Change page every 5s

    return () => clearInterval(interval) // Clean up
  }, [])

  // Split images into groups of 8
  const currentImages = images.slice(page * 8, page * 8 + 8)

  return (
    <div className='flex flex-col items-center justify-center p-3'>
      <h1 className='text-4xl md:text-6xl font-bold mb-10 text-center text-gray-800'>Glimpses</h1>
      <div className="relative w-full md:w-[80%] overflow-hidden">
        {/* Container for sliding */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {/* Each Page */}
          {Array.from({ length: Math.ceil(images.length / 8) }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-w-full"
            >
              {images.slice(i * 8, i * 8 + 8).map((src, index) => (
                <div key={index} className="relative w-full aspect-[3/4] rounded-lg">
                  <Image
                    src={src}
                    alt={`Gallery Image ${i * 8 + index + 1}`}
                    fill
                    className="object-cover rounded-lg hover:shadow-lg hover:shadow-gray-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
