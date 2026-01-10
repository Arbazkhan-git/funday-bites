import React, { useEffect, useState } from "react";
import "./Cart.css";
import Cartinfo from "../../../components/Cartinfo/Cartinfo";
import { Link } from "react-router-dom";
import Cartfooter from "../../../components/Cartfooter/Cartfooter";
 
export default function Cart({ cartitems, removefromcart, addtocart,removefromcartall,totalAmount,food,toggleAddon  }) {
 

 

  return (
    <>
      <div className="carts-info">
        <h2>
  {Object.values(cartitems).filter(item => item.qty > 0).length
} items in cart
</h2>

<Link to="/">
  <button className="addmore">Add more</button>
</Link>
      </div>

      <div className="carts">
        {food.map((item) => {
         const qty = cartitems[item.id]?.qty;

          if (!qty) return null;

          return (
            <div key={item.id} className="carts-items-item">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
                  alt={item.name}
                />
              </div>

              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>₹{item.price}</p>

                {  (
                  <div>
                  <div className="counter-div">
                    <img
                      className="addicon"
                      onClick={() => removefromcart(item.id)}
                      src="/remove-icon.png"
                      alt="Remove"
                    />
<span className="counter">{qty}</span>

                    <img
                      className="addicon"
                      onClick={() => addtocart(item.id)}
                      src="/add_icon_white.png"
                      alt="Add"
                    />
                  </div>
                  <div className="addons">
  <label>
    <input
      type="checkbox"
      checked={cartitems[item.id]?.addons?.ketchup || false}
      onChange={() => toggleAddon(item.id, "ketchup")}
    />
    Ketchup (+₹10)
  </label>

  <label>
    <input
      type="checkbox"
      checked={cartitems[item.id]?.addons?.mayo || false}
      onChange={() => toggleAddon(item.id, "mayo")}
    />
    Mayo (+₹15)
  </label>

  <label>
    <input
      type="checkbox"
      checked={cartitems[item.id]?.addons?.cheese || false}
      onChange={() => toggleAddon(item.id, "cheese")}
    />
    Cheese (+₹25)
  </label>
</div>
</div>

                 )}
               </div>

                  <div className="removebtn">
                    <button onClick={() => removefromcartall(item.id)}>✕</button>
                  </div>
            </div>
          );
        })}

         <Cartinfo/>
 <Cartfooter totalAmount={totalAmount} />
      </div>
    </>
  );
}
