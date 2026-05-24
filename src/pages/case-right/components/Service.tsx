import img16 from '@/assets/img/all-images/case-img16.png'
import img14 from '@/assets/img/all-images/service-img14.png'
import check from '@/assets/img/icons/check4.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneVolume, FaPinterestP } from 'react-icons/fa6'
import Faq from './Faq'

const Service = () => {
  return (
    <>
      <div className="service-leftside-area sp8">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="service-rightside-area heading2 rightsidebar">
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
                      <FaPhoneVolume />
                      +91 705 2101 786
                    </Link>
                  </div>
                </div>
                <div className="tags-area">
                  <h3>Our Tags</h3>
                  <ul>
                    <li>
                      <Link to="">Electricity </Link>
                    </li>
                    <li>
                      <Link to="">Creative </Link>
                    </li>
                    <li>
                      <Link to="">Design </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="">Art </Link>
                    </li>
                    <li>
                      <Link to="">Development </Link>
                    </li>
                    <li>
                      <Link to="">Image </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="">People </Link>
                    </li>
                    <li>
                      <Link to="">Tech </Link>
                    </li>
                    <li>
                      <Link to="">3D Images </Link>
                    </li>
                  </ul>
                </div>
                <div className="social-icons">
                  <h3>Follow Us</h3>
                  <ul>
                    <li>
                      <Link to="">
                        <FaFacebookF className="fa-brands" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaInstagram className="fa-brands" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaLinkedinIn className="fa-brands" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaPinterestP className="fa-brands" />
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

export default Service
