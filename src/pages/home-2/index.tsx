import Loader from '@/components/Loader'
import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

const Home2Redirect = () => {
  useEffect(() => {
    navigate('/', { replace: true })
  }, [])

  return <Loader />
}

export default Home2Redirect

export { Head } from '@/components/PageMeta'
