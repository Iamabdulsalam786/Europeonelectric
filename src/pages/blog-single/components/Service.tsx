import img23 from '@/assets/img/all-images/blog-img23.png'
import img24 from '@/assets/img/all-images/blog-img24.png'
import img25 from '@/assets/img/all-images/blog-img25.png'
import img26 from '@/assets/img/all-images/blog-img26.png'
import img27 from '@/assets/img/all-images/blog-img27.png'
import img28 from '@/assets/img/all-images/blog-img28.png'
import share from '@/assets/img/icons/share.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

const Service = () => {
  return (
    <>
      <div className="blog-leftside-section-area sp8">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="blog-leftside-area heading2 blog-singleside">
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
                        <Link to="#">Science</Link>
                      </li>
                      <li>
                        <Link to="#">creative</Link>
                      </li>
                      <li>
                        <Link to="#">development</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="share">
                    <h4>Share:</h4>
                    <ul>
                      <li>
                        <Link to="">
                          <FaFacebookF className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaLinkedinIn className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaYoutube className="fa-brands fa-youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaInstagram className="fa-brands fa-instagram" />
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
                          <Link to="#">Matthew Larson</Link>
                          <Link to="#" className="date">
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
                          <Link to="#">Shakib Mahmud</Link>
                          <Link to="#" className="date">
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
                          <Link to="#">Matthew Anderson</Link>
                          <Link to="#" className="date">
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

export default Service
