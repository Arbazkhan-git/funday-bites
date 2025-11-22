import React from 'react'
import "./Foodlist.css"
export default function Foodlist({id,name,price,image}) {
  return (
    <div className='food-list'>
        <div className="food-list-img">
            <img src={image} alt="" />
        </div>
        <div className="item-info">
            <p>{name}</p>
            <p>{price}</p>
        </div>

      
    </div>
  )
}