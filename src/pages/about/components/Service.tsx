import React from "react";
import img3 from '@/assets/img/all-images/about-img3.png'
import img4 from '@/assets/img/all-images/about-img4.png'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'gatsby'

const Service = () => {
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [progress3, setProgress3] = useState(0)

  useEffect(() => {
    Aos.init({ once: true })

    const animateProgress = (setFunc: (val: number) => void, target: number) => {
      let value = 0
      const interval = setInterval(() => {
        value += 1
        setFunc(value)
        if (value >= target) clearInterval(interval)
      }, 20)
    }

    animateProgress(setProgress1, 80)
    animateProgress(setProgress2, 90)
    animateProgress(setProgress3, 70)
  }, [])

  return (
    <>
      <div className="about2-section-area about-innerpage sp1">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-images-area">
                <div className="img1">
                  <img src={img3} alt="" />
                </div>
                <div className="img2">
                  <img src={img4} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-header-area heading2">
                <h5>Why Choose Us</h5>
                <h2 className="tg-element-title">Illuminate Your Choice Reasons to Choose Us</h2>
                <p>Because we're more than just an electricity provider – we're your trusted partner in power. With a commitment to reliability.</p>
                <div className="space40" />
                <div className="progress_bar">
                  <div className="progress_bar_item grid-x">
                    <div className="item_label">AC installation in one hour</div>
                    <div className="item_value cell1">{progress1}%</div>
                    <div className="item_bar">
                      <ProgressBar now={progress1} className="animate-progress" />
                    </div>
                  </div>
                  <div className="progress_bar_item grid-x">
                    <div className="item_label">Full-service electrical</div>
                    <div className="item_value cell2">{progress2}%</div>
                    <div className="item_bar">
                      <ProgressBar now={progress2} className="animate-progress" />
                    </div>
                  </div>
                  <div className="progress_bar_item grid-x">
                    <div className="item_label">Wiring and installation</div>
                    <div className="item_value cell3">{progress3}%</div>
                    <div className="item_bar">
                      <ProgressBar now={progress3} className="animate-progress" />
                    </div>
                  </div>
                </div>
                <div className="btn-area">
                  <Link to="/about" className="header-btn1">
                    Find Out More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
