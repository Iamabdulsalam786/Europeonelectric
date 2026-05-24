import React from 'react'
import About from './components/About'
import Blog from './components/Blog'
import CTA from './components/CTA'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import SingleLayout from '@/components/layout/SingleLayout'

const Home = () => {
  return (
    <>
      <SingleLayout>
        <div className="homepage4-body tg-heading-subheading animation-style3">
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
            <CaseStudies />
            <Team />
            <Testimonials />
            <FAQ />
            <Contact />
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

