import React, { useEffect, useState } from "react";
import "./Cart.css";
import Cartinfo from "../../../components/Cartinfo/Cartinfo";
import { Link } from "react-router-dom";
import Cartfooter from "../../../components/Cartfooter/Cartfooter";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
export default function Cart({ cartitems, removefromcart, addtocart, removefromcartall, totalAmount, food, toggleAddon }) {



 const itemCount = Object.values(cartitems).filter(item => item.qty > 0).length;
  return (
    <>
      <div className="carts-info">
       
        <h2 className="text-2xl font-bold">
          {itemCount} {itemCount === 1? "item" : "items"} in cart
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
                <p className="text-[#FFB200]">₹{item.price}</p>

                {(
                  <div>
                    <div className="counter-div">
                      <button onClick={() => removefromcart(item.id)}>
                        <MinusIcon className="w-4 h-4 text-white rounded-full bg-[#FFB200]  " style={{paddingBottom:"4px"}} />
                      </button>
                     
                      <span className="counter">{qty}</span>

                      <button onClick={() => addtocart(item.id)}>
                        <PlusIcon className="w-4 h-4 text-white rounded-full bg-[#FFB200]  " style={{paddingBottom:"4px"}} />
                      </button>
                      
                    </div>

                  </div>



                )}
              </div>

              <div className="removebtn">
                <button onClick={() => removefromcartall(item.id)}>
                  <XMarkIcon  className="w-4 h-4 text-white rounded-full bg-[#FFB200]  " style={{paddingBottom:"4px"}} />
                </button>
              </div>
            </div>
          );
        })}

        <Cartinfo />
        <Cartfooter totalAmount={totalAmount} />
      </div>
    </>
  );
}
