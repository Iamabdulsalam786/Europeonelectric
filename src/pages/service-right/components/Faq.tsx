import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap'

const faqData = [
  { duration: 800, question: 'How can I contact customer support if I have further questions?' },
  { duration: 1000, question: 'Do you offer any discounts or promotions for new customers?' },
  { duration: 1200, question: 'How long does it take to set up electricity services with your company?' },
  { duration: 1400, question: "Can I switch to your services if I'm already with another provider?" },
  { duration: 1400, question: "What happens if there's a power outage?" },
  { duration: 800, question: ' What types of electricity plans do you offer?' },
]

const Faq = () => {
  return (
    <>
      <div className="faq-auhtor-area1">
        <Accordion defaultActiveKey={'1'} className="accordion-flush active" id="accordionFlushExample">
          {faqData.map((item, idx) => (
            <AccordionItem eventKey={`${idx + 1}`} key={idx} data-aos="fade-left" data-aos-duration={item.duration} style={{ marginBottom: '20px' }}>
              <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
              <AccordionBody>
                We're your trusted partner in all things electrical. From initial consultation to <br className="d-lg-block d-none" /> ongoing
                support, we're committed to providing you with the highest level
              </AccordionBody>
            </AccordionItem>
          ))}
          <div className="space20" />
        </Accordion>
      </div>
    </>
  )
}

export default Faq
