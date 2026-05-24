import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa6'

import team1 from '@/assets/img/all-images/team-img1.png'
import team2 from '@/assets/img/all-images/team-img2.png'
import team3 from '@/assets/img/all-images/team-img3.png'
import team4 from '@/assets/img/all-images/team-img4.png'
import team5 from '@/assets/img/all-images/team-img5.png'
import team6 from '@/assets/img/all-images/team-img6.png'

const teamData = [
  { image: team1, name: 'Shoaib Bashir', title: 'Sales Manager', duration: 800 },
  { image: team2, name: 'Daniel Carter', title: 'Master Electrician', duration: 1000 },
  { image: team3, name: 'Reece Toply', title: 'Team Leader', duration: 1200 },
  { image: team4, name: 'Robert Anderson', title: 'Project Manager', duration: 1400 },
  { image: team5, name: 'Michael Reyes', title: 'Lead Technician', duration: 1600 },
  { image: team6, name: 'James Wilson', title: 'Service Engineer', duration: 1800 },
]

const Team = () => {
  return (
    <>
      <div className="team4-section-area sp2">
        <Container>
          <Row>
            <Col lg={7} className="m-auto">
              <div className="team-header-area heading9 text-center">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  Our Team
                </h5>
                <h2 className="tg-element-title">Get to Know Our Talented Team</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  With a focus on collaboration, innovation, and customer satisfaction, we strive to exceed expectations at every turn.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {teamData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="team-auhtor-boxarea" data-aos="fade-up" data-aos-duration={item.duration}>
                  <div className="images">
                    <img src={item.image} alt="" />
                    <div className="team-social-area">
                      <div className="icons">
                        <ul>
                          <li>
                            <Link to="">
                              <FaInstagram className="fa-brands" />
                            </Link>
                            &nbsp;
                          </li>
                          <li>
                            <Link to="">
                              <FaFacebookF className="fa-brands" />
                            </Link>
                            &nbsp;
                          </li>
                          <li>
                            <Link to="">
                              <FaPinterestP className="fa-brands" />
                            </Link>
                            &nbsp;
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
                    <p>{item.title}</p>
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
