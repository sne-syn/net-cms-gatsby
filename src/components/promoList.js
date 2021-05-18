import React from 'react'
import promoData from './../../data/promo.json'
import {BiRightArrowAlt} from '@react-icons/all-files/bi/BiRightArrowAlt'

const PromoList = () => {
  const promos = promoData.promos
  return (
    <section className="my-6 py-8 bg-gray-100 decorated-circle relative">
      <div className="container relative z-10">
        <div className="m-auto w-3/4 md:w-3/4 lg:w-2/4">
          <h2 className="text-center uppercase font-bold text-xl py-2 tracking-wide">
            Our Subscriptions
          </h2>
          <div className="py-5 flex flex-col space-y-3">
            <ul className="pb-5">
              {promos.map((item) => {
                return (
                  <li
                    className="m-auto md:w-3/5 mb-5 text-center"
                    key={item.id}
                  >
                    <h3 className="font-bold my-3 hover:text-red-900">
                      <a href={`${item.url}`} target="_blank" rel="noopener">
                        {item.title}
                      </a>
                    </h3>
                    <p>{item.body}</p>
                  </li>
                )
              })}
            </ul>
            <a
              className="m-auto w-auto text-center text-white p-2 bg-red-900 hover:bg-red-800"
              href="https://www.telegraph.co.uk/customer/subscribe/?country=GB"
            >
              Find Out More{' '}
              <span className="inline-block align-middle">
                <BiRightArrowAlt />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoList
