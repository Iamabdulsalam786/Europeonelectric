import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaPinterestP, FaPlus, FaYoutube } from 'react-icons/fa6'

import team1 from '@/assets/img/all-images/team-img1.png'
import team2 from '@/assets/img/all-images/team-img2.png'
import team3 from '@/assets/img/all-images/team-img3.png'
import team4 from '@/assets/img/all-images/team-img4.png'

const teamData = [
  { image: team1, name: 'Shoaib Bashir', role: 'Sales Manager' },
  { image: team2, name: 'William Thompson', role: 'Product Manager' },
  { image: team3, name: 'Reece Toply', role: 'Team Leader' },
  { image: team4, name: 'Robert Anderson', role: 'Sales Manager' },
]

const Team = () => {
  return (
    <>
      <div className="team1-section-area sp2" id="team">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="team-header-area heading2 text-center">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  Our Team
                </h5>
                <h2 className="tg-element-title">Electricity Service Offerings</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {teamData.map((item, idx) => (
              <Col key={idx} lg={3} md={6}>
                <div className="team-auhtor-boxarea">
                  <div className="images">
                    <img src={item.image} alt="" />
                    <div className="team-social-area">
                      <div className="icons">
                        <Link to="" className="plus">
                          <FaPlus className="fa-solid" />
                        </Link>
                        <ul>
                          <li>
                            <Link to="">
                              <FaInstagram className="fa-brands" />
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <FaFacebookF className="fa-brands" />
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <FaPinterestP className="fa-brands" />
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <FaYoutube className="fa-brands" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="content-area">
                    <Link to="/team">{item.name}</Link>
                    <p>{item.role}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Team
