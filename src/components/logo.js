import React from 'react'
import { Link } from 'gatsby'

const Logo = ({ img }) => {
  return (
    <Link to="/">
      <img
        className="p-6 md:mb-5 mx-auto"
        src={img}
        width="270"
        alt="TheGuardian"
      />
    </Link>
  )
}

export default Logo
