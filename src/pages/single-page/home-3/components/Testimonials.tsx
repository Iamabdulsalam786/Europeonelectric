import img3 from '@/assets/img/all-images/testimonial-img6.png'
import { Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'

const tesData = [
  {
    comment:
      "Discover why our customers love us! At Current, we take pride in providing exceptional electricity services that exceed expectations. But don't just take our word for it - hear what our satisfied customers have to say. From homeowners",
    name: 'Junaid Hasan',
    title: 'Happy Client',
  },
  {
    comment:
      "Discover why our customers love us! At Current, we take pride in providing exceptional electricity services that exceed expectations. But don't just take our word for it - hear what our satisfied customers have to say. From homeowners",
    name: 'Junaid Hasan',
    title: 'Happy Client',
  },
  {
    comment:
      "Discover why our customers love us! At Current, we take pride in providing exceptional electricity services that exceed expectations. But don't just take our word for it - hear what our satisfied customers have to say. From homeowners",
    name: 'Junaid Hasan',
    title: 'Happy Client',
  },
  {
    comment:
      "Discover why our customers love us! At Current, we take pride in providing exceptional electricity services that exceed expectations. But don't just take our word for it - hear what our satisfied customers have to say. From homeowners",
    name: 'Junaid Hasan',
    title: 'Happy Client',
  },
  {
    comment:
      "Discover why our customers love us! At Current, we take pride in providing exceptional electricity services that exceed expectations. But don't just take our word for it - hear what our satisfied customers have to say. From homeowners",
    name: 'Junaid Hasan',
    title: 'Happy Client',
  },
]

const testimonialData = [{ image: img3 }, { image: img3 }, { image: img3 }, { image: img3 }, { image: img3 }, { image: img3 }]

const Testimonials = () => {
  const [nav1, setNav1] = useState<Slider>()
  const [nav2, setNav2] = useState<Slider>()
  const sliderRef1 = useRef<Slider | null>(null)
  const sliderRef2 = useRef<Slider | null>(null)

  useEffect(() => {
    setNav1(sliderRef1.current!)
    setNav2(sliderRef2.current!)
  }, [])

  const settings1 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  }

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="testimonial2-section-area sp1">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="testimonial-header heading4">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  Testimonials
                </h5>
                <h2 className="tg-element-title">Powerful Praise Hear from Our Customers</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  From homeowners to businesses, <br className="d-lg-block d-none" /> our clients have experienced the
                  <br className="d-lg-block d-none" /> reliability, affordability.
                </p>
                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                  <Link to="/testimonials" className="header-btn3">
                    View all reviews <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8} data-aos="zoom-out" data-aos-duration={1000}>
              <div className="testimonial-sliders">
                <Row className="align-items-center">
                  <Col lg={4} md={6}>
                    <div className="teimonial-slider-nav-area foter-carousel">
                      <Slider ref={sliderRef1} asNavFor={nav2} {...settings1}>
                        {testimonialData.map((item, idx) => (
                          <div key={idx} className="testimonial-slider-img">
                            <img height={362} src={item.image} alt="" className='img-fluid' />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </Col>
                  <Col lg={8} md={6}>
                    <div className="testimonial-content-slider slider-nav1">
                      <Slider ref={sliderRef2} asNavFor={nav1} {...settings2}>
                        {tesData.map((item, idx) => (
                          <div key={idx} className="testimonial-slider-boxarea">
                            <ul className='d-flex gap-1'>
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
                            <div className="testimonial5-all-content">
                              <p>{item.comment}</p>
                            </div>
                            <div className="content">
                              <Link to="/team">{item.name}</Link>
                              <p>{item.title}</p>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="tes-slider-btns">
                      <button className="testimonial-prev" onClick={() => sliderRef1.current?.slickPrev()}>
                        <FaArrowLeft className="fa-regular" />
                      </button>
                      <button className="testimonial-next" onClick={() => sliderRef1.current?.slickPrev()}>
                        <FaArrowRight className="fa-regular" />
                      </button>
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

export default Testimonials
