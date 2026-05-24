import bg from '@/assets/img/all-images/contact-bg1.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaEnvelope, FaLinkedinIn, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
      <div
        className="contact1-section-area sp1"
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="contact-header-area heading2">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  Contact Us
                </h5>
                <h2 className="tg-element-title">Illuminate Your Message Get in Contact</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.
                </p>
                <div className="space48" />
                <Row>
                  <Col lg={6} md={6}>
                    <div className="contact-auhtor-side" data-aos="fade-left" data-aos-duration={1000}>
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
                          <Link to="tel:1234567890">8502 Preston Rd. Inglewoo</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="space48 d-md-none" />
                    <div className="contact-auhtor-side" data-aos="fade-left" data-aos-duration={1200}>
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
                <form action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" defaultValue="0cd32fff-eda2-4da3-be43-37d47fbb396b" />
                  <Row>
                    <Col lg={6}>
                      <div className="input-area">
                        <p>Name (required)</p>
                        <input type="text" placeholder="Name" required />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="input-area">
                        <p>Number (required)</p>
                        <input type="number" placeholder="Phone" required />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <p>Email (required)</p>
                        <input type="email" placeholder="Email" required />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <p>Additional Details (Optional)</p>
                        <textarea placeholder="Describe your inquiry" cols={30} rows={10} required />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area1">
                        <input type="checkbox" required />
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
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contact
