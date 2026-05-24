import bottomhed from '@/assets/img/all-images/header-bottom.png'
import circle from '@/assets/img/elements/circle1.png'
import arrow1 from '@/assets/img/icons/arrow1.svg'
import { Link } from 'gatsby'
import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleUp, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import hero2 from '@/assets/img/bg/header-img2.png'
import hero3 from '@/assets/img/bg/header-img3.png'
import hero4 from '@/assets/img/bg/header-img4.png'

const heroData = [
  {
    image: hero4,
    title: 'Current Electricity Services',
    comment: 'Power for Seamless Electricity Solutions',
    description:
      " Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energysolutions that.",
  },
  {
    image: hero2,
    title: 'Current Electricity Services',
    comment: 'Power for Seamless Electricity Solutions',
    description:
      " Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energysolutions that.",
  },
  {
    image: hero3,
    title: 'Current Electricity Services',
    comment: 'Power for Seamless Electricity Solutions',
    description:
      " Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energysolutions that.",
  },
]

const Hero = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  }
  return (
    <>
      <div className="slider-header-carousel owl-carousel">
        <Slider ref={sliderRef} {...settings}>
          {heroData.map((item, idx) => (
            <div key={idx} className="hero1-section-area">
              <img src={item.image} alt="" className="header-img1" />
              <Container>
                <Row>
                  <Col lg={6}>
                    <div className="hero-heading-area heading1">
                      <h5>{item.title}</h5>
                      <h1 className="main-heading">{item.comment}</h1>
                      <p className="pera">{item.description}</p>
                      <div className="btn-area">
                        <Link to="/contact" className="header-btn1">
                          Get A Free Estimate <FaArrowRight className="fa-solid" />
                        </Link>
                        <Link to="/contact" className="header-btn2">
                          Discover More <FaArrowRight className="fa-solid" />
                        </Link>
                      </div>
                      <div className="header-bottom-images">
                        <div className="img1">
                          <img src={bottomhed} alt="" />
                        </div>
                        <div className="content">
                          <ul>
                            <li>
                              <FaStar className="fa-solid" />
                            </li>
                            <li>
                              <FaStar className="fa-solid" />
                            </li>
                            <li>
                              <FaStar className="fa-solid" />
                            </li>
                            <li>
                              <FaStar className="fa-solid" />
                            </li>
                            <li>
                              <FaStar className="fa-solid" />
                            </li>
                          </ul>
                          <p>
                            <span>4k</span>Happy Client
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="circle-arrow">
                      <Link to="">
                        <img src={circle} alt="" className="keyframe5 circle1" />
                        <img src={arrow1} alt="" className="arrow1" />
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </Slider>

        <div className="hero1-arrows">
          <div className="prev-arrow">
            <button onClick={() => sliderRef.current?.slickPrev()}>
              <FaAngleUp className="fa-solid" />
            </button>
          </div>
          <div className="next-arrow">
            <button onClick={() => sliderRef.current?.slickNext()}>
              <FaAngleDown className="fa-solid" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
