import logoIcon from '@/assets/img/logo/logo3.jpeg'
import logoDark from '@/assets/img/logo/logo2.jpeg'
import logoPrimary from '@/assets/img/logo/Logo1.jpeg'

export const brand = {
  name: 'European Electric LLC',
  shortName: 'European Electric',
  tagline: 'Professional Electrical Services You Can Trust',
  email: 'info@europeanelectric.com',
  phone: '+1 (555) 123-4567',
  // WhatsApp number in international format, digits only (no +, spaces, or dashes).
  // Used by the floating WhatsApp button. Example: '15551234567'
  whatsapp: '15551234567',
  // Pre-filled message that opens when a visitor taps the WhatsApp button.
  whatsappMessage: "Hi! I'd like to get a free estimate for electrical work.",
  address: '8502 Preston Rd. Inglewood, Maine 98380',
  logos: {
    primary: logoPrimary,
    dark: logoDark,
    icon: logoIcon,
  },
} as const

export default brand
