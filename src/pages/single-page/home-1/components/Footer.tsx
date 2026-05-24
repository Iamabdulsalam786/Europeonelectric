import brand from '@/config/brand'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <div className="footer1-section-area">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="footer-logo-content sp4">
                <Row>
                  <Col lg={3} md={6}>
                    <div className="logo-content">
                      <img src={brand.logos.primary} alt="" />
                      <p>Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.</p>
                      <ul>
                        <li>
                          <Link to="">
                            <FaFacebookF className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaInstagram className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaLinkedinIn className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaYoutube className="fa-brands" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={1} className=" d-lg-block d-none" />
                  <Col lg={2} md={6}>
                    <div className="space30 d-block d-md-none" />
                    <div className="service-heading">
                      <h2>Electricity service</h2>
                      <ul>
                        <li>
                          <Link to="">Air Conditioning&nbsp;</Link>
                        </li>
                        <li>
                          <Link to="">Electrical Panels &nbsp;</Link>
                        </li>
                        <li>
                          <Link to="">Security System&nbsp;</Link>
                        </li>
                        <li>
                          <Link to="">&nbsp;Indoor Lighting&nbsp;</Link>
                        </li>
                        <li>
                          <Link to="">Electrical Services</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={1} className=" d-lg-block d-none" />
                  <Col lg={2} md={6}>
                    <div className="space30 d-md-block d-lg-none" />
                    <div className="service-heading">
                      <h2>Quick Links</h2>
                      <ul>
                        <li>
                          <Link to="/home-1">Home&nbsp;</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us &nbsp;</Link>
                        </li>
                        <li>
                          <Link to="/service">Service</Link>
                        </li>
                        <li>
                          <Link to="/testimonials">&nbsp;Testimonial</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact US</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={3} md={6}>
                    <div className="space30 d-md-block d-lg-none" />
                    <div className="service-heading contact">
                      <h2>Contact US </h2>
                      <ul>
                        <li>
                          <Link to="tel:+880123456789">
                            <span className="icons">
                              <FaPhone className="fa-solid fa-phone" />
                            </span>
                            <span>+880 123 456 789</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="mailto:info@mail.com">
                            <span className="icons">
                              <FaEnvelope className="fa-solid fa-envelope" />
                            </span>
                            <span>info@mail.com&nbsp;</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <span className="icons">
                              <FaLocationDot className="fa-solid fa-location-dot" />
                            </span>
                            <span>
                              8502 Preston Rd. Inglewoo <br /> Maine 98380
                            </span>
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
    </>
  )
}

export default Footer
