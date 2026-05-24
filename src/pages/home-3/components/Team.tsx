import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaShareNodes } from 'react-icons/fa6'

import team5 from '@/assets/img/all-images/team-img5.png'
import team6 from '@/assets/img/all-images/team-img6.png'
import team7 from '@/assets/img/all-images/team-img7.png'

const teamData = [
  { duration: 800, image: team5, name: 'Kore Anderson', title: 'Team Leader' },
  { duration: 1000, image: team6, name: 'Zara Matheson', title: 'Team Leader' },
  { duration: 1200, image: team7, name: 'Kore Anderson', title: 'Team Leader' },
]

const Team = () => {
  return (
    <>
      <div className="team2-section-area sp2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="team-header heading4 text-center">
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  Our Team
                </h5>
                <h2 className="tg-element-title">Power Players Meet Our Team</h2>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  From our experienced technicians to our knowledgeable customer service representatives, each member of our team plays a crucial
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {teamData.map((item, idx) => (
              <Col key={idx} lg={4} md={6} data-aos="flip-right" data-aos-duration={item.duration}>
                <div className="team-author-boxarea">
                  <div className="images">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content">
                    <Link to="/team">{item.name}</Link>
                    <p>{item.title}</p>
                  </div>
                  <div className="share-area">
                    <div className="icons">
                      <Link to="">
                        <FaShareNodes className="fa-solid fa-share-nodes" />
                      </Link>
                    </div>
                    <div className="list">
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
                            <FaLinkedinIn className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaPinterestP className="fa-brands" />
                          </Link>
                        </li>
                      </ul>
                    </div>
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
