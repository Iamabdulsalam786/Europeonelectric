import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaBolt } from 'react-icons/fa6'
import { Link } from 'gatsby'

import img1 from '@/assets/img/all-images/service-img1.png'
import img2 from '@/assets/img/all-images/service-img2.png'
import img3 from '@/assets/img/all-images/service-img3.png'
import img4 from '@/assets/img/all-images/service-img4.png'
import img5 from '@/assets/img/all-images/service-img5.png'
import img6 from '@/assets/img/all-images/service-img6.png'
import img7 from '@/assets/img/all-images/service-img7.png'
import img8 from '@/assets/img/all-images/service-img8.png'

export type ServiceType = {
  duration: number
  image: string
  number: number
  title: string
  description: string
  highlights: string[]
}

const serviceData: ServiceType[] = [
  {
    duration: 800,
    image: img1,
    number: 1,
    title: 'Residential Electrical',
    description: 'Repairs, installations and rewiring for homes — done safely and to code.',
    highlights: ['Repairs & troubleshooting', 'Whole-house rewiring', 'Panel & service upgrades'],
  },
  {
    duration: 1000,
    image: img2,
    number: 2,
    title: 'Commercial Electrical',
    description: 'Tenant build-outs, power systems and lighting for offices, retail and restaurants.',
    highlights: ['Tenant improvements', 'Power distribution', 'LED & emergency lighting'],
  },
  {
    duration: 1200,
    image: img3,
    number: 3,
    title: 'EV Charger Installation',
    description: 'Certified Tesla & Level 2 charger installs for homes, businesses and fleets.',
    highlights: ['Tesla & Level 2 chargers', 'Fleet & commercial sites', 'Diagnostics & repairs'],
  },
  {
    duration: 800,
    image: img4,
    number: 4,
    title: 'Lighting Solutions',
    description: 'Indoor, outdoor and smart lighting designed and installed by certified pros.',
    highlights: ['Recessed & pendant lighting', 'Landscape & security lights', 'Smart switches & controls'],
  },
  {
    duration: 1000,
    image: img5,
    number: 5,
    title: 'Panel Upgrades',
    description: '100A to 400A service upgrades, panel and breaker replacements, subpanels.',
    highlights: ['Panel replacement', '100A → 200A → 400A upgrades', 'Subpanels & breakers'],
  },
  {
    duration: 1200,
    image: img6,
    number: 6,
    title: 'Safety & Inspections',
    description: 'Code-compliance inspections, GFCI/AFCI installs and surge protection.',
    highlights: ['Home & commercial inspections', 'GFCI / AFCI installation', 'Surge protection & grounding'],
  },
  {
    duration: 800,
    image: img7,
    number: 7,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock response for outages, burning smells and storm damage.',
    highlights: ['Power outage diagnosis', 'Burning smell investigations', 'Storm damage repairs'],
  },
  {
    duration: 1000,
    image: img8,
    number: 8,
    title: 'New Construction & Remodels',
    description: 'Complete electrical design and install for new builds, remodels and ADUs.',
    highlights: ['Full electrical system design', 'New home & commercial wiring', 'Kitchen & bath remodels'],
  },
]

const Service = () => {
  return (
    <>
      <div className="service1-section-area home-services-grid sp2">
        <Container>
          <Row>
            <Col lg={7} className="m-auto">
              <div className="service-header-area heading2 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Services
                </h5>
                <h2 className="tg-element-title">Full-Service Electrical Expertise</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  One licensed team for every electrical need — residential, commercial, EV charging and 24/7 emergency — with transparent
                  pricing and guaranteed workmanship.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {serviceData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-out" data-aos-duration={item.duration}>
                <div className="service-auhtor-boxarea">
                  <div className="img1">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="content-area">
                    <h3>{item.number < 10 ? `0${item.number}` : item.number}</h3>
                    <Link to="/service-single">{item.title}</Link>
                    <p>{item.description}</p>
                    <ul className="service-highlights">
                      {item.highlights.map((h) => (
                        <li key={h}>
                          <FaBolt aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
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
