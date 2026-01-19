 
import React from "react";
import "./Bottombar.css";

export default function Bottombar() {
  return (
    <div className="bottom-navbar">
      <div className="home">
        <a className="flex align-center justify-center text-center flex-col" href="/">
          <img style={{marginLeft:"6px"}} src="/home.png" alt=" " />
        <h2>Home</h2>
        </a>
      </div>
      

       <div className="cart"> 
        
          <a className="flex align-center justify-center text-center flex-col" href="/cart">
          <img style={{marginLeft:"4px"}} src="/cart.png" alt="Cart" />
          Cart</a></div>
   
<div className="profile"> 
    <img src="/profile.png" alt="Profile" />
      <a href="/">Profile</a>
      </div>
    </div>
  );
}
