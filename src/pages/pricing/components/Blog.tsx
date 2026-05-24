import check5 from '@/assets/img/icons/check5.svg'
import xmark from '@/assets/img/icons/xmark.svg'
import useToggle from '@/hooks/useToggle'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Blog = () => {
  const { isOpen, toggle } = useToggle()

  const [isMonthly, setIsMonthly] = useState(true)

  const handleToggleChange = () => {
    setIsMonthly((prevState) => !prevState)
  }
  return (
    <>
      <div className="compareplan-section-area sp1">
        <Container>
          <Row>
            <Col xs={12}>
              <div className={`plan-toggle-wrap1 ${isOpen ? 'active' : ''}`} style={{ marginTop: 0 }}>
                <div className="toggle-inner" data-aos="fade-up" data-aos-duration={1000}>
                  <input id="ce-toggle" onClick={toggle} checked={isMonthly} onChange={handleToggleChange} type="checkbox" />
                  <span className="custom-toggle" />
                  <div className="t-month">
                    <h4>Monthly</h4>
                  </div>
                  <div className="t-year">
                    <h4>Yearly</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="tab-content">
                {isMonthly ? (
                  <div id="monthly1">
                    <Row>
                      <Col lg={12} md={12}>
                        <div className="single-pricing-area comparison">
                          <table>
                            <thead>
                              <tr>
                                <th className="tl tl2">
                                  Compare Features List <span>Save 32% with yearly billing.</span>
                                </th>
                                <th colSpan={1} className="qbo">
                                  Basic Pack
                                </th>
                                <th colSpan={1} className="qbo">
                                  Premium Pack
                                </th>
                                <th colSpan={1} className="qbo">
                                  Stander Pack
                                </th>
                              </tr>
                              <tr>
                                <th />
                                <th className="price-info hide-mobile">
                                  <div className="price-now">
                                    <span>$29</span>
                                  </div>
                                  <div>
                                    <Link to="" className="header-btn1">
                                      Get Started
                                    </Link>
                                  </div>
                                </th>
                                <th className="price-info hide-mobile">
                                  <div className="price-now">
                                    <span>$199</span>
                                  </div>
                                  <div>
                                    <Link to="" className="header-btn1">
                                      Get Started
                                    </Link>
                                  </div>
                                </th>
                                <th className="price-info hide-mobile">
                                  <div className="price-now">
                                    <span>$99</span>
                                  </div>
                                  <div>
                                    <Link to="" className="header-btn1">
                                      Get Started
                                    </Link>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td />
                                <td colSpan={3}>Unlimited access to every class</td>
                              </tr>
                              <tr className="compare-row">
                                <td>Electrical Inspection</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td />
                                <td colSpan={3}>Electricity Services</td>
                              </tr>
                              <tr className="compare-row">
                                <td>Electricity Services</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td colSpan={3}>Indoor/outdoor</td>
                              </tr>
                              <tr className="compare-row">
                                <td>Indoor/outdoor</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td colSpan={3}>12 Hours Support</td>
                              </tr>
                              <tr className="compare-row">
                                <td>12 Hours Support</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td colSpan={3}>Calendar View</td>
                              </tr>
                              <tr className="compare-row">
                                <td>Calendar View</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div id="yearly1">
                    <Row>
                      <Col lg={12} md={12}>
                        <div className="single-pricing-area comparison">
                          <table>
                            <thead>
                              <tr>
                                <th className="tl tl2">
                                  Compare Features List <span>Save 32% with yearly billing.</span>
                                </th>
                                <th colSpan={1} className="qbo">
                                  Basic Pack
                                </th>
                                <th colSpan={1} className="qbo">
                                  Premium Pack
                                </th>
                                <th colSpan={1} className="qbo">
                                  Stander Pack
                                </th>
                              </tr>
                              <tr>
                                <th />
                                <th className="price-info hide-mobile">
                                  <div className="price-now">
                                    <span>$99</span>
                                  </div>
                                  <div>
                                    <Link to="" className="header-btn1">
                                      Get Started
                                    </Link>
                                  </div>
                                </th>
                                <th className="price-info hide-mobile">
                                  <div className="price-now">
                                    <span>$499</span>
                                  </div>
                                  <div>
                                    <Link to="" className="header-btn1">
                                      Get Started
                                    </Link>
                                  </div>
                                </th>
                                <th className="price-info hide-mobile">
                                  <div className="price-now">
                                    <span>$299</span>
                                  </div>
                                  <div>
                                    <Link to="" className="header-btn1">
                                      Get Started
                                    </Link>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td />
                                <td colSpan={3}>Unlimited access to every class</td>
                              </tr>
                              <tr className="compare-row">
                                <td>Electrical Inspection</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td />
                                <td colSpan={3}>Electricity Services</td>
                              </tr>
                              <tr className="compare-row">
                                <td>Electricity Services</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td colSpan={3}>Indoor/outdoor</td>
                              </tr>
                              <tr className="compare-row">
                                <td>Indoor/outdoor</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td colSpan={3}>12 Hours Support</td>
                              </tr>
                              <tr className="compare-row">
                                <td>12 Hours Support</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td colSpan={3}>Calendar View</td>
                              </tr>
                              <tr className="compare-row">
                                <td style={{ padding: '25px 0 0 0' }}>Calendar View</td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={xmark} alt="" />
                                  </span>
                                </td>
                                <td>
                                  <span>
                                    <img src={check5} alt="" />
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
