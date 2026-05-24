import brand from '@/config/brand'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import TopMenu from './components/TopMenu'
import MobileMenu from './MobileMenu'

const TopBar = () => {
  const { scrollY } = useScrollEvent()

  return (
    <>
      <header>
        <div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scrollY > 100 && 'sticky'}`} id="header">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="header-elements">
                  <div className="site-logo">
                    <Link to="/">
                      <img src={brand.logos.primary} alt="" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <TopMenu />
                  </div>
                  <div className="btn-area">
                    <Link to="/contact" className="header-btn1">
                      Contact Us <FaArrowRight className="fa-solid " />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <MobileMenu />
    </>
  )
}

export default TopBar
