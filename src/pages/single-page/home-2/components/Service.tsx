import mission from '@/assets/img/all-images/mission-img1.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const missionData = [
  { duration: 800, id: 'pills-mission2-tab', title: 'Our Mission' },
  { duration: 1000, id: 'pills-mission2-tab', title: 'Our Vision' },
  { duration: 1200, id: 'pills-mission3-tab', title: 'Our Golds' },
]

const Service = () => {
  return (
    <>
      <div className="mission-section-area sp1">
        <Container>
          <TabContainer defaultActiveKey="Our Mission">
            <Row>
              <Col lg={8} className="m-auto">
                <div className="mission-header-area heading9 text-center">
                  <h5 data-aos="fade-up" data-aos-duration={800}>
                    Our Mission
                  </h5>
                  <h2 className="tg-element-title">Our Bold Mission in Electricity Services</h2>
                  <p data-aos="fade-up" data-aos-duration={1000}>
                    We are committed to providing innovative electricity services that not only meet the needs of <br className="d-lg-block d-none" />
                    today but also safeguard the environment for generations to come
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="tabs-auhtor-area">
                  <Nav as={'ul'} className="nav-pills" id="pills-tab" role="tablist">
                    {(missionData || []).map((item, idx) => {
                      return (
                        <NavItem key={idx} as={'li'} role="presentation" data-aos="zoom-in" data-aos-duration={item.duration}>
                          <NavLink
                            as={'button'}
                            eventKey={item.title}
                            id={item.id}
                            data-bs-toggle="pill"
                            type="button"
                            role="tab"
                            aria-selected="true">
                            {item.title}
                          </NavLink>
                        </NavItem>
                      )
                    })}
                  </Nav>
                  <TabContent id="pills-tabContent">
                    {(missionData || []).map((item, idx) => {
                      return (
                        <TabPane key={idx} eventKey={item.title} id={item.id} role="tabpanel" aria-labelledby={item.id} tabIndex={0}>
                          <Row className="align-items-center">
                            <Col lg={6}>
                              <div className="mission-img" data-aos="zoom-in" data-aos-duration={1000}>
                                <img src={mission} alt="" />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mission-content-area heading10">
                                <h3 className="tg-element-title">Empowering a Sustainable Future Electricity Services</h3>
                                <p data-aos="fade-left" data-aos-duration={900}>
                                  Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower
                                  communities, businesses, and individuals alike to embrace cleaner,
                                </p>
                                <p data-aos="fade-left" data-aos-duration={1000}>
                                  With every connection we make and every service we provide, we are driven by our passion for sustainability and our
                                  determination .
                                </p>
                                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                                  <Link to="/contact" className="header-btn7">
                                    Contact Us
                                    <FaArrowRight />
                                  </Link>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>
                      )
                    })}
                  </TabContent>
                </div>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </div>
    </>
  )
}

export default Service
