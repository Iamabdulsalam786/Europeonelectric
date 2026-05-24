import brand from '@/config/brand'
import useScrollEvent from '@/hooks/useScrollEvent'
import SiteMobileMenu from '@/components/layout/SiteMobileMenu'
import SiteNav from '@/components/layout/SiteNav'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const HomeHeader = () => {
  const { scrollY } = useScrollEvent()

  return (
    <>
      <header>
        <div
          className={`header-area homepage1 header header-sticky d-none d-lg-block ${scrollY > 100 ? 'sticky' : ''}`}
          id="header">
          <Container>
            <Row>
              <Col lg={12}>
                <nav id="navbar-example2" className="navbar">
                  <div className="header-elements">
                    <div className="site-logo">
                      <Link to="/" aria-label={brand.name}>
                        <img src={brand.logos.dark} alt={brand.name} className="site-brand-logo home-header-logo" />
                      </Link>
                    </div>
                    <div className="main-menu">
                      <SiteNav />
                    </div>
                    <div className="btn-area">
                      <Link to="/contact" className="header-btn1">
                        Free Estimate <FaArrowRight className="fa-solid" />
                      </Link>
                    </div>
                  </div>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <SiteMobileMenu logoSrc={brand.logos.dark} />
    </>
  )
}

export default HomeHeader
