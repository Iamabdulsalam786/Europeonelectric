import { ChildrenType } from '@/types/component-props'
import Aos from 'aos'
import React, { Suspense, useEffect } from 'react'
import BackToTop from '../BackToTop'
import Loader from '../Loader'

const SingleLayout = ({ children }: ChildrenType) => {
  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <>
      <Suspense fallback={<Loader />}>
        {children}
        <BackToTop />
      </Suspense>
    </>
  )
}

export default SingleLayout

export { Head } from '@/components/PageMeta'
