import React from 'react'
import links from '../constants/links'
import image from '../../static/assets/logo.png'
import Logo from '../components/logo'
import Menu from '../components/menu'

const Navigation = () => {
  return (
    <nav>
      <Logo img={image} />
      <Menu />
    </nav>
  )
}

export default Navigation
