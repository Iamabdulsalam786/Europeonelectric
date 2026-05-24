import img5 from '@/assets/img/all-images/header-img5.png'
import arrow1 from '@/assets/img/elements/arrow1.png'
import lite1 from '@/assets/img/elements/lite1.png'
import tower1 from '@/assets/img/elements/tower1.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero3-section-area">
        <img src={tower1} alt="" className="tower1 aniamtion-key-1" />
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="hero-header-area heading5">
                <h5>Current Electricity Services</h5>
                <h1 className="tg-element-title">Electricity Services Connected Powered</h1>
                <p>
                  Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy
                  solutions.
                </p>
                <div className="btn-area">
                  <Link to="/contact" className="header-btn5">
                    Get a Free Estimate <FaArrowRight className="fa-solid" />
                  </Link>
                  <Link to="/contact" className="header-btn6">
                    Discover More <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="header-images-area">
                <div className="header-img">
                  <img src={img5} alt="" />
                </div>
                <div className="shapes">
                  <img src={arrow1} alt="" className="arrow1 aniamtion-key-8" />
                  <img src={lite1} alt="" className="lite1" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
