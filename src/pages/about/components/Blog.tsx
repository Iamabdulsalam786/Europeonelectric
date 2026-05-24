import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCalendarDays, FaTag } from 'react-icons/fa6'

import blog1 from '@/assets/img/all-images/blog-img1.png'
import blog2 from '@/assets/img/all-images/blog-img2.png'
import blog3 from '@/assets/img/all-images/blog-img3.png'

const blogData = [
  {
    duration: 800,
    flip: 'flip-left',
    image: blog1,
    title: 'Electrifying Reads Explore Our Electricity',
    comment: 'Are you considering studying abroad and embarking on an visa to',
  },
  {
    duration: 1000,
    flip: 'flip-right',
    image: blog2,
    title: 'Empowering Energy Dive into Our Electricity',
    comment: 'From understanding our pricing plans to learning about our renewable',
  },
  {
    duration: 1200,
    flip: 'flip-left',
    image: blog3,
    title: 'Electricity Explained: Bloggin Power of Tomorrow',
    comment: "We're committed to ensuring that you have all the information you need.",
  },
]

const Blog = () => {
  return (
    <>
      <div className="blog1-section-area sp2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="blog-header heading2 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Blog
                </h5>
                <h2> Electricity News &amp; Updates</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {blogData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos={item.flip} data-aos-duration={item.duration}>
                <div className="blog-auhtor-boxarea">
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="blog-position">
                    <Link to="/blog-single" className="heading">
                      {item.title}
                    </Link>
                    <div className="blog-content-area">
                      <ul>
                        <li>
                          <Link to="">
                            <FaCalendarDays className="fa-solid fa-calendar-days" />
                            April 2,2024
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaTag className="fa-solid fa-tag" />
                            Electricity Corner
                          </Link>
                        </li>
                      </ul>
                      <p>{item.comment}</p>
                      <Link to="/blog-single" className="learnmore">
                        Learn more <FaArrowRight className="fa-solid" />
                      </Link>
                    </div>
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
