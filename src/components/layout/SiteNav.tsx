// NOTE: The Home dropdown (showing Home 01 - 04 multi-page + one-page demos) is
// intentionally hidden from the navbar per client request. The demo data and
// commented JSX block below are kept on purpose so the dropdown can be
// re-enabled later by simply un-commenting it. The /home-1, /home-2, /home-3,
// /home-4 and /single-page/home-* routes still work if accessed directly.

// import demo1 from '@/assets/img/demo/demo-img1.png'
// import demo2 from '@/assets/img/demo/demo-img2.png'
// import demo3 from '@/assets/img/demo/demo-img3.png'
// import demo4 from '@/assets/img/demo/demo-img4.png'
import useActiveSection from '@/hooks/useActiveSection'
import { Link } from 'gatsby'
import React from 'react'
// import { Col, Row } from 'react-bootstrap'
// import { FaAngleDown, FaArrowRight } from 'react-icons/fa6'

const sectionIds = ['home', 'about', 'services', 'projects', 'testimonials', 'contact']

// type HomeVariant = {
//   label: string
//   multi: string
//   single: string
//   image: string
// }
//
// const homeVariants: HomeVariant[] = [
//   { label: 'Home 01', multi: '/home-1', single: '/single-page/home-1', image: demo1 },
//   { label: 'Home 02', multi: '/home-2', single: '/single-page/home-2', image: demo2 },
//   { label: 'Home 03', multi: '/home-3', single: '/single-page/home-3', image: demo3 },
//   { label: 'Home 04', multi: '/home-4', single: '/single-page/home-4', image: demo4 },
// ]

const SiteNav = () => {
  const active = useActiveSection(sectionIds)
  const isActive = (id: string) => (active === id ? 'active' : '')

  return (
    <ul className="mb-0">
      <li>
        <Link to="/#home" className={isActive('home')}>
          Home
        </Link>
        {/*
        Home variants dropdown - hidden by request. Un-comment this block
        (and the imports above) to restore the demo previews.

        <div className="tp-submenu">
          <Row>
            <Col lg={3}>
              <div className="homemenu-thumb">
                <div className="img1">
                  <img src={demo1} alt="Premium Home" />
                </div>
                <div className="homemenu-btn">
                  <Link className="header-btn1" to="/">
                    View Site
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="homemenu-content text-center">
                <Link to="/">Premium Home</Link>
              </div>
            </Col>
            {homeVariants.map((v) => (
              <Col lg={3} key={v.label}>
                <div className="homemenu-thumb">
                  <div className="img1">
                    <img src={v.image} alt={v.label} />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1" to={v.multi}>
                      Multi Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                    <div className="space16" />
                    <Link className="header-btn1" to={v.single} target="_blank">
                      One Page
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <Link to={v.multi}>{v.label}</Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        */}
      </li>
      <li>
        <Link to="/#about" className={isActive('about')}>
          About
        </Link>
      </li>
      <li>
        <Link to="/#services" className={isActive('services')}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/#projects" className={isActive('projects')}>
          Projects
        </Link>
      </li>
      {/*
      Team link hidden alongside the Team section. Un-comment to restore.
      <li>
        <Link to="/#team" className={isActive('team')}>
          Team
        </Link>
      </li>
      */}
      <li>
        <Link to="/#testimonials" className={isActive('testimonials')}>
          Testimonials
        </Link>
      </li>
      {/*
      FAQ link hidden alongside the FAQ section. Un-comment to restore.
      <li>
        <Link to="/#faq" className={isActive('faq')}>
          FAQ
        </Link>
      </li>
      */}
      <li>
        <Link to="/#contact" className={isActive('contact')}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default SiteNav
