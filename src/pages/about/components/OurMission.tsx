import img5 from '@/assets/img/all-images/about-img5.png'
import img6 from '@/assets/img/all-images/about-img6.png'
import check4 from '@/assets/img/icons/check4.svg'
import star1 from '@/assets/img/icons/star1.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const OurMission = () => {
  return (
    <>
      <div className="about3-section-area aboutpage-inner sp1">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="about3-header-area heading2">
                <h5>Who Are We</h5>
                <h2 className="tg-element-title">Energize Your Knowledge Get to Know Us</h2>
                <p>
                  With a commitment to sustainability, innovation, and customer satisfaction, we strive to provide reliable, efficient, and
                  eco-friendly electricity services to homes, businesses.
                </p>
                <div className="misson-text">
                  <p>Our Mission</p>
                  <ul>
                    <li>
                      <img src={check4} alt="" />
                      Established fact that a reader will be distracted.
                    </li>
                    <li>
                      <img src={check4} alt="" />
                      Sed ut perspiciatis unde omnis iste natus sit.
                    </li>
                    <li>
                      <img src={check4} alt="" />
                      Trusted Electrical Services
                    </li>
                  </ul>
                </div>
                <div className="btn-area">
                  <Link to="/service" className="header-btn1">
                    View All Service <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={1} />
            <Col lg={6}>
              <div className="about-images-area">
                <Row>
                  <Col lg={6} md={6}>
                    <div className="img1">
                      <div className="space70 d-md-block d-none" />
                      <div className="space30 d-md-none d-block" />
                      <img src={img5} alt="" />
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="img1">
                      <div className="space30 d-md-none d-block" />
                      <img src={img6} alt="" />
                      <div className="about-footer-bottom">
                        <div className="img">
                          <img src={star1} alt="" />
                        </div>
                        <div className="content">
                          <span>Approved Best Electricity </span>
                        </div>
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

export default OurMission
