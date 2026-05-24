import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAnglesLeft, FaAnglesRight, FaArrowRight } from 'react-icons/fa6'

import case1 from '@/assets/img/all-images/case-img1.png'
import case10 from '@/assets/img/all-images/case-img10.png'
import case11 from '@/assets/img/all-images/case-img11.png'
import case12 from '@/assets/img/all-images/case-img12.png'
import case13 from '@/assets/img/all-images/case-img13.png'
import case14 from '@/assets/img/all-images/case-img14.png'
import case15 from '@/assets/img/all-images/case-img15.png'
import case2 from '@/assets/img/all-images/case-img2.png'
import case3 from '@/assets/img/all-images/case-img3.png'

const caseData = [
  { image: case1, title: 'Electicity Solutions', name: 'Power Navigating' },
  { image: case2, title: 'Voltage Vision', name: 'Voltage Vision' },
  { image: case3, title: 'Wizard Unveiling', name: 'Wizard Unveiling' },
  { image: case10, title: 'Electicity Solutions', name: 'Current Chronicles' },
  { image: case11, title: 'Electicity Solutions', name: 'Bright Sparks' },
  { image: case12, title: 'Electicity Solutions', name: 'Electrical Endeavors' },
  { image: case13, title: 'Electicity Solutions', name: 'Power Portraits' },
  { image: case14, title: 'Electicity Solutions', name: 'Energy Evolution' },
  { image: case15, title: 'Electicity Solutions', name: 'Eco-Electric Epics' },
]

const Blog = () => {
  return (
    <>
      <div className="casestudy-inner-section-area sp1">
        <Container>
          <Row>
            {caseData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="case-author-boxarea">
                  <div className="imges">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="case-content">
                    <div className="text">
                      <p>{item.title}</p>
                      <Link to="/case-single">{item.name}</Link>
                    </div>
                    <div className="icons">
                      <Link to="/case-single">
                        <span>
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            <Col lg={12}>
              <div className="pagination-area">
                <div className="page">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Previous">
                        <FaAnglesLeft className="fa-solid fa-angles-left" />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Next">
                        <FaAnglesRight className="fa-solid fa-angles-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
