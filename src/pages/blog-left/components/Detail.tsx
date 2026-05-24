import img18 from '@/assets/img/all-images/blog-img18.png'
import img19 from '@/assets/img/all-images/blog-img19.png'
import img20 from '@/assets/img/all-images/blog-img20.png'
import img21 from '@/assets/img/all-images/blog-img21.png'
import img23 from '@/assets/img/all-images/blog-img23.png'
import img24 from '@/assets/img/all-images/blog-img24.png'
import img25 from '@/assets/img/all-images/blog-img25.png'
import img26 from '@/assets/img/all-images/blog-img26.png'
import img27 from '@/assets/img/all-images/blog-img27.png'
import img28 from '@/assets/img/all-images/blog-img28.png'
import download from '@/assets/img/icons/download1.svg'
import share from '@/assets/img/icons/share.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
  FaArrowRight,
  FaCalendarDays,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMagnifyingGlass,
  FaPhoneVolume,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa6'

const Details = () => {
  return (
    <>
      <div className="blog-leftside-section-area sp8">
        <Container>
          <Row>
            <Col lg={4}>
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
                      <img src={img18} alt="" />
                    </div>
                    <div className="content">
                      <Link to="">
                        <FaCalendarDays className="fa-solid" /> 20 Apr, 2024
                      </Link>
                      <Link to="/blog-single" className="heading">
                        Empowering Energy Dive into Our Electricity
                      </Link>
                    </div>
                  </div>
                  <div className="recent-single-posts">
                    <div className="img1">
                      <img src={img19} alt="" />
                    </div>
                    <div className="content">
                      <Link to="">
                        <FaCalendarDays className="fa-solid" /> 20 Apr, 2024
                      </Link>
                      <Link to="/blog-single" className="heading">
                        Bright Ideas: Unveiling Energy Innovations
                      </Link>
                    </div>
                  </div>
                  <div className="recent-single-posts">
                    <div className="img1">
                      <img src={img20} alt="" />
                    </div>
                    <div className="content">
                      <Link to="">
                        <FaCalendarDays className="fa-solid" /> 20 Apr, 2024
                      </Link>
                      <Link to="/blog-single" className="heading">
                        Voltage Views lluminating Energy Perspectives
                      </Link>
                    </div>
                  </div>
                  <div className="recent-single-posts" style={{ paddingBottom: 0, border: 'none' }}>
                    <div className="img1">
                      <img src={img21} alt="" />
                    </div>
                    <div className="content">
                      <Link to="">
                        <FaCalendarDays className="fa-solid" /> 20 Apr, 2024
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
                      <FaPhoneVolume />
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
                      <img src={download} alt="" />
                      Pdf Download
                    </Link>
                    <Link to="" className="header-btn2">
                      <img src={download} alt="" />
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
            <Col lg={8}>
              <div className="blog-leftside-area heading2">
                <div className="blog-left-heading heading2">
                  <div className="img1">
                    <img src={img23} alt="" />
                  </div>
                </div>
                <div className="space48" />
                <div className="left-heading2 heading2">
                  <h3>Electricity Services That Illuminate Your World:</h3>
                  <div className="space16" />
                  <p>
                    Our team of experts is dedicated to delivering valuable content that empowers you to make informed decisions about your energy
                    usage, while also showcasing the latest developments in the field. Whether you're a homeowner, business owner
                  </p>
                  <div className="space16" />
                  <p>
                    Passionate about sustainability, our blog has something for everyone. So, grab a cup of coffee, explore our articles, and join us
                    on a journey to a brighter, more sustainable future.
                  </p>
                </div>
                <div className="space48" />
                <div className="left-heading2 heading2">
                  <h3>Empower Your World: Unleash the Power</h3>
                  <div className="space16" />
                  <p>
                    Welcome to our comprehensive electricity services blog, where we delve deep into the world of energy to bring you valuable
                    insights, practical tips, and thought-provoking discussions. Our blog covers a diverse range of topics, from the latest
                    advancements
                  </p>
                  <div className="space16" />
                  <p>
                    Whether you're interested in learning how to reduce your carbon footprint, exploring the benefits of solar power, or staying
                    up-to-date with industry news and regulations,
                  </p>
                </div>
                <div className="space18" />
                <Row>
                  <Col lg={6} md={6}>
                    <div className="space30" />
                    <div className="img1">
                      <img src={img24} alt="" />
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="space30" />
                    <div className="img1">
                      <img src={img25} alt="" />
                    </div>
                  </Col>
                </Row>
                <div className="space32" />
                <p>
                  With regular updates and new articles published, there's always something fresh and exciting to discover in our blog. So, whether
                  you're a seasoned energy enthusiast or just starting your journey towards a greener future, join us as we explore
                </p>
                <div className="space48" />
                <div className="tags-share-area">
                  <div className="tags">
                    <h4>Our Tags:</h4>
                    <ul>
                      <li>
                        <Link to="">Science</Link>
                      </li>
                      <li>
                        <Link to="">creative</Link>
                      </li>
                      <li>
                        <Link to="">development</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="share">
                    <h4>Share:</h4>
                    <ul>
                      <li>
                        <Link to="">
                          <FaFacebookF className="fa-brands" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaLinkedinIn className="fa-brands" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaYoutube className="fa-brands" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaInstagram className="fa-brands" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space48" />
                <div className="heading2">
                  <h3>Comments (2)</h3>
                  <div className="space16" />
                  <div className="comments-boxarea">
                    <div className="comment-auhtor-box">
                      <div className="all-content">
                        <div className="img1">
                          <img src={img26} alt="" />
                        </div>
                        <div className="content-area">
                          <Link to="">Matthew Larson</Link>
                          <Link to="" className="date">
                            15 March, 2023
                          </Link>
                        </div>
                      </div>
                      <div className="reply">
                        <a>
                          <img src={share} alt="" />
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className="space16" />
                    <p>
                      Welcome to our comprehensive electricity services blog, where we delve deep into the world of energy to bring you valuable
                      insights, practical tips, and thought-provoking discussions. Introductory sentence, sets the tone for the blog's
                    </p>
                  </div>
                  <div className="space32" />
                  <div className="comments-boxarea boxarea2">
                    <div className="comment-auhtor-box">
                      <div className="all-content">
                        <div className="img1">
                          <img src={img27} alt="" />
                        </div>
                        <div className="content-area">
                          <Link to="">Shakib Mahmud</Link>
                          <Link to="" className="date">
                            15 March, 2023
                          </Link>
                        </div>
                      </div>
                      <div className="reply">
                        <a>
                          <img src={share} alt="" />
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className="space16" />
                    <p>
                      Our blog covers a diverse range of topics, from the latest advancements in renewable energy technology to energy efficiency
                      hacks for your home or business. Whether you're interested in learning how to reduce
                    </p>
                  </div>
                  <div className="space32" />
                  <div className="comments-boxarea">
                    <div className="comment-auhtor-box">
                      <div className="all-content">
                        <div className="img1">
                          <img src={img28} alt="" />
                        </div>
                        <div className="content-area">
                          <Link to="">Matthew Anderson</Link>
                          <Link to="" className="date">
                            15 March, 2023
                          </Link>
                        </div>
                      </div>
                      <div className="reply">
                        <a>
                          <img src={share} alt="" />
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className="space16" />
                    <p>
                      Our team of experts is committed to providing you with accurate, relevant, and engaging content that empowers you to take
                      control of your energy consumption and make informed decisions there's always something fresh
                    </p>
                  </div>
                </div>
                <div className="space32" />
                <div className="contact-submit-boxarea">
                  <h4>Leave a Reply</h4>
                  <p> Welcome to a space where every click brings you closer to a world powered </p>
                  <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" defaultValue="0cd32fff-eda2-4da3-be43-37d47fbb396b" />
                    <Row>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="First Name" required />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="Last Name" required />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="email" placeholder="Email" required />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="number" placeholder="Phone" required />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area">
                          <input type="text" placeholder="Subject" required />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area">
                          <textarea placeholder="Message" cols={30} rows={10} required />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area1">
                          <button type="submit" className="header-btn1">
                            Submit Now <FaArrowRight className="fa-solid" />
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Details
