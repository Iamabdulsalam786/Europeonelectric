import team1 from '@/assets/img/all-images/team-img1.png'
import team10 from '@/assets/img/all-images/team-img10.png'
import team11 from '@/assets/img/all-images/team-img11.png'
import team12 from '@/assets/img/all-images/team-img12.png'
import team13 from '@/assets/img/all-images/team-img13.png'
import team14 from '@/assets/img/all-images/team-img14.png'
import team15 from '@/assets/img/all-images/team-img15.png'
import team2 from '@/assets/img/all-images/team-img2.png'
import team3 from '@/assets/img/all-images/team-img3.png'
import team4 from '@/assets/img/all-images/team-img4.png'
import team8 from '@/assets/img/all-images/team-img8.png'
import team9 from '@/assets/img/all-images/team-img9.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAnglesLeft, FaAnglesRight, FaFacebookF, FaInstagram, FaPinterestP, FaPlus, FaYoutube } from 'react-icons/fa6'

type TeamType = {
  image: string
  name: string
  role: string
}

const teamData: TeamType[] = [
  { image: team1, name: 'Shoaib Bashir', role: 'Sales Manager' },
  { image: team2, name: 'William Thompson', role: 'Product Manager' },
  { image: team3, name: 'Reece Toply', role: 'Team Leader' },
  { image: team4, name: 'Robert Anderson', role: 'Sales Manager' },
  { image: team8, name: 'Pat Cummins', role: 'Sales Manager' },
  { image: team9, name: 'Mahika Gaur', role: 'Sales Manager' },
  { image: team10, name: 'Tim David', role: 'Sales Manager' },
  { image: team11, name: 'Jonny Bairstow', role: 'Team Leader' },
  { image: team12, name: 'Ben Duckett', role: 'Product Manager' },
  { image: team13, name: 'Sophia Dunkley', role: 'Sales Manager' },
  { image: team14, name: 'Matthew Potts', role: 'Sales Manager' },
  { image: team15, name: 'George Scrimshaw', role: 'Team Leader' },
]

const TeamArea = () => {
  return (
    <>
      <div className="team1-section-area sp2">
        <Container>
          <Row>
            {teamData.map((item, idx) => (
              <Col lg={3} md={6} key={idx}>
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

export default TeamArea
