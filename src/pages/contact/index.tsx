import img1 from '@/assets/img/bg/header-img1.png'
import MainLayout from '@/components/layout/MainLayout'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight, FaEnvelope, FaLinkedinIn, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
      <MainLayout>
        <div className="hero1-section-area about-bg-area">
          <img src={img1} alt="" className="header-img1" />
          <Container>
            <Row>
              <Col lg={8} className="m-auto">
                <div className="hero-heading-area heading1 text-center">
                  <h1>Contact Us</h1>
                  <Link to="/" className="backline">
                    Home <FaAngleRight className="fa-solid " />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="contact1-section-area contact-inner sp1">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="contact-header-area heading2">
                  <h5>Contact Us</h5>
                  <h2 className="tg-element-title">Illuminate Your Message Get in Contact</h2>
                  <p>Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.</p>
                  <div className="space48" />
                  <Row>
                    <Col lg={6} md={6}>
                      <div className="contact-auhtor-side">
                        <div className="icons-text">
                          <div className="icons">
                            <FaPhone className="fa-solid fa-phone" />
                          </div>
                          <div className="text">
                            <p>Phone</p>
                            <Link to="tel:1234567890">123 456 7890</Link>
                          </div>
                        </div>
                        <div className="space48" />
                        <div className="icons-text">
                          <div className="icons">
                            <FaLocationDot className="fa-solid fa-location-dot" />
                          </div>
                          <div className="text">
                            <p>Address</p>
                            <Link to="tel:1234567890">London Eye ,London</Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="space48 d-md-none" />
                      <div className="contact-auhtor-side">
                        <div className="icons-text">
                          <div className="icons">
                            <FaEnvelope className="fa-solid fa-envelope" />
                          </div>
                          <div className="text">
                            <p>Email</p>
                            <Link to="mailto:serebangle@gmail.com ">serebangle@gmail.com </Link>
                          </div>
                        </div>
                        <div className="space48" />
                        <div className="icons-text">
                          <div className="icons">
                            <FaLinkedinIn className="fa-brands fa-linkedin-in" />
                          </div>
                          <div className="text">
                            <p>Linkedin</p>
                            <Link to="#">Unifato</Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={6}>
                <div className="contact-submit-boxarea">
                  <h4>Request A Quote</h4>
                  <Row>
                    <Col lg={6}>
                      <div className="input-area">
                        <p>Name (required)</p>
                        <input type="text" placeholder="Name" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="input-area">
                        <p>Number (required)</p>
                        <input type="number" placeholder="Phone" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <p>Email (required)</p>
                        <input type="email" placeholder="Email" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <p>Additional Details (Optional)</p>
                        <textarea placeholder="Describe your inquiry" cols={30} rows={10} />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area1">
                        <input type="checkbox" />
                        <p>I agree with the site privacy policy</p>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area1">
                        <button type="submit" className="header-btn1">
                          Submit Now <FaArrowRight className="fa-solid" />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Contact

export { Head } from '@/components/PageMeta'
