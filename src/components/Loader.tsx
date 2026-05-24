import brand from '@/config/brand'
import React from 'react'

type PropsType = {
  icon?: string
  classname?: string
}

const Loader = ({ icon, classname }: PropsType) => {
  return (
    <div className={`preloader ${classname ?? ''}`}>
      <div className="loading-container">
        <div className="loading" />
        <div id="loading-icon">
          <img src={icon ?? brand.logos.icon} alt={brand.name} className="site-brand-logo" />
        </div>
      </div>
    </div>
  )
}

export default Loader
