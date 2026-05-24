import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import About from './components/About'
import Blog from './components/Blog'
import Slider from './components/BrandIcon'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Service from './components/Service'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Work from './components/Work'

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
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
      </MainLayout>
    </>
  )
}

export default Home

export { Head } from '@/components/PageMeta'

