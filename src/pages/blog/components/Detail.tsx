import blog1 from '@/assets/img/all-images/blog-img1.png'
import blog13 from '@/assets/img/all-images/blog-img13.png'
import blog14 from '@/assets/img/all-images/blog-img14.png'
import blog15 from '@/assets/img/all-images/blog-img15.png'
import blog16 from '@/assets/img/all-images/blog-img16.png'
import blog17 from '@/assets/img/all-images/blog-img17.png'
import blog18 from '@/assets/img/all-images/blog-img18.png'
import blog2 from '@/assets/img/all-images/blog-img2.png'
import blog3 from '@/assets/img/all-images/blog-img3.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAnglesLeft, FaAnglesRight, FaArrowRight, FaCalendarDays, FaTag } from 'react-icons/fa6'

const blogData = [
  {
    image: blog1,
    title: 'Electrifying Reads Explore Our Electricity',
    description: 'Are you considering studying abroad and embarking on an visa to',
  },
  {
    image: blog2,
    title: 'Empowering Energy Dive into Our Electricity',
    description: 'From understanding our pricing plans to learning about our renewable',
  },
  {
    image: blog3,
    title: 'Electricity Explained: Bloggin Power of Tomorrow',
    description: "We're committed to ensuring that you have all the information you need.",
  },
  {
    image: blog13,
    title: 'Eco-Electric Edits Your Source Energy News',
    description: 'So, grab a cup of coffee, explore our articles, and join us on a journey',
  },
  {
    image: blog14,
    title: 'Empowerment Energy Unleash Your Potential',
    description: 'Our team of experts is dedicated to delivering valuable content that',
  },
  {
    image: blog15,
    title: 'Voltage Views Illuminating Energy Perspectives',
    description: 'Dive into our blog to discover a wide range of topics, including energy',
  },
  {
    image: blog16,
    title: 'Wired Wisdom: Insights from the Energy Experts',
    description: 'Our team of experts is committed to providing you with accurate,',
  },
  {
    image: blog17,
    title: 'Bright Ideas: Unveiling Energy Innovations',
    description: "With regular updates and new articles published, there's always something",
  },
  {
    image: blog18,
    title: 'Spark Solutions: Exploring Energy Innovations',
    description: "So, whether you're a seasoned energy enthusiast or just starting",
  },
]

const Detail = () => {
  return (
    <>
      <div className="blog1-section-area sp1">
        <Container>
          <Row>
            {blogData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
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
                            <FaCalendarDays className="fa-solid" />
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
                      <p>{item.description}</p>
                      <Link to="/blog-single" className="learnmore">
                        Learn more <FaArrowRight className="fa-solid" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}

            <Col lg={12}>
              <div className="pagination-area">
                <div className="page">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="" aria-label="Previous">
                        <FaAnglesLeft className="fa-solid" />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Next">
                        <FaAnglesRight className="fa-solid fa-angles-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Detail
