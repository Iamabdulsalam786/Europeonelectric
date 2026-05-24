import React from 'react'
import Hero from './components/Hero'
import TestimonialArea from './components/Testimonial'
import MainLayout from '@/components/layout/MainLayout'

const Testimonial = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <TestimonialArea />
      </MainLayout>
    </>
  )
}

export default Testimonial

export { Head } from '@/components/PageMeta'
