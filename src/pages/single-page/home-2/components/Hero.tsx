import React from 'react'
import bottom2 from '@/assets/img/all-images/header-bottom2.png'
import img2 from '@/assets/img/all-images/header-img6.png'
import element1 from '@/assets/img/elements/elements1.png'
import arrow2 from '@/assets/img/icons/arrow2.svg'
import arrow3 from '@/assets/img/icons/arrow3.png'
import bizli from '@/assets/img/icons/bizli.svg'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { FaArrowRight, FaStar } from 'react-icons/fa6'
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <>
      <div className="hero4-section-area">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="hero4-header-textarea">
                <Row>
                  <Col lg={9} className="m-auto">
                    <div className="header-text text-center heading8">
                      <h5 data-aos="fade-up" data-aos-duration={800}>
                        Current Electricity Services
                      </h5>
                      <h1 className="tg-element-title">Current Innovation Leading The Way in Electricity Services</h1>
                      <div className="btn-area" data-aos="fade-up" data-aos-duration={1200}>
                        <Link to="/contact" className="header-btn7">
                          Get a Free Estimate <FaArrowRight className="fa-solid" />
                        </Link>
                        <Link to="/contact" className="header-btn8">
                          Discover More <FaArrowRight className="fa-solid" />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col lg={2}>
                    <div className="header-left-side" data-aos="fade-left" data-aos-duration={1000}>
                      <img src={bottom2} alt="" className="bottom2" />
                      <p>
                        <span>4K</span>Happy Client
                      </p>
                      <ul>
                        <li>
                          <FaStar className="fa-solid" />
                        </li>
                        <li>
                          <FaStar className="fa-solid" />
                        </li>
                        <li>
                          <FaStar className="fa-solid" />
                        </li>
                        <li>
                          <FaStar className="fa-solid" />
                        </li>
                        <li>
                          <FaStar className="fa-solid" />
                        </li>
                      </ul>
                      <img src={arrow2} alt="" className="arrow2" />
                      <div className="percent-electri">
                        <h3>
                          <CountUp className="counter" end={89} duration={10} start={0}></CountUp>%
                        </h3>
                        <p>
                          Electricity Client <br className="d-lg-block d-none" /> Services Success
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={1} />
                  <Col lg={6} data-aos="zoom-in" data-aos-duration={1000}>
                    <div className="header-images">
                      <img src={img2} alt="" className="header-img6" />
                      <img src={element1} alt="" className="elements1" />
                      <img src={arrow2} alt="" className="arrow2" />
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="images-text-area" data-aos="fade-right" data-aos-duration={1000}>
                      <div className="content-area">
                        <div className="icons">
                          <img src={bizli} alt="" />
                        </div>
                        <div className="pera">
                          <p>
                            Powered by <br className="d-lg-block d-none" /> Electricity Services
                          </p>
                        </div>
                      </div>
                      <div className="img">
                        <img src={arrow3} alt="" />
                      </div>
                      <div className="pera2">
                        <p>With cutting-edge technology and industry expertise, we empower</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
