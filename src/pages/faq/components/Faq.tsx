import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'

const faqData = [
  { question: 'How do I sign up for your electricity services?' },
  { question: 'What types of electricity plans do you offer?' },
  { question: 'What are your billing and payment options?' },
  { question: 'How can I track my energy usage with your services?' },
  { question: 'What are your billing and payment options?' },
]

const FaqArea = () => {
  return (
    <>
      <div className="faq1-section-area faq-inner sp8">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="m-auto">
              <div className="faq-header-area heading2 text-center">
                <h2 className="tg-element-title">Energy Electricity Questions</h2>
              </div>
            </Col>
          </Row>
          <div className="space44 d-lg-block d-none" />
          <div className="space14 d-lg-none d-block" />
          <Row>
            <Col lg={12}>
              <div className="faq-auhtoir-area1">
                <Row>
                  <Col lg={6}>
                    <Accordion defaultActiveKey={'1'} className="accordion-flush active" id="accordionFlushExample">
                      {faqData.map((item, idx) => (
                        <AccordionItem eventKey={`${idx + 1}`} key={idx} style={{ marginBottom: '20px' }}>
                          <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                          <AccordionBody>
                            Whether you're wondering about our pricing plans, process <br /> installation , or sustainability initiatives.
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                      <div className="space20" />
                    </Accordion>
                  </Col>
                  <Col lg={6}>
                    <Accordion className="accordion-flush active" id="accordionFlushExample">
                      {faqData.map((item, idx) => (
                        <AccordionItem eventKey={`${idx + 1}`} key={idx} style={{ marginBottom: '20px' }}>
                          <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                          <AccordionBody>
                            Whether you're wondering about our pricing plans, process <br /> installation , or sustainability initiatives.
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="faq1-section-area faq-inner sp1">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="m-auto">
              <div className="faq-header-area heading2 text-center">
                <h2 className="tg-element-title">Energy Electricity Questions</h2>
              </div>
            </Col>
          </Row>
          <div className="space44 d-lg-block d-none" />
          <div className="space14 d-lg-none d-block" />
          <Row>
            <Col lg={12}>
              <div className="faq-auhtoir-area1">
                <Row>
                  <Col lg={6}>
                    <Accordion defaultActiveKey={'1'} className="accordion-flush active" id="accordionFlushExample">
                      {faqData.map((item, idx) => (
                        <AccordionItem eventKey={`${idx + 1}`} key={idx} style={{ marginBottom: '20px' }}>
                          <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                          <AccordionBody>
                            Whether you're wondering about our pricing plans, process <br /> installation , or sustainability initiatives.
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                      <div className="space20" />
                    </Accordion>
                  </Col>
                  <Col lg={6}>
                    <Accordion className="accordion-flush active" id="accordionFlushExample">
                      {faqData.map((item, idx) => (
                        <AccordionItem eventKey={`${idx + 1}`} key={idx} style={{ marginBottom: '20px' }}>
                          <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                          <AccordionBody>
                            Whether you're wondering about our pricing plans, process <br /> installation , or sustainability initiatives.
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                      <div className="space20" />
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default FaqArea
