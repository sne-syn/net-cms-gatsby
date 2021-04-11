import React from 'react';

const Overview = ({ pageContext }) => (
  <>
    <img className="overview__image" src={pageContext.image} alt={pageContext.imageAlt} />
    <h3 className="overview__heading"><a href="#">{pageContext.title}</a></h3>
    <p className="overview__text">{pageContext.body}</p>
  </>
)

export default Overview
