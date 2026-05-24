import BackToTop from '@/components/BackToTop'
import Loader from '@/components/Loader'
import WhatsAppButton from '@/components/WhatsAppButton'
import SiteFooter from '@/components/layout/SiteFooter'
import CTA from '@/pages/components/CTA'
import { ChildrenType } from '@/types/component-props'
import Aos from 'aos'
import React, { Suspense, useEffect } from 'react'
import HomeHeader from './HomeHeader'

const HomeLayout = ({ children }: ChildrenType) => {
  useEffect(() => {
    Aos.init({ duration: 700, once: true, offset: 80 })
    const t1 = setTimeout(() => Aos.refresh(), 100)
    const t2 = setTimeout(() => Aos.refreshHard(), 400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  /* When the home page mounts with a #hash in the URL (e.g. arriving from
     /about with a link to /#contact), Gatsby's client-side routing skips
     the browser's native hash-scroll. We re-implement it here so anchor
     navigation works from any page, while also accounting for the fixed
     glass header height. */
  useEffect(() => {
    if (typeof window === 'undefined') return
    const scrollToHash = () => {
      const hash = window.location.hash?.slice(1)
      if (!hash) return
      const el = document.getElementById(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
      }
    }
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return (
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
  )
}

export default HomeLayout
