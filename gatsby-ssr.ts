// Polyfill for scrollY during SSR
if (typeof window === 'undefined') {
  ;(global as any).scrollY = 0
  ;(global as any).scrollX = 0
  ;(global as any).pageYOffset = 0
  ;(global as any).pageXOffset = 0
}

import 'bootstrap/dist/css/bootstrap.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import 'slick-carousel/slick/slick.css'
import 'aos/dist/aos.css'
import 'nice-select2/dist/css/nice-select2.css'

import '@/assets/scss/main.scss'