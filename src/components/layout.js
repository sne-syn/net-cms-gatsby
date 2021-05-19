import React from 'react'

import Header from './header'
import Hero from './hero'
import OverviewList from './overviewList'
import PromoList from './promoList'
import Footer from './footer'
import './layout.css'

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OverviewList />
      <PromoList />
      <Footer />
    </div>
  )
}

export default Layout
