import demo1 from '@/assets/img/demo/demo-img1.png'
import demo2 from '@/assets/img/demo/demo-img2.png'
import demo3 from '@/assets/img/demo/demo-img3.png'
import demo4 from '@/assets/img/demo/demo-img4.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaAngleDown, FaArrowRight } from 'react-icons/fa6'

const TopMenu = () => {
  return (
    <>
      <ul className='mb-0'>
        <li>
          <Link to="">
            Home <FaAngleDown />
          </Link>
          <div className="tp-submenu">
            <Row>
              <Col lg={3}>
                <div className="homemenu-thumb">
                  <div className="img1">
                    <img src={demo1} alt="" />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1" to="/">
                      Multi Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                    <div className="space16" />
                    <Link className="header-btn1" to="/single-page/home-1" target="_blank">
                      One Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <Link to="/">Home 01</Link>
                </div>
              </Col>
              <Col lg={3}>
                <div className="homemenu-thumb">
                  <div className="img1">
                    <img src={demo2} alt="" />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1" to="/home-2">
                      Multi Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                    <div className="space16" />
                    <Link className="header-btn1" to="/single-page/home-2" target="_blank">
                      One Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <Link to="/home-2">Home 02</Link>
                </div>
              </Col>
              <Col lg={3}>
                <div className="homemenu-thumb">
                  <div className="img1">
                    <img src={demo3} alt="" />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1" to="/home-3">
                      Multi Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                    <div className="space16" />
                    <Link className="header-btn1" to="/single-page/home-3" target="_blank">
                      One Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <Link to="/home-3">Home 03</Link>
                </div>
              </Col>
              <Col lg={3}>
                <div className="homemenu-thumb">
                  <div className="img1">
                    <img src={demo4} alt="" />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1" to="/home-4">
                      Multi page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                    <div className="space16" />
                    <Link className="header-btn1" to="/single-page/home-4" target="_blank">
                      One Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <Link to="/home-4">Home 04</Link>
                </div>
              </Col>
            </Row>
          </div>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="">
            Services <FaAngleDown />
          </Link>
          <ul className="dropdown-padding">
            <li>
              <Link to="/service">Service One</Link>
            </li>
            <li>
              <Link to="/service-left">Service Left</Link>
            </li>
            <li>
              <Link to="/service-right">Service Right</Link>
            </li>
            <li>
              <Link to="/service-single">Service Single</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="">
            Blogs <FaAngleDown />
          </Link>
          <ul className="dropdown-padding">
            <li>
              <Link to="/blog">Blog One</Link>
            </li>
            <li>
              <Link to="/blog-sidebar">Blog Sidebar</Link>
            </li>
            <li>
              <Link to="/blog-left">Blog Left</Link>
            </li>
            <li>
              <Link to="/blog-right">Blog Right</Link>
            </li>
            <li>
              <Link to="/blog-single">Blog Single</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="">
            Pages <FaAngleDown />
          </Link>
          <ul className="dropdown-padding">
            <li>
              <Link to="/case">Case Study One</Link>
            </li>
            <li>
              <Link to="/case-left">Case Study Left</Link>
            </li>
            <li>
              <Link to="/case-right">Case Study Right</Link>
            </li>
            <li>
              <Link to="/case-single">Case Study Single</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing Plan</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/error">404</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  )
}

export default TopMenu
