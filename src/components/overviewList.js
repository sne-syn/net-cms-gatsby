import React from 'react';
import overviewData from './../../data/overview.json';

const OverviewList = () => {
  const overviewsDataList = overviewData.overviews
  return(
    <ul class="container w-3/4 py-5 gap-5 flex-wrap flex md:flex-row">
      {overviewsDataList.map((item) => {
        return <li className="overview__item md:flex-1 h-full" key={item.id}>
        <img className="overview__image m-auto" src={item.image.main} alt={item.image.alt} width="200" height="150"/>
        <h3 className="overview__heading font-bold"><a href={`/${item.url}`}>{item.title}</a></h3>
        <p className="overview__text">{item.body}</p>
        </li>
      })}
    </ul>
  )
}

export default OverviewList;
