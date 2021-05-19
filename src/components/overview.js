import React from 'react'
import Header from './header'
import Footer from './footer'

const Overview = ({ pageContext }) => (
  <div className="overview min-h-full grid">
    <div>
      <Header />
      <section className="my-5">
        <div className="w-9/12 sm:w-80 m-auto">
          <img
            className="overview__image"
            src={pageContext.image}
            alt={pageContext.imageAlt}
          />
          <h3 className="overview__heading">
            <a href="#">{pageContext.title}</a>
          </h3>
          <p className="overview__text">{pageContext.body}</p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Overview
