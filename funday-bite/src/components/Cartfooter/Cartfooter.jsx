import React from 'react'
import "./Cartfooter.css"
export default function Cartfooter({ totalAmount }) {
  return (
    <div className="Cartfooter">
        
      <p>Total bill: ₹ {totalAmount}</p>
      <button>Order now</button>
       <a href='/'>back to menu</a>
    </div>
  )
}
