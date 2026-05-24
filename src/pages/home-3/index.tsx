import BaseLayout from '@/components/layout/BaseLayout'
import React from 'react'
import About from './components/About'
import Blog from './components/Blog'
import CaseStudy from './components/CaseStudy'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import Team from './components/Team'
import Testimonials from './components/Testimonials'

const Home = () => {
  return (
    <>
      <BaseLayout>
        <div className="homepage2-body tg-heading-subheading animation-style3">
          <Header />
          <Hero />
          <About />
          <Service />
          <CaseStudy />
          <Testimonials />
          <Team />
          <Contact />
          <Faq />
          <Blog />
          <Footer />
        </div>
      </BaseLayout>
    </>
  )
}

export default Home

export { Head } from '@/components/PageMeta'
