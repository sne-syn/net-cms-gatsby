import React from 'react';
import overviewData from './../../data/overview.json';

const OverviewList = () => {
  const overviewsDataList = overviewData.overviews
  return(
    <section class="container my-6">
      <h2 class="text-center uppercase font-bold text-xl py-2">Opinion</h2>
      <ul class="m-auto w-3/4 py-5 gap-5 flex-wrap flex md:flex-row">
        {overviewsDataList.map((item) => {
          return <li className="overview__item md:flex-1 h-full" key={item.id}>
          <img className="overview__image m-auto" src={item.image.main} alt={item.image.alt} width="370" height="222"/>
          <h3 className="overview__heading font-bold  my-3 hover:text-red-900"><a href={`/overviews/${item.url}`}>{item.title}</a></h3>
          <p className="overview__text">{item.body}</p>
          </li>
        })}
      </ul>
    </section>
  )
}

export default OverviewList;
