import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Detail from './components/Detail'
import Hero from './components/Hero'

const Blog = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Detail />
      </MainLayout>
    </>
  )
}

export default Blog

export { Head } from '@/components/PageMeta'
