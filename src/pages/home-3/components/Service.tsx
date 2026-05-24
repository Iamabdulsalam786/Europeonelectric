import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

import service4 from '@/assets/img/all-images/service-img4.png'
import service5 from '@/assets/img/all-images/service-img5.png'
import service6 from '@/assets/img/all-images/service-img6.png'
import icon1 from '@/assets/img/icons/service-icons1.svg'
import icon2 from '@/assets/img/icons/service-icons2.svg'
import icon3 from '@/assets/img/icons/service-icons3.svg'

const serviceData = [
  { image: service4, icons: icon1, title: 'Electra Works Solutions' },
  { image: service5, icons: icon2, title: 'Bright Beam Solutions' },
  { image: service6, icons: icon3, title: 'Electri Core Services' },
]

const Service = () => {
  return (
    <>
      <div className="service2-section-area sp2">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="service-header-area heading4 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Service
                </h5>
                <h2 className="tg-element-title"> Our Range of Electricity Solutions</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  Our team of experts is committed to delivering high-quality services that prioritize <br className="d-lg-block d-none" />
                  reliability, efficiency, and sustainability. With cutting-edge technology.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {serviceData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="service2-author-boxarea" data-aos="flip-left" data-aos-duration={800}>
                  <div className="images">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="icons">
                    <img src={item.icons} alt="" />
                  </div>
                  <div className="service-content">
                    <Link to="/service">{item.title}</Link>
                    <p>Explore our range of services below and discover how we can help future.</p>
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
