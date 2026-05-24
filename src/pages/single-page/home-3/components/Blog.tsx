import img4 from '@/assets/img/all-images/blog-img4.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCalendarDays, FaTag } from 'react-icons/fa6'

import blog5 from '@/assets/img/all-images/blog-img5.png'
import blog6 from '@/assets/img/all-images/blog-img6.png'

const blogData = [
  { image: blog5, title: 'Electrifying Reads Explore Our Electricity' },
  { image: blog6, title: 'Electrifying Reads Explore Our Electricity' },
]

const Blog = () => {
  return (
    <>
      <div className="blog2-section-area sp2" id="blog">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="blog-header heading4 text-center">
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
            <Col lg={5} md={6} data-aos="flip-left" data-aos-duration={800}>
              <div className="blog-auhtor-boxarea">
                <div className="img1">
                  <img src={img4} alt="" />
                </div>
                <div className="blog-content-area">
                  <ul>
                    <li>
                      <Link to="">
                        <FaCalendarDays className="fa-solid" />
                        April 2,2024
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaTag className="fa-solid" />
                        Electricity Corner
                      </Link>
                    </li>
                  </ul>
                  <Link to="/blog-single" className="heading">
                    Electrifying Reads Explore Our Electricity
                  </Link>
                  <Link to="/blog-single" className="learnmore">
                    Learn more <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={7} md={6} data-aos="flip-right" data-aos-duration={1000}>
              {blogData.map((item, idx) => (
                <div key={idx} className="blog-box2">
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="blog-content-area">
                    <ul>
                      <li>
                        <Link to="">
                          <FaCalendarDays className="fa-solid" />
                          April 2,2024
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaTag className="fa-solid" />
                          Electricity Corner
                        </Link>
                      </li>
                    </ul>
                    <Link to="/blog-single" className="heading">
                      {item.title}
                    </Link>
                    <Link to="/blog-single" className="learnmore">
                      Learn more <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
