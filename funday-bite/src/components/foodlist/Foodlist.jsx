import React from "react";
import "./Foodlist.css";
import { PlusIcon } from "@heroicons/react/24/solid";
import LazyImage from "../LazyImage";
export default function Foodlist({ id, name, price, cartitems, openSheet, closeSheet, item }) {
  const qty = cartitems[id]?.qty || 0;

  return (
    <>

      <div className="food-list">

        <div className="food-list-img">
          <LazyImage
            src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
            alt={name}
 
            className="w-full h-28 object-cover rounded-lg"
          />
        </div>

        <div className="item-info">
          <div className="item-name">{name}</div>
          <div className="icones">
            <span className="item-info-price">{"₹" + price}</span>

            <button
              onClick={() => openSheet(item)}
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                backgroundColor: "#FFA200",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PlusIcon style={{ width: "30px", height: "30px", color: "white", paddingBottom: "8px" }} />
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
