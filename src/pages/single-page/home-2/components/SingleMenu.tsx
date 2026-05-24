import React from 'react'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Link } from 'gatsby'

const menuItems = [
  {
    title: 'Home',
    children: [
      {
        title: 'Multiple Page',
        links: [
          { path: '/home-1', label: 'Home One' },
          { path: '/home-2', label: 'Home Two' },
          { path: '/home-3', label: 'Home Three' },
          { path: '/home-4', label: 'Home Four' },
        ],
      },
      {
        title: 'Landing Page',
        links: [
          { path: '/single-page/home-1', label: 'Home One' },
          { path: '/single-page/home-2', label: 'Home Two' },
          { path: '/single-page/home-3', label: 'Home Three' },
          { path: '/single-page/home-4', label: 'Home Four' },
        ],
      },
    ],
  },
  { title: 'About', path: '#about' },
  { title: 'Case Study', path: '#about' },
  { title: 'Works', path: '#works' },
  { title: 'Team', path: '#team' },
  { title: 'Testimonials', path: '#testimonial' },
  { title: 'Blog', path: '#blog' },
]
interface MenuItemProps {
  item: any
  depth?: number
}

const MenuItem = ({ item, depth = 0 }: MenuItemProps) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const hasSubItems = item.links || item.children
  return (
    <li className="nav-item">
      <span className="d-flex justify-content-between align-items-center cursor-pointer" onClick={hasSubItems ? toggle : undefined}>
        {item.path ? <Link to={item.path}>{item.title || item.label}</Link> : <a>{item.title || item.label}</a>}
        {hasSubItems && <span>{open ? <FaMinus style={{ color: 'white' }} /> : <FaPlus style={{ color: 'white' }} />}</span>}
      </span>

      <Collapse in={open}>
        <ul className="list-unstyled ms-3">
          {item.links?.map((link: any, idx: number) => (
            <li key={idx} className="nav-item">
              {link.img && (
                <div className="img1 mb-2">
                  <img src={link.img} alt="image" className="img-fluid" />
                </div>
              )}
              <Link to={link.path} className="nav-link ">
                {link.label}
              </Link>
            </li>
          ))}
          {item.children?.map((child: any, idx: number) => <MenuItem key={idx} item={child} depth={depth + 1} />)}
        </ul>
      </Collapse>
    </li>
  )
}

const MobileMenuMultiItem = () => {
  return (
    <ul className="mobile-nav-list nav-list1">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  )
}

export default MobileMenuMultiItem
