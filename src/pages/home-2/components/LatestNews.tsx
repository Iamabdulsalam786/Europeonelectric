import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCalendarDays } from 'react-icons/fa6'
import { Link } from 'gatsby'

import blog10 from '@/assets/img/all-images/blog-img10.png'
import blog11 from '@/assets/img/all-images/blog-img11.png'
import blog12 from '@/assets/img/all-images/blog-img12.png'

const newsData = [
  {
    image: blog10,
    duration: 800,
    title: 'Exploring Energy Solutions Eco-Electric Insights',
    name: 'Welcome to our electricity services blog! Stay informed and inspired.',
  },
  {
    image: blog11,
    duration: 1000,
    title: 'Illuminating Energy Trends Power Perspectives',
    name: "Whether you're a homeowner looking to reduce your energy bills, a business",
  },
  {
    image: blog12,
    duration: 1200,
    title: 'Spark Connections: Engage with Our Energy ',
    name: 'Join us as we explore topics ranging from renewable energy sources.',
  },
]

const LatestNews = () => {
  return (
    <>
      <div className="blog4-section-area sp2">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="blog-header-area heading9 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Latest News
                </h5>
                <h2 className="tg-element-title">Electricity Explained Explore Our Blog</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  Our goal is to empower you with the knowledge and insights you need to make informed <br className="d-lg-block d-none" /> decisions
                  about your energy consumption and contribute to a greener
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {newsData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="flip-right" data-aos-duration={item.duration}>
                <div className="blog-auhtor-boxesarea">
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <Link to="/blog-single">{item.title}</Link>
                    <p>{item.name}</p>
                    <ul>
                      <li>
                        <Link to="">
                          <FaCalendarDays className="fa-solid fa-calendar-days" />
                          Apl 20,2024
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single" className="learnmore">
                          Learn More <FaArrowRight />
                        </Link>
                      </li>
                    </ul>
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

export default LatestNews
