import React from 'react'
import img13 from '@/assets/img/all-images/service-img13.png'
import img14 from '@/assets/img/all-images/service-img14.png'
import img15 from '@/assets/img/all-images/service-img15.png'
import download1 from '@/assets/img/icons/download1.svg'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneVolume, FaPinterestP } from 'react-icons/fa6'
import Faq from './Faq'
import { Link } from 'gatsby'

const ServiceArea = () => {
  return (
    <>
      <div className="service-leftside-area sp8">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="service-leftside">
                <div className="service-author-list">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <Link to="">
                        Energy Ease Packages <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Electra Care Packages <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Circuit Works Energy <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Energy Savvy Solutions <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Voltage Wave Energy <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="helping-area">
                  <h3>
                    If You Need Any Help <br className="d-lg-block d-none" /> Contact With Us
                  </h3>
                  <div className="btn-area">
                    <Link to="tel:+917052101786" className="header-btn1">
                      <FaPhoneVolume className="fa-solid" />
                      +91 705 2101 786
                    </Link>
                  </div>
                </div>
                <div className="download-broucher">
                  <h3>Download Brochure</h3>
                  <p>We also offer innovative solar financing packages, ensuring that the transition.</p>
                  <div className="btn-area">
                    <Link to="#" className="header-btn1">
                      <img src={download1} alt="" />
                      Pdf Download
                    </Link>
                    <Link to="#" className="header-btn2">
                      <img src={download1} alt="" />
                      Doc Download
                    </Link>
                  </div>
                </div>
                <div className="social-icons">
                  <h3>Follow Us</h3>
                  <ul>
                    <li>
                      <Link to="">
                        <FaFacebookF className="fa-brandso" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaInstagram className="fa-brandso" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaLinkedinIn className="fa-brandso" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaPinterestP className="fa-brandso" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="service-rightside-area heading2">
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
