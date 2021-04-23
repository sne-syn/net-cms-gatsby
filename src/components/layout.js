import * as React from "react"

import Header from "./header";
import Hero from "./hero"
import OverviewList from "./overviewList"
import "./layout.css"

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OverviewList />
    </div>
  )
}

export default Layout
