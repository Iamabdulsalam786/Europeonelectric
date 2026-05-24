import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Blog from './components/Blog'
import Hero from './components/Hero'
import Service from './components/Service'

const Blogright = () => {
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

export default Blogright

export { Head } from '@/components/PageMeta'
