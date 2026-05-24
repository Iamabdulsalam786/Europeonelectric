import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'gatsby'

import service4 from '@/assets/img/icons/service-icons4.svg'
import service5 from '@/assets/img/icons/service-icons5.svg'
import service6 from '@/assets/img/icons/service-icons6.svg'
import service7 from '@/assets/img/icons/service-icons7.svg'
import service8 from '@/assets/img/icons/service-icons8.svg'
import service9 from '@/assets/img/icons/service-icons9.svg'

const serviceData = [
  {
    duration: 800,
    image: service4,
    title: 'Bright Beam Services',
    description: 'Our services encompass everything from residential energy solutions to commercial power management.',
  },
  {
    duration: 1000,
    image: service5,
    title: 'Renewable Energy Plans',
    description: 'With cutting-edge technology and industry expertise, we empower our customers to make informed.',
  },
  {
    duration: 1200,
    image: service6,
    title: 'Current Control Plans',
    description: "Whether you're looking for reliable electricity supply, energy-efficient solutions, or renewable energy.",
  },
  {
    duration: 800,
    image: service7,
    title: 'Electra Care Solutions',
    description: 'We have you covered. Our team of experts is committed to delivering high-quality services prioritize.',
  },
  {
    duration: 1000,
    image: service8,
    title: 'Electra Works Solutions',
    description: 'Explore our range of services below and discover how we can help you power your life, business, and future.',
  },
  {
    duration: 1200,
    image: service9,
    title: 'Efficiency First Services',
    description: 'We empower our customers to make informed decisions about their energy needs and optimize their.',
  },
]

const Service = () => {
  return (
    <>
      <div className="service3-section-area sp2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="service-header-area heading7 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Services
                </h5>
                <h2 className="tg-element-title">Trusted Electricity Providers</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {serviceData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in" data-aos-duration={item.duration}>
                <div className="service-auhtor-boxarea">
                  <div className="icons">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <Link to="/service-single">{item.title}</Link>
                    <p>{item.description}</p>
                    <Link to="/service-single" className="readmore">
                      Read More <FaArrowRight />
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
