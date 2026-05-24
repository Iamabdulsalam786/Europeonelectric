import img1 from '@/assets/img/all-images/work-img1.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

import work1 from '@/assets/img/icons/work1.svg'
import work2 from '@/assets/img/icons/work2.svg'
import work3 from '@/assets/img/icons/work3.svg'
import work4 from '@/assets/img/icons/work4.svg'

const workData = [
  { image: work1, title: 'Power Path Unveiling Our Process', name: 'pills-work1' },
  { image: work2, title: 'Electro Flow Decoding Our Method', name: 'pills-work2' },
  { image: work3, title: 'Energetic Engine Behind Scenes', name: 'pills-work3' },
  { image: work4, title: 'Watt Works Discover Operations', name: 'pills-work4' },
]

const tabpaneData = [
  { id: '1', title: 'Power Path Unveiling Our Process', name: 'pills-work1-tab' },
  { id: '2', title: 'Electro Flow Decoding Our Method', name: 'pills-work2-tab' },
  { id: '3', title: 'Energetic Engine Behind Scenes', name: 'pills-work3-tab' },
  { id: '4', title: 'Watt Works Discover Operations', name: 'pills-work4-tab' },
]

const Work = () => {
  return (
    <>
      <div className="work1-section-area sp1" id="work">
        <Container>
          <TabContainer defaultActiveKey="Power Path Unveiling Our Process">
            <Row>
              <Col lg={4}>
                <div className="work-header-area heading2">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    How it work
                  </h5>
                  <h2 className="tg-element-title">How to Work Our Electricity Service</h2>
                  <p data-aos="fade-left" data-aos-duration={1000}>
                    Throughout the process, transparency &amp; communication, keeping you informed.
                  </p>
                  <div className="tabs-list">
                    <Nav as={'ul'} className="nav-pills" id="pills-tab" role="tablist">
                      {(workData || []).map((item, idx) => {
                        return (
                          <NavItem
                            as={'li'}
                            key={idx}
                            className="nav-item"
                            role="presentation"
                            data-aos="fade-left"
                            data-aos-duration={800 + idx * 200}>
                            <NavLink
                              as={'button'}
                              eventKey={item.title}
                              id="pills-work1-tab"
                              data-bs-toggle="pill"
                              data-bs-target={item.name}
                              type="button"
                              role="tab"
                              aria-controls={item.name}
                              aria-selected="true">
                              <span className="workicons">
                                <img src={item.image} alt="" />
                              </span>
                              <span className="worktext">{item.title}</span>
                            </NavLink>
                          </NavItem>
                        )
                      })}
                    </Nav>
                  </div>
                </div>
              </Col>
              <Col lg={8}>
                <div className="works-author-area">
                  <TabContent id="pills-tabContent">
                    {(tabpaneData || []).map((item, idx) => {
                      return (
                        <TabPane
                          eventKey={item.title}
                          key={idx}
                          className="fade"
                          id={item.id}
                          role="tabpanel"
                          aria-labelledby={item.name}
                          tabIndex={0}>
                          <div className="works-side-area">
                            <div className="images reveal">
                              <img src={img1} alt="" />
                            </div>
                            <div className="content-area">
                              <Link to="/case-single" className="power tg-element-title">
                                {item.title}
                              </Link>
                              <p>
                                Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work
                                closely with you to develop.
                              </p>
                              <div className="btn-area">
                                <Link to="/case-single" className="header-btn1">
                                  Book A Consulation <FaArrowRight className="fa-solid" />
                                </Link>
                              </div>
                            </div>
                          </div>
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

export default Work
