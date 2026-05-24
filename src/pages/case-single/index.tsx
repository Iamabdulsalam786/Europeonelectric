import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Blog from './components/Blog'
import Hero from './components/Hero'
import Service from './components/Service'

const CaseLeft = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Service />
        <Blog />
      </MainLayout>
    </>
  )
}

export default CaseLeft

export { Head } from '@/components/PageMeta'
