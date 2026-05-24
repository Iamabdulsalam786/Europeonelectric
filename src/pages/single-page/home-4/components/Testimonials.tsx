import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import tes7 from '@/assets/img/all-images/testimonial-img7.png'
import tes8 from '@/assets/img/all-images/testimonial-img8.png'
import tes9 from '@/assets/img/all-images/testimonial-img9.png'

const tesData = [
  { image: tes7, name: 'Dhruv Jerel', title: 'Scheduler' },
  { image: tes8, name: 'Alex Ross', title: 'Demand Planner' },
  { image: tes9, name: 'Tim Witsel', title: 'Logistics Officer' },
  { image: tes7, name: 'Dhruv Jerel', title: 'Scheduler' },
  { image: tes8, name: 'Alex Ross', title: 'Demand Planner' },
  { image: tes9, name: 'Tim Witsel', title: 'Logistics Officer' },
  { image: tes7, name: 'Dhruv Jerel', title: 'Scheduler' },
  { image: tes8, name: 'Alex Ross', title: 'Demand Planner' },
  { image: tes9, name: 'Tim Witsel', title: 'Logistics Officer' },
]

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="testimonial3-section-area sp1" id="testimonial">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="testimonial3-header heading6">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Testimonials
                </h5>
                <h2 className="tg-element-title">Hear from Our Satisfied Customers</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  Discover why our customers love our electricity services! Read testimonials from <br className="d-lg-block d-none" /> satisfied
                  clients who have experienced the reliability, efficiency,
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} data-aos="zoom-in" data-aos-duration={1000}>
              <div className="testimonial-slider-area owl-carousel">
                <Slider {...settings}>
                  {tesData.map((item, idx) => (
                    <div key={idx} className="testimonial-boxes">
                      <div className="img1">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="content-area">
                        <ul className='d-flex gap-1 justify-content-center'>
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
                          “From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support.
                          Explore their stories to learn”
                        </p>
                        <Link to="/team">{item.name}</Link>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Testimonials
