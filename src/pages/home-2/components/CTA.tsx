import React from 'react'
import cta1 from '@/assets/img/all-images/cta-img1.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const CTA = () => {
  return (
    <>
      <div className="cta4-section-area sp4">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="cta-header heading2">
                <h2 className="tg-element-title">Ready to Power up your Savings and Reliability?</h2>
                <p data-aos="fade-up" data-aos-duration={800}>
                  Feel free to customize this paragraph to better reflect the specific services offered by your IT solution &amp; the unique
                </p>
                <form action="" data-aos="fade-up" data-aos-duration={1000}>
                  <input type="email" placeholder="Email Address" />
                  <button type="submit" className="header-btn7">
                    Subscribe Now <FaArrowRight className="fa-solid" />
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={1} />
            <Col lg={5}>
              <div className="cta-images">
                <div className="img1">
                  <img src={cta1} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CTA
