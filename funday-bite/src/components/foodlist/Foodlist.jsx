import React from "react";
import "./Foodlist.css";
import Bottomsheet from "../Bottomsheet/Bottomsheet";

export default function Foodlist({ id, name, price, cartitems, addtocart, removefromcart,openSheet,closeSheet,item }) {
  const qty = cartitems[id]?.qty || 0; 

  return (
    <div className="food-list">
      <div className="food-list-img">
        <img
          src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
          alt={name}
        />
      </div>

      <div className="item-info">
        <div className="item-name">{name}</div>
        <div className="icones">
          <span className="item-info-price">{"₹" + price}</span>

     
          
            
            { qty ===0?(
              <img
              className="addicon"
              onClick={() => openSheet(item)}    
              src="/add_icon_white.png"
              alt="Add"
            />
            ):(
<div className="counter-div">
            
            <img
              className="addicon"
              onClick={() => removefromcart(id)}
              src="/remove-icon.png"
              alt="Remove"
            />

             
            <span className="counter">{qty}</span>
 
            <img
              className="addicon"
              onClick={() => addtocart(id)}
              src="/add_icon_white.png"
              alt="Add"
            />
           </div>
           
            )
            }
            
             
        </div>
      </div>
    </div>
  );
}
