import blog18 from '@/assets/img/all-images/blog-img18.png'
import blog19 from '@/assets/img/all-images/blog-img19.png'
import blog20 from '@/assets/img/all-images/blog-img20.png'
import blog21 from '@/assets/img/all-images/blog-img21.png'
import download1 from '@/assets/img/icons/download1.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaArrowRight,
  FaCalendarDays,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMagnifyingGlass,
  FaPhoneVolume,
  FaPinterestP,
  FaUser,
} from 'react-icons/fa6'

import blog1 from '@/assets/img/all-images/blog-img1.png'
import blog2 from '@/assets/img/all-images/blog-img2.png'
import blog3 from '@/assets/img/all-images/blog-img3.png'

const blogData = [
  {
    image: blog1,
    name: 'Ben Stokes',
    title: 'Electrifying Reads Explore Our Electricity',
    description:
      "Our team of experts is dedicated to delivering valuable content that empowers you to make informed decisions about your energy usage, while also showcasing the latest developments in the field. Whether you're a homeowner, business owner Whether you're interested in learning how to reduce your carbon ",
  },
  {
    image: blog2,
    name: 'Ben White',
    title: 'Empowering Energy Dive into Our Electricity',
    description:
      "Welcome to our comprehensive electricity services blog, where we delve deep into the world of energy to bring you valuable insights, practical tips, and thought-provoking discussions. Our blog covers a diverse range of topics, from the latest advancements.Whether you're interested in learning how to reduce your carbon footprint.",
  },
  {
    image: blog3,
    name: 'Ben Cutting',
    title: 'Electricity Explained: Bloggin Power of Tomorrow',
    description:
      "With regular updates and new articles published, there's always something fresh and exciting to discover in our blog. So, whether you're a seasoned energy enthusiast or just starting your journey towards a greener future, join us as we explore. Whether you're interested in learning how to reduce.",
  },
]

const Blog = () => {
  return (
    <>
      <div className="blog-leftside-section-area sp1">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog1-section-area">
                <Container>
                  <Row>
                    {blogData.map((item, idx) => (
                      <Col key={idx} lg={12} md={12}>
                        <div className="blog-auhtor-boxarea">
                          <div className="img1">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="blog-position">
                            <div className="blog-content-area">
                              <ul>
                                <li>
                                  <Link to="">
                                    <FaUser className="fa-solid" /> {item.name}
                                  </Link>
                                </li>
                                <li>
                                  <Link to="">
                                    <FaCalendarDays className="fa-solid" />
                                    April 2,2024
                                  </Link>
                                </li>
                              </ul>
                              <Link to="/blog-single" className="heading">
                                {item.title}
                              </Link>
                              <div className="space16" />
                              <p>{item.description}</p>
                              <div className="space24" />
                              <Link to="/blog-single" className="header-btn1">
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
                              <Link className="page-link" to="#" aria-label="Previous">
                                <FaAnglesLeft className="fa-solid fa-angles-left" />
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
                                ...
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                12
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
                    <div className="space50 d-lg-none d-block" />
                  </Row>
                </Container>
              </div>
            </Col>
            <Col g={4}>
              <div className="blog-auhtor-side-area">
                <div className="search-boxarea">
                  <h3>Search Post</h3>
                  <form action="#">
                    <input type="text" placeholder="Search here...." />
                    <button type="submit">
                      <FaMagnifyingGlass className="fa-solid" />
                    </button>
                  </form>
                </div>
                <div className="blog-author-list">
                  <h3>Our Categories</h3>
                  <ul>
                    <li>
                      <Link to="">
                        Voltage Vision <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Power Grid Expansion <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Best Power and Progress <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Electrifying Results <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Voltage Wave Energy <FaArrowRight className="fa-solid" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="recent-posts-area">
                  <h3>Recent Posts</h3>
                  <div className="recent-single-posts">
                    <div className="img1">
                      <img src={blog18} alt="" />
                    </div>
                    <div className="content">
                      <Link to="">
                        <FaCalendarDays className="fa-solid fa-calendar-days" /> 20 Apr, 2024
                      </Link>
                      <Link to="/blog-single" className="heading">
                        Empowering Energy Dive into Our Electricity
                      </Link>
                    </div>
                  </div>
                  <div className="recent-single-posts">
                    <div className="img1">
                      <img src={blog19} alt="" />
                    </div>
                    <div className="content">
                      <Link to="">
                        <FaCalendarDays className="fa-solid fa-calendar-days" /> 20 Apr, 2024
                      </Link>
                      <Link to="/blog-single" className="heading">
                        Bright Ideas: Unveiling Energy Innovations
                      </Link>
                    </div>
                  </div>
                  <div className="recent-single-posts">
                    <div className="img1">
                      <img src={blog20} alt="" />
                    </div>
                    <div className="content">
                      <Link to="">
                        <FaCalendarDays className="fa-solid fa-calendar-days" /> 20 Apr, 2024
                      </Link>
                      <Link to="/blog-single" className="heading">
                        Voltage Views lluminating Energy Perspectives
                      </Link>
                    </div>
                  </div>
                  <div className="recent-single-posts" style={{ paddingBottom: 0, border: 'none' }}>
                    <div className="img1">
                      <img src={blog21} alt="" />
                    </div>
                    <div className="content">
                      <Link to="">
                        <FaCalendarDays className="fa-solid fa-calendar-days" /> 20 Apr, 2024
                      </Link>
                      <Link to="/blog-single" className="heading">
                        Spark Solutions Exploring Energy Innovations
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="helping-area">
                  <h3>
                    If You Need Any Help <br className="d-lg-block d-none" /> Contact With Us
                  </h3>
                  <div className="btn-area">
                    <Link to="tel:+917052101786" className="header-btn1">
                      <FaPhoneVolume className="fa-solid fa-phone-volume" />
                      +91 705 2101 786
                    </Link>
                  </div>
                </div>
                <div className="tags-area">
                  <h3>Our Tags</h3>
                  <ul>
                    <li>
                      <Link to="">Electricity </Link>
                    </li>
                    <li>
                      <Link to="">Creative </Link>
                    </li>
                    <li>
                      <Link to="">Design </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="">Art </Link>
                    </li>
                    <li>
                      <Link to="">Development </Link>
                    </li>
                    <li>
                      <Link to="">Image </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="">People </Link>
                    </li>
                    <li>
                      <Link to="">Tech </Link>
                    </li>
                    <li>
                      <Link to="">3D Images </Link>
                    </li>
                  </ul>
                </div>
                <div className="download-broucher">
                  <h3>Download Brochure</h3>
                  <p>We also offer innovative solar financing packages, ensuring that the transition.</p>
                  <div className="btn-area">
                    <Link to="" className="header-btn1">
                      <img src={download1} alt="" />
                      Pdf Download
                    </Link>
                    <Link to="" className="header-btn2">
                      <img src={download1} alt="" />
                      Doc Download
                    </Link>
                  </div>
                </div>
                <div className="social-icons">
                  <h3>Follow Us</h3>
                  <ul>
                    <li>
                      <Link to="">
                        <FaFacebookF className="fa-brands" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaInstagram className="fa-brands" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaLinkedinIn className="fa-brands" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaPinterestP className="fa-brands" />
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

export default Blog
