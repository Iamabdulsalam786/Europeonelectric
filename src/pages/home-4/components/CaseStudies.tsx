import casebg from '@/assets/img/bg/casebg.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

import case4 from '@/assets/img/all-images/case-img4.png'
import case5 from '@/assets/img/all-images/case-img5.png'
import case6 from '@/assets/img/all-images/case-img6.png'

const casestudyData = [
  { image: case4, title: 'Electricity & Current', comment: 'Powerful Transformations' },
  { image: case5, title: 'Electricity & Current', comment: 'Current Chronicles' },
  { image: case6, title: 'Electricity & Current', comment: 'Electrifying Experiences' },
]
const CaseStudies = () => {
  return (
    <>
      <div className="casestudy2-section-area sp2">
        <Container>
          <Row>
            <Col lg={7} className="m-auto">
              <div className="casestudy-header text-center heading6">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Case Studies
                </h5>
                <h2 className="tg-element-title">Electricity Service Case Studies</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  Explore real-life examples of our electricity services in action through our case studies. From residential homes to commercial
                  enterprises,
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {casestudyData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in" data-aos-duration={800 + idx * 200}>
                <div className="case-auhtor-boxarea">
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="case-bg">
                    <img src={casebg} alt="" />
                  </div>
                  <div className="content">
                    <Link to="/case-single">
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                    <p>Electricity &amp; Current</p>
                    <Link to="/case-single">Powerful Transformations</Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CaseStudies
