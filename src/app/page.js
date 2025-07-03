import React from 'react'
import './globals.css'
import Header from './_components/Header'
import Home from './_components/Home'
import About from './_components/About'
import Attractions from './_components/Attractions'
import Direction from './_components/Direction'
import Highlights from './_components/Highlights'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Home />
      <About />
      <Attractions />
      <Direction />
      <Highlights />
    </div>
  )
}

export default page