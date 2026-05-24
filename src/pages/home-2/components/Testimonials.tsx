import tes10 from '@/assets/img/all-images/testimonial-img10.png'
import tes11 from '@/assets/img/all-images/testimonial-img11.png'
import { Link } from 'gatsby'
import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'

const testimonialData = [
  { image: tes10, name: 'Richardson', title: 'Team Leader' },
  { image: tes11, name: 'Issuant Sharma', title: 'Team Leader' },
  { image: tes10, name: 'Richardson', title: 'Team Leader' },
  { image: tes11, name: 'Issuant Sharma', title: 'Team Leader' },
]

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    margin: 10,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="testimonial4-section-area sp1">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="testimonial-header heading9">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  Testimonials
                </h5>
                <h2 className="tg-element-title">Happy Customers Stories from</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Our team of experienced professionals is <br className="d-lg-block d-none" /> driven by a shared vision of creating a
                </p>
                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                  <Link to="/contact" className="header-btn7">
                    Contact Us <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="testimonial-slider-boxarea4 owl-carousel">
                <Slider ref={sliderRef} {...settings}>
                  {testimonialData.map((item, idx) => (
                    <div key={idx} className="tesimonial-slider">
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
                      <p>
                        “Discover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the
                        reliability, efficiency, and excellence”
                      </p>
                      <div className="auhtor-images">
                        <div className="img1">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="text">
                          <Link to="/team">{item.name}</Link>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="owl-nav">
                <button className="owl-prev" onClick={() => sliderRef.current?.slickPrev()}>
                  <FaArrowLeft className="fa-regular" />
                </button>
                <button className="owl-next" onClick={() => sliderRef.current?.slickNext()}>
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

export default Testimonials
