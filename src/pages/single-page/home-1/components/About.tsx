import React from 'react'
import about1 from '@/assets/img/all-images/about-img1.png'
import about2 from '@/assets/img/all-images/about-img2.png'
import check from '@/assets/img/icons/check1.svg'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'gatsby'

const About = () => {
  return (
    <>
      <div className="about1-section-area sp1" id="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-images-area">
                <div className="img1" data-aos="zoom-out" data-aos-duration={1000}>
                  <img src={about1} alt="" />
                </div>
                <div className="img2" data-aos="zoom-out" data-aos-duration={1100}>
                  <img src={about2} alt="" />
                </div>
                <div className="conter-area" data-aos="zoom-out" data-aos-duration={1200}>
                  <h3>
                    <CountUp className="counter" duration={5} end={12} start={0}></CountUp>+
                  </h3>
                  <p>Years of Experienced</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-header-area heading2">
                <h5>About Us</h5>
                <h2 className="tg-element-title">Charged with Purpose to Shaping Future of Energy</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  We more than just a provider of electricity services - we're pioneers in the energy industry, dedicated to shaping a brighter, more
                  sustainable future for all.
                </p>
                <div className="space10" />
                <ul data-aos="fade-left" data-aos-duration={1100}>
                  <li>
                    <img src={check} alt="" />
                    Highlight the unique features or benefits
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Our Commitment to Sustainable Energy
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Present your main solutions/services.
                  </li>
                </ul>
                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                  <Link to="/about" className="header-btn1">
                    About Us <FaArrowRight className="fa-solid" />
                  </Link>
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
