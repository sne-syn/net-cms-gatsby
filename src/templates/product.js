import React from "react"

const Product = ({ pageContext }) => (
  <div>
  <h3 className="overview__heading"><a href="#">{pageContext.title}</a></h3>
  <p className="overview__text">{pageContext.body}</p>
  </div>
)

export default Product
