import React from 'react'
import "./Cartfooter.css"
export default function Cartfooter({ totalAmount, handleOrderClick }) {
  return (
    <div className="Cartfooter">
        
      <p>Total bill: ₹ {totalAmount}</p>
      <button onClick={handleOrderClick}>Order now</button>
       <a href='/'>back to menu</a>
    </div>
  )
}
