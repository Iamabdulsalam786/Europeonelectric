import brand from '@/config/brand'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import SiteMobileMenu from './SiteMobileMenu'
import SiteNav from './SiteNav'

const SiteHeader = () => {
  const { scrollY } = useScrollEvent()

  return (
    <>
      <header>
        <div className={`header-area homepage4 header header-sticky d-none d-lg-block ${scrollY > 100 ? 'sticky' : ''}`} id="header">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="header-elements">
                  <div className="site-logo">
                    <Link to="/">
                      <img src={brand.logos.dark} alt={brand.name} className="site-brand-logo" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <SiteNav />
                  </div>
                  <div className="btn-area">
                    <Link to="/contact" className="header-btn7">
                      Contact Us <FaArrowRight className="fa-solid" />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <SiteMobileMenu />
    </>
  )
}

export default SiteHeader
