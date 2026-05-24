import about7 from '@/assets/img/all-images/about-img7.png'
import img8 from '@/assets/img/all-images/about-img8.png'
import element2 from '@/assets/img/elements/elements2.png'
import brand from '@/config/brand'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <div className="about4-section-area sp1">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-header-area heading9">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  About Us
                </h5>
                <h2 className="tg-element-title">Trusted Electrical Experts at {brand.name}</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  {brand.name} provides dependable residential and commercial electrical solutions — from panel upgrades and wiring to
                  lighting, safety inspections, and emergency repairs — delivered with precision and care.
                </p>
                <Row>
                  <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration={1000}>
                    <div className="counter-box">
                      <h2>
                        <CountUp className="counter" end={450} duration={10} start={0}></CountUp>+
                      </h2>
                      <p>Active Clients</p>
                    </div>
                  </Col>
                  <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration={1200}>
                    <div className="counter-box">
                      <h2>
                        <CountUp className="counter" end={990} duration={10} start={0}></CountUp>+
                      </h2>
                      <p>Electricity Services </p>
                    </div>
                  </Col>
                  <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration={1000}>
                    <div className="counter-box">
                      <h2>
                        <CountUp className="counter" end={45} duration={10} start={0}></CountUp>+
                      </h2>
                      <p>Team Advisors </p>
                    </div>
                  </Col>
                  <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration={1200}>
                    <div className="counter-box">
                      <h2>
                        <CountUp className="counter" end={12} duration={12} start={0}></CountUp>+
                      </h2>
                      <p>Years of Experienced</p>
                    </div>
                  </Col>
                </Row>
                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                  <Link to="/about" className="header-btn7">
                    About Us
                    <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-images-area">
                <div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
                  <img src={about7} alt="" />
                  <img src={element2} alt="" className="elements2" />
                </div>
                <div className="img2" data-aos="zoom-in" data-aos-duration={1100}>
                  <img src={img8} alt="" />
                </div>
                <div className="content-experiance" data-aos="zoom-in" data-aos-duration={1200}>
                  <h3>Our Company</h3>
                  <h2>
                    <CountUp className="counter" end={12} duration={12} start={0}></CountUp>+
                  </h2>
                  <p>Years of Experienced</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About
