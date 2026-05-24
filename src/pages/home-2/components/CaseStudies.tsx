import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'gatsby'

import img7 from '@/assets/img/all-images/case-img7.png'
import img8 from '@/assets/img/all-images/case-img8.png'
import img9 from '@/assets/img/all-images/case-img9.png'
import icon1 from '@/assets/img/icons/case-icons1.svg'
import icon2 from '@/assets/img/icons/case-icons2.svg'
import icon3 from '@/assets/img/icons/case-icons3.svg'

const caseData = [
  { image: img7, icon: icon1, title: 'Eco-Electric Chronicles', duration: 800 },
  { image: img8, icon: icon2, title: 'Bright Spark Services', duration: 1000 },
  { image: img9, icon: icon3, title: 'Best Power and Progress', duration: 1200 },
]

const CaseStudies = () => {
  return (
    <>
      <div className="casestudy4-section-area sp2">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="case-header text-center heading11">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Case Studies
                </h5>
                <h2 className="tg-element-title"> Case Studies in Energy Transformation</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  From residential households to commercial enterprises, we provide reliable, efficient, <br className="d-lg-block d-none" /> and
                  sustainable energy solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {caseData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in" data-aos-duration={item.duration}>
                <div className="case-boxes-area">
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <div className="icons">
                      <img src={item.icon} alt="" />
                    </div>
                    <Link to="/case-single">{item.title}</Link>
                    <p>Explore our range of services below &amp; discover how.</p>
                    <Link to="/case-single" className="readmore">
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

export default CaseStudies
