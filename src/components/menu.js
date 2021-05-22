import React, { useState } from 'react'
import links from '../constants/links'
import { FiMenu } from '@react-icons/all-files/fi/FiMenu'
import { GrClose } from '@react-icons/all-files/gr/GrClose'
import { Link } from 'gatsby'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)
  let hamIcon = <FiMenu size={40} />
  let menuClass = `hidden`

  if (showMenu) {
    hamIcon = <GrClose size={40} />
    menuClass = `flex flex-col`
  }

  return (
    <div className="">
      <div
        className="md:hidden flex justify-end pb-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        {hamIcon}
      </div>
      <ul
        className={`md:flex flex-wrap md:justify-between border-t-2 border-teal-600 py-4 ${menuClass}`}
      >
        {links.map((link) => (
          <li className="text-center py-2 md:py-0" key={link.id}>
            <Link
              className="hover:text-red-900 px-2 py-3 text-xl"
              to={link.url}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
