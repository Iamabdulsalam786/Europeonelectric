import brand from '@/config/brand'
import React, { useEffect, useRef, useState } from 'react'
import { FaWhatsapp, FaXmark } from 'react-icons/fa6'

const STORAGE_KEY = 'we-dismissed-whatsapp-prompt'

const WhatsAppButton = () => {
  const number = brand.whatsapp?.replace(/\D/g, '')
  const [showTooltip, setShowTooltip] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const popTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY) === '1'
    if (dismissed) return

    popTimer.current = setTimeout(() => setShowTooltip(true), 3500)
    return () => {
      if (popTimer.current) clearTimeout(popTimer.current)
    }
  }, [])

  const dismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTooltip(false)
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(STORAGE_KEY, '1')
    }
  }

  const handleClick = () => {
    setShowBadge(false)
    setShowTooltip(false)
  }

  if (!number) return null

  const url = `https://wa.me/${number}?text=${encodeURIComponent(brand.whatsappMessage ?? '')}`

  return (
    <div className={`whatsapp-float-wrap ${showTooltip ? 'is-prompting' : ''}`}>
      {showTooltip && (
        <div className="whatsapp-float__tooltip" role="dialog" aria-label="WhatsApp chat prompt">
          <button
            type="button"
            className="whatsapp-float__tooltip-close"
            onClick={dismissTooltip}
            aria-label="Dismiss WhatsApp prompt">
            <FaXmark />
          </button>
          <strong>Need an electrician?</strong>
          <span>Chat with {brand.shortName ?? brand.name} on WhatsApp — we usually reply in minutes.</span>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${brand.name} on WhatsApp`}
        className="whatsapp-float"
        title="Chat on WhatsApp"
        onClick={handleClick}>
        <span className="whatsapp-float__ring whatsapp-float__ring--1" aria-hidden="true" />
        <span className="whatsapp-float__ring whatsapp-float__ring--2" aria-hidden="true" />
        <span className="whatsapp-float__icon">
          <FaWhatsapp />
        </span>
        {showBadge && (
          <span className="whatsapp-float__badge" aria-hidden="true">
            1
          </span>
        )}
      </a>
    </div>
  )
}

export default WhatsAppButton
