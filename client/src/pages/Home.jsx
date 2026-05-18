import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Industries from '../components/Industreis'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="industries">
        <Industries />
      </section>

      <section id="whyus">
        <WhyUs />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default Home
