import React from 'react'
import brand from '@/config/brand'
import useActiveSection from '@/hooks/useActiveSection'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'gatsby'
import SingleMobileMenu from './SingleMobileMenu'

const sectionIds = ['about', 'service', 'work', 'testimonial', 'team', 'blog']

const Header = () => {
  const { scrollY } = useScrollEvent()
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <header>
        <div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scrollY > 100 && 'sticky'}`} id="header">
          <Container>
            <Row>
              <Col lg={12}>
                <nav id="navbar-example2" className="navbar">
                  <div className="header-elements">
                    <div className="site-logo">
                      <Link to="/">
                        <img src={brand.logos.primary} alt="" />
                      </Link>
                    </div>
                    <div className="main-menu">
                      <ul>
                        {sectionIds.map((id) => (
                          <li key={id} className="nav-item">
                            <a href={`#${id}`} className={`nav-link ${activeSection === id ? 'active' : ''}`}>
                              <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="btn-area">
                      <Link to="/contact" className="header-btn1">
                        Contact Us <FaArrowRight className="fa-solid" />
                      </Link>
                    </div>
                  </div>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <SingleMobileMenu />
    </>
  )
}

export default Header
