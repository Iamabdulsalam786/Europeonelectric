import bg4 from '@/assets/img/all-images/contact-bg4.png'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
      <div
        className="contact4-section-area sp1"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Container>
          <Row className="align-items-center">
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
                        <button type="submit" className="header-btn7">
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
