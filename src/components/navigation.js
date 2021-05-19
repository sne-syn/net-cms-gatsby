import React from 'react'
import links from '../constants/links'
import logo from '../../static/assets/logo.png'
import { Link } from 'gatsby'

const Navigation = () => {
  console.log(links)
  return (
    <nav>
      <Link to="/">
        <img
          className="p-6 mb-5 mx-auto"
          src={logo}
          width="270"
          alt="TheGuardian"
        />
      </Link>
      <ul
        className={`flex flex-wrap justify-between border-t-2 border-teal-600 py-4`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className="hover:text-red-900 px-2 py-3 text-xl"
              to={link.url}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
