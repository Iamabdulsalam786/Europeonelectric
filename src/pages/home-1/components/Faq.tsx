import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'gatsby'

const faqData = [
  { question: 'How do I sign up for your electricity services?', duration: 800 },
  { question: 'What types of electricity plans do you offer?', duration: 1000 },
  { question: ' What are your billing and payment options?', duration: 1200 },
  { question: 'How can I track my energy usage with your services?', duration: 1400 },
]

const Faq = () => {
  return (
    <>
      <div className="faq1-section-area sp1">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="faq-header-area heading2">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  FAQ’S
                </h5>
                <h2 className="tg-element-title">Frequently Best Asked Question?</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  That's why we've compiled a list of frequently asked questions to help make the process as smooth as possible for you.
                </p>
                <div className="btn-area" data-aos="fade-left" data-aos-duration={1200}>
                  <Link to="/faq" className="header-btn1">
                    Have Any Questions <FaArrowRight />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={1} />
            <Col lg={6}>
              <div className="faq-auhtoir-area1">
                <Accordion defaultActiveKey={'1'} className="accordion-flush" id="accordionFlushExample">
                  {faqData.map((item, idx) => (
                    <AccordionItem
                      eventKey={`${idx + 1}`}
                      key={idx}
                      data-aos="fade-left"
                      data-aos-duration={item.duration}
                      style={{ marginBottom: '20px' }}>
                      <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                      <AccordionBody>
                        Whether you're wondering about our pricing plans, process <br /> installation , or sustainability initiatives.
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                  <div className="space20" />
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Faq
