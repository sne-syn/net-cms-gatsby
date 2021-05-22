import React from 'react'
import overviewData from './../../data/overview.json'

const OverviewList = () => {
  const overviewsDataList = overviewData.overviews
  return (
    <section className="container my-10 relative z-10">
      <h2 className="text-center uppercase font-bold text-xl py-2 tracking-wide">
        Opinion
      </h2>
      <ul className="m-auto w-3/4 py-5 flex-wrap flex md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        {overviewsDataList.map((item) => {
          return (
            <li className="md:flex-1 h-full w-11/12 mx-auto" key={item.id}>
              <img src={item.image.main} alt={item.image.alt} height="222" />
              <h3 className="font-bold my-3 hover:text-red-900">
                <a href={`/overviews/${item.url}`}>{item.title}</a>
              </h3>
              <p>{item.body}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default OverviewList
