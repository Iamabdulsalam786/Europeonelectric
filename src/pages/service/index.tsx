import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Hero from './components/Hero'
import ServiceArea from './components/Service'

const Service = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <ServiceArea />
      </MainLayout>
    </>
  )
}

export default Service

export { Head } from '@/components/PageMeta'
