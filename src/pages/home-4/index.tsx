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
import BaseLayout from '@/components/layout/BaseLayout'

const Home4 = () => {
  return (
    <>
      <BaseLayout>
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
      </BaseLayout>
    </>
  )
}

export default Home4

export { Head } from '@/components/PageMeta'

