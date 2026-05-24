import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Blog from './components/Blog'
import Hero from './components/Hero'
import ServiceArea from './components/Service'

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
