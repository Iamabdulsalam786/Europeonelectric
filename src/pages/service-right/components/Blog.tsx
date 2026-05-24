import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

import service1 from '@/assets/img/all-images/service-img1.png'
import service2 from '@/assets/img/all-images/service-img2.png'
import service3 from '@/assets/img/all-images/service-img3.png'

const blogData = [
  {
    image: service1,
    title: 'Bright Spark Services',
    description: 'Explore our range of services below & discover how you power your life',
    number: 1,
  },
  {
    image: service2,
    title: 'Energy Ease Packages',
    description: 'With cutting-edge technology & industry expertise, we empower',
    number: 2,
  },
  {
    image: service3,
    title: 'Electra Care Packages',
    description: 'Our team of experts is committed to delivering high-quality services',
    number: 3,
  },
]

const Blog = () => {
  return (
    <>
      <div className="service1-section-area leftside sp2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="service-header-area heading2 text-center">
                <h2 className="tg-element-title">View Our More Services</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {blogData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="service-auhtor-boxarea">
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <h3>0{item.number}</h3>
                    <Link to="/service-single">{item.title}</Link>
                    <p>{item.description}</p>
                    <Link to="/service-single" className="readmore">
                      Learn More <FaArrowRight className="fa-solid" />
                    </Link>
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
