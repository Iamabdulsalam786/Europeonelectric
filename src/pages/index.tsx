import ServicesGrid from '@/pages/home-1/components/Service'
import About from '@/pages/home-2/components/About'
import CaseStudies from '@/pages/home-2/components/CaseStudies'
import Contact from '@/pages/home-2/components/Contact'
// import FAQ from '@/pages/home-2/components/FAQ' // temporarily hidden; re-enable to show FAQ section
// import LatestNews from '@/pages/home-2/components/LatestNews' // temporarily hidden; re-enable to show "Our Latest News"
import OurApproach from '@/pages/home-2/components/Service'
import Team from '@/pages/home-2/components/Team'
import Testimonials from '@/pages/home-2/components/Testimonials'
import HomeHero from '@/pages/home/HomeHero'
import HomeLayout from '@/pages/home/HomeLayout'
import React from 'react'

const Home = () => {
  return (
    <HomeLayout>
      <section id="home">
        <HomeHero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <ServicesGrid />
      </section>
      <section id="approach">
        <OurApproach />
      </section>
      <section id="projects">
        <CaseStudies />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="team">
        <Team />
      </section>
      {/*
      <section id="faq">
        <FAQ />
      </section>
      <section id="blog">
        <LatestNews />
      </section>
      */}
      <section id="contact">
        <Contact />
      </section>
    </HomeLayout>
  )
}

export default Home

export { Head } from '@/components/PageMeta'
