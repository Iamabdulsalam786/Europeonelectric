import tes1 from '@/assets/img/all-images/testimonial-img1.png'
import tes2 from '@/assets/img/all-images/testimonial-img2.png'
import tes3 from '@/assets/img/all-images/testimonial-img3.png'
import tes4 from '@/assets/img/all-images/testimonial-img4.png'
import tes5 from '@/assets/img/all-images/testimonial-img5.png'
import quito from '@/assets/img/icons/quito1.svg'
import { Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

type TestimonialType = {
  image: string
  duration?: number
}

type SliderType = {
  image: string
  name: string
}

const sliderData: SliderType[] = [
  { image: tes2, name: 'Shakib Mahmud' },
  { image: tes3, name: 'Shakib Mahmud' },
  { image: tes4, name: 'Shakib Mahmud' },
  { image: tes5, name: 'Shakib Mahmud' },
  { image: tes1, name: 'Shakib Mahmud' },
  { image: tes2, name: 'Shakib Mahmud' },
  { image: tes3, name: 'Shakib Mahmud' },
  { image: tes4, name: 'Shakib Mahmud' },
  { image: tes5, name: 'Shakib Mahmud' },
  { image: tes2, name: 'Shakib Mahmud' },
  { image: tes1, name: 'Shakib Mahmud' },
  { image: tes2, name: 'Shakib Mahmud' },
  { image: tes3, name: 'Shakib Mahmud' },
  { image: tes4, name: 'Shakib Mahmud' },
  { image: tes5, name: 'Shakib Mahmud' },
  { image: tes2, name: 'Shakib Mahmud' },
]

const testimonialData: TestimonialType[] = [
  { image: tes1 },
  { image: tes5 },
  { image: tes3 },
  { image: tes4 },
  { image: tes1 },
  { image: tes5 },
  { image: tes5 },
  { image: tes3 },
  { image: tes4 },
  { image: tes3 },
  { image: tes4 },
  { image: tes1 },
  { image: tes5 },
  { image: tes3 },
  { image: tes4 },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(0)
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
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setPreviousIndex(oldIndex)
      setActiveIndex(newIndex)
    },
  }

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="testimonial1-section-area sp1" id="testimonial">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="testimonial-header heading2">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  Testimonials
                </h5>
                <h2 className="tg-element-title">Powerful Praise Hear from Our Customers</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  We take pride in providing top-notch <br className="d-lg-block d-none" /> electricity services that exceed our
                  <br className="d-lg-block d-none" /> customers' expectations.
                </p>
                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                  <Link to="/testimonials" className="header-btn1">
                    View all reviews <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="testimonial-vertical-slider">
                <Row>
                  <Col lg={10}>
                    <div className="slider-galeria">
                      <Slider ref={sliderRef2} asNavFor={nav1} {...settings2}>
                        {sliderData.map((item, idx) => (
                          <div key={idx} className="testimonial3-slider-content-area">
                            <div className="testimonial3-author-area">
                              <ul>
                                <li>
                                  <Link to="">
                                    <FaStar className="fa-solid" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="">
                                    <FaStar className="fa-solid" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="">
                                    <FaStar className="fa-solid" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="">
                                    <FaStar className="fa-solid" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="">
                                    <FaStar className="fa-solid" />
                                  </Link>
                                </li>
                              </ul>
                              <img src={quito} alt="" className="quito1" />
                              <p>
                                “But don't just take our word for it – hear what our best satisfied customers have to say! From homeowners to
                                businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work
                                we've helped businesses thrive client.
                              </p>
                            </div>
                            <div className="testimonial1-man-info-area">
                              <div className="mans-img">
                                <img src={item.image} alt="" />
                              </div>
                              <div className="man-text">
                                <Link to="/team">{item.name}</Link>
                                <p>Happy Client</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </Col>
                  <Col lg={2}>
                    <div className="slider-galeria-thumbs text-center d-lg-block d-none">
                      <Slider ref={sliderRef1} asNavFor={nav2} {...settings1}>
                        {testimonialData.map((item, idx) => (
                          <div
                            key={idx}
                            className={`testimonial1-sliders-img ${idx === activeIndex ? 'active-thumb' : idx === previousIndex ? 'previous-thumb' : ''}`}>
                            <img src={item.image} alt="" />
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

export default Testimonials
