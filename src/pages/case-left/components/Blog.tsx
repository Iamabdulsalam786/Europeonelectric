import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

import service1 from '@/assets/img/all-images/case-img1.png'
import service2 from '@/assets/img/all-images/case-img2.png'
import service3 from '@/assets/img/all-images/case-img3.png'

const blogData = [
  { image: service1, title: 'Electicity Solutions', description: 'Power Navigating' },
  { image: service2, title: 'Voltage Vision', description: 'Voltage Vision' },
  { image: service3, title: 'Wizard Unveiling', description: 'Wizard Unveiling' },
]

const Blog = () => {
  return (
    <>
      <div className="casestudy-inner-section-area sp2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="casestudy-header heading2 text-center">
                <h2 className="tg-element-title">Read More Case Studies</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {blogData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="case-author-boxarea">
                  <div className="imges">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="case-content">
                    <div className="text">
                      <p>{item.title}</p>
                      <Link to="/case-single">{item.description}</Link>
                    </div>
                    <div className="icons">
                      <Link to="/case-single">
                        <span>
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </Link>
                    </div>
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

export default Blog
