import React from 'react'
import logoFooter from '../../static/assets/logo_white.png'
import links from '../constants/links'
import Logo from '../components/logo'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="bg-gray-700 z-index-100 relative row-start-2 row-end-3">
      <div className="container mx-auto p-4">
        <Logo img={logoFooter} />
        <ul
          className={`flex flex-col md:flex-row flex-wrap justify-between py-7 border-t border-white border-opacity-50`}
        >
          {links.map((link) => (
            <li className="text-center" key={link.id}>
              <Link
                className="text-white hover:text-opacity-50 text-xl md:text-lg"
                to={link.url}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
