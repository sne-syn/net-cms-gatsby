import React from 'react'
import logoFooter from '../../static/assets/logo_white.png'
import links from '../constants/links'
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <footer className="bg-gray-700 z-index-100 relative row-start-2 row-end-3">
      <div className="container mx-auto p-4">
        <Link to="/">
          <img
            className="p-7 mx-auto hover:opacity-50"
            src={logoFooter}
            width="300"
            alt="TheGuardian"
          />
        </Link>
        <ul
          className={`flex flex-wrap justify-between py-7 border-t border-white border-opacity-50`}
        >
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className="text-white hover:text-opacity-50 text-lg"
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
