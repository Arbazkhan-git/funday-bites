// BottomNavbar.js
import React from "react";
import "./Bottombar.css";

export default function Bottombar() {
  return (
    <div className="bottom-navbar">
      <div className="home">
        <img src="/home.png" alt=" " />
        <a href="/">Home</a>
      </div>
      

       <div className="cart"> 
        <img src="/cart.png" alt="Cart" />
          <a href="/cart">Cart</a></div>
   
<div className="profile"> 
    <img src="/profile.png" alt="Profile" />
      <a href="/">Profile</a>
      </div>
    </div>
  );
}
