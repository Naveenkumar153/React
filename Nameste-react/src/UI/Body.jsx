import React from 'react'
import { CARD_DATA } from '../Data/card';
import RestaurantCard from '../Components/RestaurentCard';
export default function Body() {
  return (
    <div className='body'>
        <div className="filter">
            <button className="filter-btn">Top Rated Restaurents</button>
        </div>
        <div className="res-container">
            {
                CARD_DATA.map((restaurent) => (
                    console.log('restaurent',restaurent),
                    <RestaurantCard key={restaurent.id} restaurant={restaurent} />
                ))
            }
        </div>
    </div>
  )
}
