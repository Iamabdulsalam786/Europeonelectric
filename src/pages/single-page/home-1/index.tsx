import SingleLayout from '@/components/layout/SingleLayout'
import React, { useEffect } from 'react'
import About from './components/About'
import Blog from './components/Blog'
import Slider from './components/BrandIcon'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Service from './components/Service'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Work from './components/Work'
import Aos from 'aos'

const Home = () => {
  useEffect(() => {
      Aos.init()
    }, [])
    
  return (
    <>
      <SingleLayout>
        <div className="homepage1-body tg-heading-subheading animation-style3">
          <Header />
          <Hero />
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            className="scrollspy-example bg-body-tertiary rounded-2"
            tabIndex={0}>
            <About />
            <Service />
            <Work />
            <Testimonials />
            <Team />
            <Faq />
            <Contact />
            <Pricing />
            <Slider />
            <Blog />
            <CTA />
            <Footer />
          </div>
        </div>
      </SingleLayout>
    </>
  )
}

export default Home

export { Head } from '@/components/PageMeta'
