import * as React from "react"

import Header from "./header";
import Hero from "./hero"
import OverviewList from "./overviewList"
import PromoList from "./promoList"
import "./layout.css"

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OverviewList />
      <PromoList /> 
    </div>
  )
}

export default Layout
