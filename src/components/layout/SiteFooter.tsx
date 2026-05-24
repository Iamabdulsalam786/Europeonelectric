import brand from '@/config/brand'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaYoutube } from 'react-icons/fa6'

const SiteFooter = () => {
  return (
    <div className="footer4-section-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="footer-logo-content sp4">
              <Row>
                <Col lg={3} md={6}>
                  <div className="logo-content">
                    <img src={brand.logos.dark} alt={brand.name} className="site-brand-logo site-brand-logo--footer" />
                    <p>
                      {brand.name} delivers reliable residential and commercial electrical services with safety, precision, and
                      professional craftsmanship you can count on.
                    </p>
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
                </Col>
                <Col lg={1} className="d-lg-block d-none" />
                <Col lg={2} md={6}>
                  <div className="space30 d-block d-md-none" />
                  <div className="service-heading">
                    <h2>Electrical Services</h2>
                    <ul>
                      <li>
                        <Link to="/service">Panel Upgrades</Link>
                      </li>
                      <li>
                        <Link to="/service">Wiring &amp; Rewiring</Link>
                      </li>
                      <li>
                        <Link to="/service">Lighting Installation</Link>
                      </li>
                      <li>
                        <Link to="/service">Emergency Repairs</Link>
                      </li>
                      <li>
                        <Link to="/service">Commercial Electrical</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={1} className="d-lg-block d-none" />
                <Col lg={2} md={6}>
                  <div className="space30 d-md-block d-lg-none" />
                  <div className="service-heading">
                    <h2>Quick Links</h2>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/service">Services</Link>
                      </li>
                      <li>
                        <Link to="/testimonials">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="space30 d-md-block d-lg-none" />
                  <div className="service-heading contact">
                    <h2>Contact Us</h2>
                    <ul>
                      <li>
                        <Link to={`tel:${brand.phone.replace(/\D/g, '')}`}>
                          <span className="icons">
                            <FaPhone className="fa-solid" />
                          </span>
                          <span>{brand.phone}</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`mailto:${brand.email}`}>
                          <span className="icons">
                            <FaEnvelope className="fa-solid" />
                          </span>
                          <span>{brand.email}</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          <span className="icons">
                            <FaLocationDot className="fa-solid" />
                          </span>
                          <span>{brand.address}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SiteFooter
