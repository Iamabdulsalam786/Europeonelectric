import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'gatsby'

import img1 from '@/assets/img/all-images/service-img1.png'
import img2 from '@/assets/img/all-images/service-img2.png'
import img3 from '@/assets/img/all-images/service-img3.png'
import img4 from '@/assets/img/all-images/service-img4.png'
import img5 from '@/assets/img/all-images/service-img5.png'
import img6 from '@/assets/img/all-images/service-img6.png'

export type ServiceType = {
  duration: number
  image: string
  number: number
  title: string
  description: string
}
const serviceData: ServiceType[] = [
  {
    duration: 800,
    image: img1,
    number: 1,
    title: 'Residential Electrical',
    description: 'Panel upgrades, rewiring, outlets, ceiling fans, lighting and safety inspections for your home.',
  },
  {
    duration: 1000,
    image: img2,
    number: 2,
    title: 'Commercial Electrical',
    description: 'Tenant fit-outs, dedicated circuits, lighting retrofits and energy upgrades for offices and retail.',
  },
  {
    duration: 1200,
    image: img3,
    number: 3,
    title: 'EV Chargers & Smart Home',
    description: 'Level 2 EV charger installs, smart switches, surge protection and 24/7 emergency response.',
  },
  {
    duration: 800,
    image: img4,
    number: 4,
    title: 'Lighting Design & Install',
    description: 'Recessed, landscape, accent and energy-efficient LED lighting designed and installed by certified pros.',
  },
  {
    duration: 1000,
    image: img5,
    number: 5,
    title: 'Generator & Backup Power',
    description: 'Whole-home and standby generator installation, transfer switches and battery backup solutions.',
  },
  {
    duration: 1200,
    image: img6,
    number: 6,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock response for power outages, electrical faults, sparking outlets and code-red issues.',
  },
]

const Service = () => {
  return (
    <>
      <div className="service1-section-area sp2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="service-header-area heading2 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Services
                </h5>
                <h2 className="tg-element-title">Full-Service Electrical Expertise</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  One licensed team for every electrical need — residential, commercial and emergency — with transparent pricing and guaranteed workmanship.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {serviceData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-out" data-aos-duration={item.duration}>
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
