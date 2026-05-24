import bg from '@/assets/img/bg/header-bg1.png'
import circle from '@/assets/img/elements/circle2.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { FaArrowRight } from 'react-icons/fa6'
import Slider from 'react-slick'

import hed1 from '@/assets/img/all-images/header-img1.png'
import hed2 from '@/assets/img/all-images/header-img2.png'
import hed3 from '@/assets/img/all-images/header-img3.png'
import hed4 from '@/assets/img/all-images/header-img4.png'

export type HeroType = {
  image: string
  avatar: string
}
const heroData: HeroType[] = [
  { image: hed1, avatar: hed2 },
  { image: hed1, avatar: hed2 },
  { image: hed1, avatar: hed2 },
  { image: hed1, avatar: hed2 },
]

const hero2Data: HeroType[] = [
  { image: hed3, avatar: hed4 },
  { image: hed3, avatar: hed4 },
  { image: hed3, avatar: hed4 },
  { image: hed3, avatar: hed4 },
]

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    cssEase: 'linear',
  }
  const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    cssEase: 'linear',
  }
  return (
    <>
      <div
        className="hero2-section-area"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="hero-header heading3">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  Current Electricity Services
                </h5>
                <h1 className="tg-element-title">Your Life Reliable Electricity Services.</h1>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy
                  solutions.
                </p>
                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                  <Link to="/contact" className="header-btn3 btn2">
                    Get A Free Estimate <FaArrowRight className="fa-solid" />
                  </Link>
                  <Link to="/contact" className="header-btn4">
                    Discover More <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
                <div className="counter-header-area">
                  <div className="counter-area" data-aos="zoom-out" data-aos-duration={800}>
                    <h2>
                      <CountUp end={45} duration={10} start={0} className="counter"></CountUp>+
                    </h2>
                    <p>Contrives Reached</p>
                  </div>
                  <div className="counter-area" data-aos="zoom-out" data-aos-duration={1000}>
                    <h2>
                      <CountUp end={450} duration={10} start={0} className="counter"></CountUp>+
                    </h2>
                    <p>Projects Completed</p>
                  </div>
                  <div className="counter-area m-0" data-aos="zoom-out" data-aos-duration={1200}>
                    <h2>
                      <CountUp end={235} duration={10} start={0} className="counter"></CountUp>+
                    </h2>
                    <p>Qualified Sataff</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero2-images-area">
                <Row>
                  <Col lg={6} md={6}>
                    <div className="all-images-area">
                      <Slider {...settings}>
                        {heroData.map((item, idx) => (
                          <div key={idx} className="all-images">
                            <div className="images">
                              <img src={item.image} alt="" />
                            </div>
                            <div className="images">
                              <img src={item.avatar} alt="" />
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="space80 d-md-block d-none" />
                    <img src={circle} alt="" className="circle2 keyframe5" />
                    <div className="all-images-area2">
                      <Slider {...settings2}>
                        {hero2Data.map((item, idx) => (
                          <div key={idx} className="all-images">
                            <div className="images">
                              <img src={item.image} alt="" />
                            </div>
                            <div className="images">
                              <img src={item.avatar} alt="" />
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
