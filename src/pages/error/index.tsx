import error from '@/assets/img/all-images/error.png'
import img1 from '@/assets/img/bg/header-img1.png'
import MainLayout from '@/components/layout/MainLayout'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa6'

const Error = () => {
  return (
    <>
      <MainLayout>
        <div>
          <div className="hero1-section-area about-bg-area">
            <img src={img1} alt="" className="header-img1" />
            <Container>
              <Row>
                <Col lg={8} className="m-auto">
                  <div className="hero-heading-area heading1 text-center">
                    <h1>404 Error</h1>
                    <Link to="/" className="backline">
                      Home <FaAngleRight className="fa-solid fa-angle-right" />
                      <span>404 Error</span>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="error-section-area sp1">
            <Container>
              <Row>
                <Col lg={8} className="m-auto">
                  <div className="error-content-area text-center">
                    <div className="img1">
                      <img src={error} alt="" />
                    </div>
                    <div className="space48" />
                    <div className="content-area heading2">
                      <h2> Sorry, Page Not Found!</h2>
                      <p>
                        Sorry, the page you are looking for doesn’t exist or has <br className="d-lg-block d-none" /> been moved. Here are some
                        helpful links.
                      </p>
                      <div className="space8" />
                      <div className="btn-area">
                        <Link to="/" className="header-btn1">
                          Take Me Home <FaArrowRight className="fa-solid" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Error

export { Head } from '@/components/PageMeta'
