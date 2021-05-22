import React from 'react'
import Header from './header'
import Footer from './footer'

const Overview = ({ pageContext }) => (
  <div className="overview min-h-full grid">
    <div>
      <Header />
      <section className="my-5">
        <div className="w-9/12 sm:w-80 m-auto">
          <img src={pageContext.image} alt={pageContext.imageAlt} />
          <h3 className="font-bold mt-5 mb-1">
            <div>{pageContext.title}</div>
          </h3>
          <p>{pageContext.body}</p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Overview
