import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

import img1 from '@/assets/img/all-images/service-img1.png'
import img2 from '@/assets/img/all-images/service-img2.png'
import img3 from '@/assets/img/all-images/service-img3.png'

const serviceData = [
  { image: img1, number: 1, title: 'Bright Spark Services', description: 'Explore our range of services below & discover how you power your life' },
  { image: img2, number: 2, title: 'Energy Ease Packages', description: 'With cutting-edge technology & industry expertise, we empower' },
  { image: img3, number: 3, title: 'Electra Care Packages', description: 'Our team of experts is committed to delivering high-quality services' },
]

const Service = () => {
  return (
    <>
      <div className="service1-section-area sp2" id="service">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="service-header-area heading2 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Service
                </h5>
                <h2 className="tg-element-title">Electricity Service Offerings</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {serviceData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-out" data-aos-duration={800 + idx * 200}>
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

export default Service
