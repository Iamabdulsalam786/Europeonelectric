import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Blog from './components/Blog'
import Details from './components/Detail'
import Hero from './components/Hero'

const BlogLeft = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Details />
        <Blog />
      </MainLayout>
    </>
  )
}

export default BlogLeft

export { Head } from '@/components/PageMeta'
