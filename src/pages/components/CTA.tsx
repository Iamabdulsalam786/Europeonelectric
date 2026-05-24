import cta1 from '@/assets/img/all-images/cta-img1.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import React from 'react'

const CTA = () => {
  return (
    <div className="cta4-section-area sp4">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="cta-header heading2">
              <h2 className="tg-element-title">Ready to Power Up Your Home or Business?</h2>
              <p data-aos="fade-up" data-aos-duration={800}>
                Contact European Electric LLC for safe, code-compliant electrical work backed by licensed professionals and
                dependable service.
              </p>
              <form action="" data-aos="fade-up" data-aos-duration={1000}>
                <input type="email" placeholder="Email Address" />
                <button type="submit" className="header-btn7">
                  Get a Quote <FaArrowRight className="fa-solid" />
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
  )
}

export default CTA
