import brand from '@/config/brand'
import React from 'react'

type PropsType = {
  title?: string
  icon?: string
}

export const Head = ({ title, icon }: PropsType) => {
  return (
    <>
      <title>{title ?? `${brand.name} | ${brand.tagline}`}</title>
      <link rel="icon" href={icon ?? brand.logos.icon} type="image/jpeg" />
    </>
  )
}
