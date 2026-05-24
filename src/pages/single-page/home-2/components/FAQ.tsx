import faq2 from '@/assets/img/all-images/faq-img2.png'
import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'

const faqData = [
  { question: 'What types of electricity plans do you offer?', duration: 800 },
  { question: 'How do I sign up for your electricity services?', duration: 1000 },
  { question: "What happens if there's a power outage?", duration: 1200 },
  { question: 'How can I track my energy usage with your services?', duration: 1400 },
  { question: 'Do you offer any discounts or promotions for new customers?', duration: 1400 },
  { question: 'What types of electricity plans do you offer?', duration: 1400 },
]

const FAQ = () => {
  return (
    <>
      <div className="faq4-section-area sp1" id="faq">
        <Container>
          <Row>
            <Col lg={7} className=" m-auto">
              <div className="faq-header-area heading9 text-center">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  FAQ’S
                </h5>
                <h2 className="tg-element-title">Electricity Essentials FAQ Section</h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Have questions about our electricity services? You're in the right place! Browse <br className="d-lg-block d-none" /> through our
                  frequently asked questions to find answers to common.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              <div className="faq-images">
                <img src={faq2} alt="" />
              </div>
            </Col>
            <Col lg={7}>
              <div className="faq-auhtoir-area2">
                <Accordion defaultActiveKey={'1'} className="accordion-flush active" id="accordionFlushExample">
                  {faqData.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      eventKey={`${idx + 1}`}
                      data-aos="fade-left"
                      data-aos-duration={item.duration}
                      style={{ marginBottom: '20px' }}>
                      <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                      <AccordionBody>
                        We understand that navigating the world of electricity services can <br /> be daunting, which is why we've compiled this
                        comprehensive.
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

export default FAQ
