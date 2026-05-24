import author1 from '@/assets/img/icons/auhtor1.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCalendarDays } from 'react-icons/fa6'

import blog7 from '@/assets/img/all-images/blog-img7.png'
import blog8 from '@/assets/img/all-images/blog-img8.png'
import blog9 from '@/assets/img/all-images/blog-img9.png'

const latesData = [
  { duration: 800, image: blog7, description: 'Electricity Empowerment: Insights & Innovations' },
  { duration: 1000, image: blog8, description: 'Energize Chronicles: Stories from the Energy Frontier' },
  { duration: 1200, image: blog9, description: 'Illuminate Intelligence: Bright Ideas in Energy' },
]

const Blog = () => {
  return (
    <>
      <div className="blog3-section-area sp2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="blog-header-area text-center heading6">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Latest News
                </h5>
                <h2 className="tg-element-title">Your Knowledge into Our Blog</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  From residential households to commercial enterprises, we provide <br className="d-lg-block d-none" /> reliable, efficient, and
                  sustainable energy solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {latesData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in" data-aos-duration={item.duration}>
                <div className="blog-boxes-area">
                  <div className="tags-area">
                    <div className="date">
                      <Link to="">
                        <FaCalendarDays />
                        16 April 2024
                      </Link>
                    </div>
                    <div className="contact">
                      <Link to="#">
                        <img src={author1} alt="" />
                        Dawid Malan
                      </Link>
                    </div>
                  </div>
                  <div className="content-area">
                    <Link to="/blog-single">{item.description}</Link>
                    <Link to="/blog-single" className="readmore">
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
