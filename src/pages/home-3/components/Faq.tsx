import img1 from '@/assets/img/all-images/faq-img1.png'
import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'

const faqData = [
  { duration: 800, question: 'What types of electricity plans do you offer?' },
  { duration: 1000, question: 'How do I sign up for your electricity services?' },
  { duration: 1200, question: 'Do you offer renewable energy options?' },
  { duration: 1400, question: 'What are your billing and payment options?' },
  { duration: 1400, question: "What happens if there's a power outage?" },
  { duration: 800, question: 'What types of electricity plans do you offer?' },
]

const Faq = () => {
  return (
    <>
      <div className="faq2-section-area sp1">
        <Container>
          <Row className=" align-items-center">
            <Col lg={7} className="m-auto">
              <div className="faq-header-area heading4 text-center">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  FAQ’S
                </h5>
                <h2 className="tg-element-title">Frequently Best Asked Question?</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Take a look at our FAQ section below, and if you don't find the <br className="d-lg-block d-none" /> answer you're looking for, feel
                  free to reach.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} data-aos="zoom-in" data-aos-duration={1000}>
              <div className="faq-images">
                <img src={img1} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="faq-auhtor-area1">
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
                        Whether you're wondering about our pricing plans, process <br className="d-lg-block d-none" /> installation , or
                        sustainability initiatives, we've got Best.
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
