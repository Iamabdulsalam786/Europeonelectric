import React from 'react'
import Blog from './components/Blog'
import Hero from './components/Hero'
import MainLayout from '@/components/layout/MainLayout'

const BlogSideBar = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Blog />
      </MainLayout>
    </>
  )
}

export default BlogSideBar

export { Head } from '@/components/PageMeta'
