import React, { useContext } from 'react'
import "./Display.css"
import Foodlist from '../foodlist/Foodlist'
import StoreContext from '../context/Storecontext'

export default function Display({category}) {
 const {food}=useContext(StoreContext)
 
return (
  <div className='food-display' id='food-display'>
    <h2>Top dishes Near You</h2>
    <div className="food-display-list">

      {
        food.filter(item => category === "All" || category === item.categoryId)
            .length === 0 ? (
          <p className="no-food">No food available</p>
        ) : (
          food.filter(item => category === "All" || category === item.categoryId)
              .map((item, index) => (
                <Foodlist
                  key={index}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                />
              ))
        )
      }

    </div>
  </div>
)

}