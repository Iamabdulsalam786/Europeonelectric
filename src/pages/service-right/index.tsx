import React from 'react'
import Blog from './components/Blog'
import Hero from './components/Hero'
import ServiceArea from './components/Service'
import MainLayout from '@/components/layout/MainLayout'

const ServiceLeft = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <ServiceArea />
        <Blog />
      </MainLayout>
    </>
  )
}

export default ServiceLeft
export { Head } from '@/components/PageMeta'
