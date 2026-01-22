import React from "react";
import "./Cartinfo.css";

export default function Cartinfo( {openAddress} ) {
   console.log("openAddress:", openAddress);
  return (
    <>
      <div className="cart-info-coupon">
        <input type="text" placeholder="enter Coupon Code" />
        <button>Apply</button>
      </div>
      <p className="discounttag">use a valid coupon for discounts.</p>
      <div className="dileverylocation">
        <div className="flex">

          <img src="/location logo.png" alt="location" /> 

          <span>Delivery Location</span>
        </div>
          <p>
            select your delivery adress and we'll bring your taste treets straight
            to you!
          </p>
          <div className="locationinput pointer">
            <p  onClick={() => {
    console.log("Add Address clicked");
    openAddress();
  }}>select delivery adress</p>
          </div>
         





      </div>
      <p className="charges"> Delivery + Packging charges -₹19</p>


      <div className="cookinginst">
        <p>Cooking Instructions</p>
        <textarea
          placeholder="Add any special instructions for the restaurant (optional)"
        ></textarea>

        <div>
          <p>NOTE:</p>
          <p>1.If your dilivery adress is more than 3 km from NMC Circle. there will be a charge of ₹10 for each additional kilometer </p>
          <p>2.If if you would like us to assist with managing your meals, please feel free to reach out to us for healthy and tasty food.</p>
        </div>
        <hr />

      </div>


      <h1 className="best"> best place in ckm </h1>

    </>
  );
}
