import React from 'react'
import Blog from './components/Blog'
import Hero from './components/Hero'
import PricingArea from './components/Pricing'
import MainLayout from '@/components/layout/MainLayout'

const Pricing = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <PricingArea />
        <Blog />
      </MainLayout>
    </>
  )
}

export default Pricing

export { Head } from '@/components/PageMeta'
