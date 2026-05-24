import brand from '@/config/brand'
import useToggle from '@/hooks/useToggle'
import { Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { Col, Container } from 'react-bootstrap'
import {
  FaArrowRight,
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhoneVolume,
  FaXmark,
  FaYoutube,
} from 'react-icons/fa6'
import SingleMenu from './SingleMenu'

const SingleMobileMenu = () => {
  const { isOpen, toggle } = useToggle()

  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggle()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, toggle])

  return (
    <>
      <div className="mobile-header mobile-haeder4 d-block d-lg-none">
        <Container fluid>
          <Col xs={12}>
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link to="/">
                  <img src={brand.logos.primary} alt="" />
                </Link>
              </div>
              <div onClick={toggle} className="mobile-nav-icon dots-menu">
                <FaBars className="fa-solid fa-bars" />
              </div>
            </div>
          </Col>
        </Container>
      </div>

      <div ref={sidebarRef} className={`mobile-sidebar mobile-sidebar4 ${isOpen ? 'mobile-menu-active' : ''}`}>
        <div className="logosicon-area">
          <div className="logos">
            <img src={brand.logos.primary} alt="" />
          </div>
          <div onClick={toggle} className="menu-close">
            <FaXmark className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <SingleMenu />
          <div className="allmobilesection">
            <Link to="/contact" className="header-btn7">
              Get Started <FaArrowRight className="fa-solid" />
            </Link>
            <div className="single-footer">
              <h3>Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaPhoneVolume className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="contact-info-text">
                    <Link to="tel:+3(924)4596512">+3(924)4596512</Link>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaEnvelope className="fa-solid fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <Link to="mailto:info@example.com">info@example.com</Link>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Our Location</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <FaLocationDot className="fa-solid fa-location-dot" />
                    </div>
                    <div className="contact-info-text">
                      <Link to="mailto:info@example.com">
                        55 East Birchwood Ave.Brooklyn, <br /> New York 11201,United States
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li>
                        <Link to="#">
                          <FaFacebookF className="fa-brands" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaInstagram className="fa-brands" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaLinkedinIn className="fa-brands" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaYoutube className="fa-brands" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMobileMenu
