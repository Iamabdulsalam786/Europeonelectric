import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Blog from './components/Blog'
import Hero from './components/Hero'

const Case = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Blog />
      </MainLayout>
    </>
  )
}

export default Case

export { Head } from '@/components/PageMeta'
