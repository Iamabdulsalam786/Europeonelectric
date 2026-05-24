import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Blog from './components/Blog'
import Detail from './components/Detail'
import Hero from './components/Hero'

const Blogright = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Detail />
        <Blog />
      </MainLayout>
    </>
  )
}

export default Blogright

export { Head } from '@/components/PageMeta'
