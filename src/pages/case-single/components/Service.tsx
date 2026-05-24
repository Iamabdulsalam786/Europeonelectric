import img16 from '@/assets/img/all-images/case-img16.png'
import img14 from '@/assets/img/all-images/service-img14.png'
import check from '@/assets/img/icons/check4.svg'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Faq from './Faq'

const Service = () => {
  return (
    <>
      <div className="service-leftside-area sp8">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="service-rightside-area heading2" style={{ padding: 0 }}>
                <div className="img1">
                  <img src={img16} alt="" />
                </div>
                <div className="space32" />
                <h3>Voltage Vision</h3>
                <p>
                  Explore our electricity services through real-life success stories showcase our case studies. Each case study delves into the unique
                  challenges faced by our clients and how our tailored solutions helped them overcome these obstacles.
                </p>
                <p>
                  From residential homes to large-scale industrial projects, our case studies highlight diverse range of services we offer and the
                  positive impact they have had on our
                </p>
                <div className="space16" />
                <h3>Experiences Tales of Energy Transformation</h3>
                <p>
                  Dive into our case studies to see how we've delivered reliable, efficient, and innovative electricity solutions, empowering our
                  clients to achieve their goals and drive progress in their communities lives and businesses
                </p>
                <p>
                  Whether it's optimizing energy efficiency, integrating renewable energy sources enhancing grid resilience, our case studies showcase
                  the tangible impact
                </p>
                <div className="space16" />
                <h3>Epics Stories of Sustainability</h3>
                <p>
                  Embark on a journey of discovery with our electricity services through our collection of insightful case studies. Each case study
                  unveils a unique narrative, depicting the challenges faced by our clients and the innovative solutions we provided
                </p>
                <p>
                  Delve into these stories to witness firsthand how we have transformed challenges into opportunities, delivering reliable, efficient,
                  and sustainable
                </p>
                <Row className="align-items-center">
                  <Col lg={6} md={6}>
                    <div className="space32" />
                    <div className="img1">
                      <img src={img14} alt="" />
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="space32" />
                    <div className="img1">
                      <ul>
                        <li>
                          <img src={check} alt="" />
                          Facers voluptatum meatus, volutes.
                        </li>
                        <li className="space16" />
                        <li>
                          <img src={check} alt="" />
                          Habitant seeped corrupts fuse culpa.
                        </li>
                        <li className="space16" />
                        <li>
                          <img src={check} alt="" />
                          Tempore Atenean debits, Atenean.
                        </li>
                        <li className="space16" />
                        <li>
                          <img src={check} alt="" />
                          Quisqueya venerates fringillid bland.
                        </li>
                        <li className="space16" />
                        <li>
                          <img src={check} alt="" />
                          Bibendum corrupts quake chillum.
                        </li>
                        <li className="space16" />
                        <li>
                          <img src={check} alt="" />
                          Habitant seeped corrupts fuse culpa.
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <div className="space32" />
                <Faq />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
