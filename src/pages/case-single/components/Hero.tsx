import img1 from '@/assets/img/bg/header-img1.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero1-section-area about-bg-area">
        <img src={img1} alt="" className="header-img1" />
        <Container>
          <Row>
            <Col lg={7} className=" m-auto">
              <div className="hero-heading-area heading1 text-center">
                <h1>Voltage Vision</h1>
                <Link to="/" className="backline">
                  Home <FaAngleRight className="fa-solid" /> <span>Voltage Vision</span>
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
