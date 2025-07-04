import React from 'react'
import './globals.css'
import Header from './_components/Header'
import Home from './_components/Home'
import About from './_components/About'
import Attractions from './_components/Attractions'
import Direction from './_components/Direction'
import Highlights from './_components/Highlights'
// import Testimonials from './_components/Testimonials'
import Gallery from './_components/Gallery'
import Footer from './_components/Footer'

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="attractions">
        <Attractions />
      </section>

      <section id="direction">
        <Direction />
      </section>

      <section id="highlights">
        <Highlights />
      </section>

      {/* <section id="testimonials">
        <Testimonials />
      </section> */}

      <section id="gallery">
        <Gallery />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default Page
