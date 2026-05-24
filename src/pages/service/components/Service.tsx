import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAnglesLeft, FaAnglesRight, FaArrowRight } from 'react-icons/fa6'

import ser1 from '@/assets/img/all-images/service-img1.png'
import ser10 from '@/assets/img/all-images/service-img10.png'
import ser11 from '@/assets/img/all-images/service-img11.png'
import ser12 from '@/assets/img/all-images/service-img12.png'
import ser2 from '@/assets/img/all-images/service-img2.png'
import ser3 from '@/assets/img/all-images/service-img3.png'
import ser7 from '@/assets/img/all-images/service-img7.png'
import ser8 from '@/assets/img/all-images/service-img8.png'
import ser9 from '@/assets/img/all-images/service-img9.png'

const serviceData = [
  {
    image: ser1,
    number: 1,
    title: 'Bright Spark Services',
    description: 'Explore our range of services below &amp; discover how you power your life',
  },
  {
    image: ser2,
    number: 2,
    title: 'Energy Ease Packages',
    description: 'With cutting-edge technology &amp; industry expertise, we empower',
  },
  {
    image: ser3,
    number: 3,
    title: 'Electra Care Packages',
    description: 'Our team of experts is committed to delivering high-quality services',
  },
  {
    image: ser7,
    number: 4,
    title: 'Voltage Wave Energy',
    description: "That's why we're committed to delivering top-notch services",
  },
  {
    image: ser8,
    number: 5,
    title: 'Energy Savvy Solutions',
    description: 'We offer a comprehensive range of solutions designed to empower',
  },
  {
    image: ser9,
    number: 6,
    title: 'Circuit Works Energy',
    description: 'The lights on and the energy flowing, powering your present',
  },
  {
    image: ser10,
    number: 7,
    title: 'Power Sync Solutions',
    description: 'Explore our range of services below &amp; discover how you power your life',
  },
  {
    image: ser11,
    number: 8,
    title: 'Voltify Energy Group',
    description: "Where we're dedicated to powering your life with reliable and efficient",
  },
  {
    image: ser12,
    number: 9,
    title: 'Joule Works Energy',
    description: 'As a leading provider in the industry, we understand the crucial role that',
  },
]

const ServiceArea = () => {
  return (
    <>
      <div className="service1-section-area leftside sp1">
        <Container>
          <Row>
            {serviceData.map((item, idx) => (
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

            <Col lg={12}>
              <div className="pagination-area">
                <div className="page">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Previous">
                        <FaAnglesLeft />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="" aria-label="Next">
                        <FaAnglesRight className="fa-solid fa-angles-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ServiceArea
