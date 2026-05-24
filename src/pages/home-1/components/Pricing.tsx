import React from 'react'
import check from '@/assets/img/icons/check2.svg'
import useToggle from '@/hooks/useToggle'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'gatsby'

const Pricing = () => {
  const { isOpen, toggle } = useToggle()

  const [isMonthly, setIsMonthly] = useState(true)

  const handleToggleChange = () => {
    setIsMonthly((prevState) => !prevState)
  }
  return (
    <>
      <div className="compare-palns-area sp2">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="compare-plan-header text-center heading2">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Pricing Plan
                </h5>
                <h2 className="tg-element-title">Watt Wise Pricing Best Solutions</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  That's why we offer a range of pricing plans designed to suit <br /> individual needs &amp; budget.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <div className={`plan-toggle-wrap ${isOpen ? 'active' : ''}`}>
                <div className="toggle-inner" data-aos="fade-up" data-aos-duration={1000}>
                  <input id="ce-toggle" onClick={toggle} checked={isMonthly} onChange={handleToggleChange} type="checkbox" />
                  <span className="custom-toggle" />
                  <div className="t-month">
                    <h4>Monthly</h4>
                  </div>
                  <div className="t-year">
                    <h4>
                      Yearly <span>(20% Save)</span>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="tab-content">
                {isMonthly ? (
                  <div id="monthly">
                    <Row>
                      <Col lg={4} md={6} data-aos="flip-right" data-aos-duration={800}>
                        <div className="single-pricing-area">
                          <div className="pricing-box">
                            <h3>Basic Pack</h3>
                            <p>Create interactive forms that connect to your workflow.</p>
                            <h2
                              data-hs-toggle-count='{
                              "target": "#toggle-count",
                              "min": 29,
                              "max": 99
                            }'>
                              $29/mo
                            </h2>
                            <p>Billed Yearly</p>
                            <Link to="/contact" className="header-btn1">
                              Get a Free Consultaion
                            </Link>
                            <h4>Everything you get with Basic</h4>
                            <ul>
                              <li>
                                <img src={check} alt="" />
                                Indoor/outdoor Lighting Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Appliance &amp; Fixture Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Unlimited Seats &amp; Role Access
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Annual Electrical Inspection
                              </li>
                              <li>
                                <img src={check} alt="" />
                                &nbsp;Inspection Ceiling Fan Installation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6} data-aos="flip-left" data-aos-duration={1000}>
                        <div className="single-pricing-area active">
                          <div className="pricing-box">
                            <h3>Premium Pack</h3>
                            <p>Create interactive forms that connect to your workflow.</p>
                            <h2
                              data-hs-toggle-count='{
                              "target": "#toggle-count",
                              "min": 199,
                              "max": 399
                            }'>
                              $199/mo
                            </h2>
                            <p>Billed Yearly</p>
                            <Link to="/contact" className="header-btn1">
                              Get a Free Consultaion
                            </Link>
                            <h4>Everything you get with Basic</h4>
                            <ul>
                              <li>
                                <img src={check} alt="" />
                                Indoor/outdoor Lighting Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Appliance &amp; Fixture Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Unlimited Seats &amp; Role Access
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Annual Electrical Inspection
                              </li>
                              <li>
                                <img src={check} alt="" />
                                &nbsp;Inspection Ceiling Fan Installation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6} data-aos="flip-right" data-aos-duration={1200}>
                        <div className="single-pricing-area">
                          <div className="pricing-box">
                            <h3>Stander Pack</h3>
                            <p>Create interactive forms that connect to your workflow.</p>
                            <h2
                              data-hs-toggle-count='{
                              "target": "#toggle-count",
                              "min": 259,
                              "max": 999
                            }'>
                              $259/mo
                            </h2>
                            <p>Billed Yearly</p>
                            <Link to="/contact" className="header-btn1">
                              Get a Free Consultaion
                            </Link>
                            <h4>Everything you get with Basic</h4>
                            <ul>
                              <li>
                                <img src={check} alt="" />
                                Indoor/outdoor Lighting Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Appliance &amp; Fixture Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Unlimited Seats &amp; Role Access
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Annual Electrical Inspection
                              </li>
                              <li>
                                <img src={check} alt="" />
                                &nbsp;Inspection Ceiling Fan Installation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div id="yearly">
                    <Row>
                      <Col lg={4} md={6}>
                        <div className="single-pricing-area">
                          <div className="pricing-box">
                            <h3>Basic Pack</h3>
                            <p>Create interactive forms that connect to your workflow.</p>
                            <h2>$99/yr</h2>
                            <p>Billed Yearly</p>
                            <Link to="/contact" className="header-btn1">
                              Get a Free Consultaion
                            </Link>
                            <h4>Everything you get with Basic</h4>
                            <ul>
                              <li>
                                <img src={check} alt="" />
                                Indoor/outdoor Lighting Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Appliance &amp; Fixture Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Unlimited Seats &amp; Role Access
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Annual Electrical Inspection
                              </li>
                              <li>
                                <img src={check} alt="" />
                                &nbsp;Inspection Ceiling Fan Installation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="single-pricing-area active">
                          <div className="pricing-box">
                            <h3>Premium Pack</h3>
                            <p>Create interactive forms that connect to your workflow.</p>
                            <h2>$399/yr</h2>
                            <p>Billed Yearly</p>
                            <Link to="/contact" className="header-btn1">
                              Get a Free Consultaion
                            </Link>
                            <h4>Everything you get with Basic</h4>
                            <ul>
                              <li>
                                <img src={check} alt="" />
                                Indoor/outdoor Lighting Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Appliance &amp; Fixture Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Unlimited Seats &amp; Role Access
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Annual Electrical Inspection
                              </li>
                              <li>
                                <img src={check} alt="" />
                                &nbsp;Inspection Ceiling Fan Installation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="single-pricing-area">
                          <div className="pricing-box">
                            <h3>Stander Pack</h3>
                            <p>Create interactive forms that connect to your workflow.</p>
                            <h2>$999/mo</h2>
                            <p>Billed Yearly</p>
                            <Link to="/contact" className="header-btn1">
                              Get a Free Consultaion
                            </Link>
                            <h4>Everything you get with Basic</h4>
                            <ul>
                              <li>
                                <img src={check} alt="" />
                                Indoor/outdoor Lighting Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Appliance &amp; Fixture Installation
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Unlimited Seats &amp; Role Access
                              </li>
                              <li>
                                <img src={check} alt="" />
                                Annual Electrical Inspection
                              </li>
                              <li>
                                <img src={check} alt="" />
                                &nbsp;Inspection Ceiling Fan Installation
                              </li>
                            </ul>
                          </div>
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

export default Pricing
