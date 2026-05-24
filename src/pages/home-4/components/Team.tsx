import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

import team5 from '@/assets/img/all-images/team-img5.png'
import team6 from '@/assets/img/all-images/team-img6.png'
import team7 from '@/assets/img/all-images/team-img7.png'

const teamData = [
  { image: team5, name: 'Kore Anderson', title: 'Team Leader' },
  { image: team6, name: 'Sean Williams', title: 'Client Analicist' },
  { image: team7, name: 'Tim Robinson', title: 'Team Manager' },
]

const Team = () => {
  return (
    <>
      <div className="team3-section-area sp2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="team-header-area text-center heading6">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Team
                </h5>
                <h2 data-aos="tg-element-title">Discover Our Dedicated Team</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  From our experienced technicians who ensure reliable installations to our knowledgeable customer service representatives who
                  provide.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {teamData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in" data-aos-duration={800 + idx * 200}>
                <div className="team-auhtor-boxes">
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <Link to="/team">{item.name}</Link>
                    <p>{item.title}</p>
                    <ul>
                      <li>
                        <Link to="">
                          <FaFacebookF className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaInstagram className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaLinkedinIn className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaBehance className="fa-brands fa-behance" />
                        </Link>
                      </li>
                    </ul>
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
