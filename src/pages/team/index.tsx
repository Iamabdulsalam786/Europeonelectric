import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import Hero from './components/Hero'
import TeamArea from './components/Team'

const Team = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <TeamArea />
      </MainLayout>
    </>
  )
}

export default Team

export { Head } from '@/components/PageMeta'

