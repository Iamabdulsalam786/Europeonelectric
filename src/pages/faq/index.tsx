import React from 'react'
import FaqArea from './components/Faq'
import Hero from './components/Hero'
import MainLayout from '@/components/layout/MainLayout'

const Faqs = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <FaqArea />
      </MainLayout>
    </>
  )
}

export default Faqs

export { Head } from '@/components/PageMeta'
