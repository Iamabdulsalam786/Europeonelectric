import heroBg from '@/assets/img/bg/header-img2.png'
import bottomhed from '@/assets/img/all-images/header-bottom.png'
import brand from '@/config/brand'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaStar } from 'react-icons/fa6'

const HomeHero = () => {
  return (
    <section className="home-hero">
      <img src={heroBg} alt="" className="home-hero__bg" />
      <div className="home-hero__overlay" />
      <Container className="home-hero__container">
        <Row>
          <Col lg={8} xl={7}>
            <div className="home-hero__content">
              <span className="home-hero__eyebrow" data-aos="fade-up" data-aos-duration={600}>
                Licensed · Bonded · Insured
              </span>
              <h1 className="home-hero__title" data-aos="fade-up" data-aos-duration={800}>
                Reliable Electrical Services for Homes &amp; Businesses
              </h1>
              <p className="home-hero__sub" data-aos="fade-up" data-aos-duration={1000}>
                {brand.name} delivers safe, code-compliant electrical work — from panel upgrades and rewires to EV
                chargers and 24/7 emergency response. Master electricians, honest quotes, guaranteed craftsmanship.
              </p>

              <div className="home-hero__cta" data-aos="fade-up" data-aos-duration={1200}>
                <Link to="/contact" className="header-btn1">
                  Get A Free Estimate <FaArrowRight className="fa-solid" />
                </Link>
                <Link to="/service" className="header-btn2">
                  Our Services <FaArrowRight className="fa-solid" />
                </Link>
              </div>

              <div className="home-hero__proof" data-aos="fade-up" data-aos-duration={1400}>
                <div className="home-hero__avatars">
                  <img src={bottomhed} alt="Happy clients" />
                </div>
                <div className="home-hero__rating">
                  <ul>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                  </ul>
                  <p>
                    <span>4.9/5</span> from 2,400+ Clients
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeHero
