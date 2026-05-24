import React from 'react'
import img1 from '@/assets/img/bg/header-img1.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <>
      <div className="hero1-section-area about-bg-area">
        <img src={img1} alt="" className="header-img1" />
        <Container>
          <Row>
            <Col lg={7} className=" m-auto">
              <div className="hero-heading-area heading1 text-center">
                <h1>Energy Ease Packages</h1>
                <Link to="/" className="backline">
                  Home <FaAngleRight className="fa-solid" /> Our Service <FaAngleRight className="fa-solid" /> <span>Energy Ease Packages </span>
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
