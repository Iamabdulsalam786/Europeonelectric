import React from 'react'
import img13 from '@/assets/img/all-images/service-img13.png'
import img14 from '@/assets/img/all-images/service-img14.png'
import img15 from '@/assets/img/all-images/service-img15.png'
import Faq from './Faq'
import { Col, Container, Row } from 'react-bootstrap'

const ServiceArea = () => {
  return (
    <>
      <div className="service-leftside-area sp8">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="service-rightside-area heading2" style={{ padding: 0 }}>
                <div className="img1">
                  <img src={img13} alt="" />
                </div>
                <div className="space32" />
                <h3>Energy Ease Packages</h3>
                <p>
                  We pride ourselves on delivering comprehensive and innovative electricity services tailored to meet the diverse needs of our
                  customers. With years of experience in the industry, we offer a wide range of solutions spanning from residential
                </p>
                <p>
                  Additionally, our team of skilled technicians is available around the clock to provide prompt and reliable emergency services,
                  ensuring that you're never left in the dark
                </p>
                <div className="space16" />
                <h3>Electricity Services That Illuminate Your World:</h3>
                <p>
                  Our services include installation, maintenance, and repair of electrical systems, ensuring that your home or business remains
                  powered efficiently and safely. We specialize in renewable energy solutions, offering solar panel installation and energy storage
                </p>
                <p>
                  Whether you're interested in upgrading to energy-efficient appliances, implementing smart home automation systems , we're here to
                  guide you every step of the way.
                </p>
                <div className="space16" />
                <h3>Empower Your World: Unleash the Power</h3>
                <p>
                  Our commitment to excellence extends beyond the installation and maintenance of electrical systems. We also offer energy efficiency
                  consultations to help you optimize your energy usage and reduce your monthly bills. Our team of experts will assess
                </p>
                <p>
                  Furthermore, we understand the importance of safety when it comes to electrical systems. That's why we adhere to the highest
                  industry standards and prioritize safety
                </p>
                <Row>
                  <Col lg={6}>
                    <div className="space32" />
                    <div className="img1">
                      <img src={img14} alt="" />
                      <div className="space32" />
                      <p>Our technicians are fully licensed and trained to handle all types of electrical work, ensuring that every installation</p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="space32" />
                    <div className="img1">
                      <img src={img15} alt="" />
                      <div className="space32" />
                      <p>Experience the difference with and let us help you power your life efficiently, sustainably, and safely.</p>
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

export default ServiceArea
