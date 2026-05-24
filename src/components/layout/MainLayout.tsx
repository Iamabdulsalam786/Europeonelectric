import { ChildrenType } from '@/types/component-props'
import HomeHeader from '@/pages/home/HomeHeader'
import Aos from 'aos'
import React, { Suspense, useEffect } from 'react'
import BackToTop from '../BackToTop'
import Loader from '../Loader'
import WhatsAppButton from '../WhatsAppButton'
import SiteFooter from './SiteFooter'
import CTA from '@/pages/components/CTA'

const MainLayout = ({ children }: ChildrenType) => {
  useEffect(() => {
    Aos.init({ duration: 700, once: true, offset: 80 })
    const t1 = setTimeout(() => Aos.refresh(), 100)
    const t2 = setTimeout(() => Aos.refreshHard(), 400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="homepage1-body tg-heading-subheading animation-style3">
          <HomeHeader />
          {children}
        </div>
        <CTA />
        <SiteFooter />
        <BackToTop />
        <WhatsAppButton />
      </Suspense>
    </>
  )
}

export default MainLayout

export { Head } from '@/components/PageMeta'
