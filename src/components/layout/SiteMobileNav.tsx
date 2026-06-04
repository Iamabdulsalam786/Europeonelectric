import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa6'

type MobileLink = { path: string; label: string }
type MenuItemType = {
  title: string
  path?: string
  links?: MobileLink[]
}

// NOTE: The Home dropdown listing Home 01 - 04 demos is intentionally
// hidden from the mobile nav per client request. The fallback `links` array
// is kept below (commented) so it can be restored easily. The /home-1..4
// pages still work if accessed by URL directly.
const menuItems: MenuItemType[] = [
  { title: 'Home', path: '/' },
  // {
  //   title: 'Home',
  //   links: [
  //     { path: '/', label: 'Premium Home (Current)' },
  //     { path: '/home-1', label: 'Home 01' },
  //     { path: '/home-2', label: 'Home 02' },
  //     { path: '/home-3', label: 'Home 03' },
  //     { path: '/home-4', label: 'Home 04' },
  //   ],
  // },
  { title: 'About', path: '/#about' },
  { title: 'Services', path: '/#services' },
  { title: 'Projects', path: '/#projects' },
  // { title: 'Team', path: '/#team' }, // hidden alongside the Team section - un-comment to restore
  { title: 'Testimonials', path: '/#testimonials' },
  // { title: 'FAQ', path: '/#faq' }, // hidden alongside the FAQ section - un-comment to restore
  { title: 'Contact', path: '/#contact' },
]

type Props = {
  onNavigate?: () => void
}

const MenuItem = ({ item, onNavigate }: { item: MenuItemType; onNavigate?: () => void }) => {
  const [open, setOpen] = useState(false)
  const hasSubItems = Boolean(item.links?.length)

  return (
    <li className="nav-item">
      <span className="d-flex justify-content-between align-items-center cursor-pointer" onClick={hasSubItems ? () => setOpen(!open) : undefined}>
        {item.path ? (
          <Link to={item.path} onClick={onNavigate}>
            {item.title}
          </Link>
        ) : (
          <a>{item.title}</a>
        )}
        {hasSubItems && <span>{open ? <FaMinus style={{ color: 'white' }} /> : <FaPlus style={{ color: 'white' }} />}</span>}
      </span>
      {hasSubItems && (
        <Collapse in={open}>
          <ul className="list-unstyled ms-3">
            {item.links?.map((link) => (
              <li key={link.path} className="nav-item">
                <Link to={link.path} className="nav-link" onClick={onNavigate}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Collapse>
      )}
    </li>
  )
}

const SiteMobileNav = ({ onNavigate }: Props = {}) => {
  return (
    <ul className="mobile-nav-list nav-list1">
      {menuItems.map((item) => (
        <MenuItem key={item.title} item={item} onNavigate={onNavigate} />
      ))}
    </ul>
  )
}

export default SiteMobileNav
