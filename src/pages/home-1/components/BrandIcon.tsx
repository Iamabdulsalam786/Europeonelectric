import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { SwiperOptions } from 'swiper/types'

import brand1 from '@/assets/img/elements/brand1.png'
import brand2 from '@/assets/img/elements/brand2.png'
import brand3 from '@/assets/img/elements/brand3.png'
import brand4 from '@/assets/img/elements/brand4.png'
import brand5 from '@/assets/img/elements/brand5.png'

const slideData = [{ image: brand1 }, { image: brand2 }, { image: brand3 }, { image: brand4 }, { image: brand5 }, { image: brand3 }]

const Slider = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay, Navigation],
    speed: 500,
    loop: true,
    navigation: false,
    autoplay: true,
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 30 },
    },
  }
  return (
    <>
      <div className="slider-section-area">
        <Container>
          <Row>
            <Col lg={5} className=" m-auto">
              <div className="header-slider text-center">
                <h3> More Than 5K+ Brands With Work Techzen </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="slider-images owl-carousel">
                <Swiper {...swiperOptions}>
                  {slideData.map((item, idx) => (
                    <SwiperSlide>
                      <div key={idx} className="img1">
                        <img src={item.image} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Slider
