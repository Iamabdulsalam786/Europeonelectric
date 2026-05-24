import case1 from '@/assets/img/all-images/case-img1.png'
import case2 from '@/assets/img/all-images/case-img2.png'
import case3 from '@/assets/img/all-images/case-img3.png'
import { Link } from 'gatsby'
import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Slider from 'react-slick'

const casestudyData = [
  { image: case1, name: 'Electicity Solutions', title: 'Power Navigating' },
  { image: case2, name: 'Voltage Vision', title: 'Power Navigating' },
  { image: case3, name: 'Wizard Unveiling', title: 'Power Navigating' },
  { image: case1, name: 'Electicity Solutions', title: 'Power Navigating' },
  { image: case2, name: 'Voltage Vision', title: 'Power Navigating' },
  { image: case3, name: 'Wizard Unveiling', title: 'Power Navigating' },
  { image: case1, name: 'Electicity Solutions', title: 'Power Navigating' },
  { image: case2, name: 'Voltage Vision', title: 'Power Navigating' },
  { image: case3, name: 'Wizard Unveiling', title: 'Power Navigating' },
]

const CaseStudy = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="casestudy-section-area sp1" id="case">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="casestudy-header heading4 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Case studies
                </h5>
                <h2 className="tg-element-title">Electricity Unveiled Explaining Our Service Process</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  Once we understand your requirements, our expert team swings into action, customizing a solution that's tailored just for you.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} data-aos="fade-up" data-aos-duration={1000}>
              <Slider ref={sliderRef} {...settings}>
                {casestudyData.map((item, idx) => (
                  <div key={idx} className="casestudy-slider-area owl-carousel">
                    <div className="case-author-boxarea">
                      <div className="imges">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="case-content">
                        <div className="text">
                          <p>{item.name}</p>
                          <Link to="/case-single">{item.title}</Link>
                        </div>
                        <div className="icons">
                          <Link to="/case-single">
                            <span>
                              <FaArrowRight className="fa-solid" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="casestudy-slider-btns">
                <button className="casestudy-prev" onClick={() => sliderRef.current?.slickPrev()}>
                  <FaArrowLeft className="fa-regular" />
                </button>
                <button className="casestudy-next" onClick={() => sliderRef.current?.slickNext()}>
                  <FaArrowRight className="fa-regular" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CaseStudy
