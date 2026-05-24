import React from 'react'
import AboutPage from './components/About'
import Blog from './components/Blog'
import BrandIcon from './components/BrandIcon'
import Hero from './components/Hero'
import OurMission from './components/OurMission'
import Service from './components/Service'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import MainLayout from '@/components/layout/MainLayout'

const About = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutPage />
        <OurMission />
        <Service />
        <Testimonials />
        <Team />
        <BrandIcon />
        <Blog />
      </MainLayout>
    </>
  )
}

export default About

export { Head } from '@/components/PageMeta'
