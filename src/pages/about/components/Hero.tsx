import hed1 from '@/assets/img/bg/header-img1.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero1-section-area about-bg-area">
        <img src={hed1} alt="" className="header-img1" />
        <Container>
          <Row>
            <Col lg={3} className="m-auto">
              <div className="hero-heading-area heading1 text-center">
                <h1>About US</h1>
                <Link to="/" className="backline">
                  Home <FaAngleRight className="fa-solid" /> <span>About Us</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
