import about3 from '@/assets/img/all-images/about-img3.png'
import about4 from '@/assets/img/all-images/about-img4.png'
import Aos from 'aos'
import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
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
      <div className="about2-section-area sp1">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-images-area" data-aos="zoom-out" data-aos-duration={1000}>
                <div className="img1">
                  <img src={about3} alt="" />
                </div>
                <div className="img2">
                  <img src={about4} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-header-area heading4">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  Why Choose Us
                </h5>
                <h2 className="tg-element-title">Illuminate Your Choice Reasons to Choose Us</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Because we're more than just an electricity provider – we're your trusted partner in power. With a commitment to reliability.
                </p>
                <div className="space40" />
                <div className="progress_bar" data-aos="fade-left" data-aos-duration={1200}>
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
                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                  <Link to="/about" className="header-btn3">
                    Find Out More <FaArrowRight className="fa-solid" />
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

export default About
