import SingleLayout from '@/components/layout/SingleLayout'
import React from 'react'
import About from './components/About'
import Blog from './components/Blog'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import Team from './components/Team'
import Testimonials from './components/Testimonials'

const Home4 = () => {
  return (
    <>
      <SingleLayout>
        <div className="homepage3-body tg-heading-subheading animation-style3">
          <Header />
          <Hero />
          <About />
          <Service />
          <CaseStudies />
          <Testimonials />
          <Team />
          <Contact />
          <Blog />
          <Footer />
        </div>
      </SingleLayout>
    </>
  )
}

export default Home4

export { Head } from '@/components/PageMeta'
