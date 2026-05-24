import img11 from '@/assets/img/all-images/testimonial-img11.png'
import img12 from '@/assets/img/all-images/testimonial-img12.png'
import img13 from '@/assets/img/all-images/testimonial-img13.png'
import img15 from '@/assets/img/all-images/testimonial-img15.png'
import img16 from '@/assets/img/all-images/testimonial-img16.png'
import img17 from '@/assets/img/all-images/testimonial-img17.png'
import img18 from '@/assets/img/all-images/testimonial-img18.png'
import img19 from '@/assets/img/all-images/testimonial-img19.png'
import img20 from '@/assets/img/all-images/testimonial-img20.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAnglesLeft, FaAnglesRight, FaStar } from 'react-icons/fa6'

type TestimonialType = {
  image: string
  description: string
  name: string
  title: string
}
const tesData: TestimonialType[] = [
  {
    image: img11,
    description:
      'From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn',
    name: 'Dhruv Jerel',
    title: 'Scheduler',
  },
  {
    image: img12,
    description:
      'Discover why our customers love our electricity services! Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence',
    name: 'Issuant Sharma',
    title: 'Logistics Officer',
  },
  {
    image: img13,
    description:
      'Their stories not only showcase the effectiveness of our services but also highlight the dedication and expertise of our team. Explore their experiences to learn',
    name: 'Richardson',
    title: 'Transport Manager',
  },
  {
    image: img15,
    description:
      'Our testimonials speak volumes about the quality, reliability, and excellence of our electricity services. From homeowners to businesses, our clients have benefited from',
    name: 'David Miller',
    title: 'Inventory Planner',
  },
  {
    image: img16,
    description:
      "Hear firsthand accounts of how we've helped individuals save on their energy bills, increase efficiency in their operations, and navigate complex electrical projects with",
    name: 'Matthew Wade',
    title: 'Demand Planner',
  },
  {
    image: img17,
    description:
      'We take pride in delivering exceptional results and exceeding expectations Explore our testimonials to see why our customers trust us as their preferred electricity provider',
    name: 'Dhruv Jerel',
    title: 'Scheduler',
  },
  {
    image: img18,
    description:
      'Experience the satisfaction and success shared by our valued customers in their own words. Our testimonials are a testament to the trust & confidence our clients place',
    name: 'Vijay Shankar',
    title: 'Expeditor',
  },
  {
    image: img19,
    description:
      'From homeowners seeking reliable energy solutions to businesses striving for efficiency and sustainability, our customers have found their answers with us',
    name: 'Amrich Nortje',
    title: 'Inventory Planner',
  },
  {
    image: img20,
    description:
      "Their stories highlight not only the quality and reliability of our electricity services but also the dedication and expertise of our team. Whether it's overcoming challenges",
    name: 'Praveen Dubey',
    title: 'Scheduler',
  },
]

const TestimonialArea = () => {
  return (
    <>
      <div className="testimonials-inner-section-area sp1">
        <Container>
          <Row>
            {tesData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="testimonial-inner-boxarea">
                  <div className="img1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <ul>
                      <li style={{ margin: '0 2px' }}>
                        <FaStar />
                      </li>
                      <li style={{ margin: '0 2px' }}>
                        <FaStar />
                      </li>
                      <li style={{ margin: '0 2px' }}>
                        <FaStar />
                      </li>
                      <li style={{ margin: '0 2px' }}>
                        <FaStar />
                      </li>
                      <li style={{ margin: '0 2px' }}>
                        <FaStar />
                      </li>
                    </ul>
                    <p>“{item.description}”</p>
                    <div className="text">
                      <Link to="/team">{item.name}</Link>
                      <p>{item.title}</p>
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

export default TestimonialArea
