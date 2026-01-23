 
import React from "react";
import "./Bottombar.css";
 import { Link } from "react-router-dom";
export default function Bottombar() {
  return (
    <div className="bottom-navbar">
      <div className="home">
        <Link className="flex align-center justify-center text-center flex-col" to="/">
     
          <img style={{marginLeft:"6px"}} src="/home.png" alt=" " />
        <h2>Home</h2>
        </Link>
      </div>
      

       <div className="cart"> 
         <Link
    to="/cart"
    className="flex items-center justify-center text-center flex-col"
  >
<img style={{marginLeft:"4px"}} src="/cart.png" alt="Cart" />
          Cart 
   
  </Link>
        </div>
          
<div className="profile"> 
    <img src="/profile.png" alt="Profile" />
      <Link to="/profile" className="flex items-center justify-center text-center flex-col">
       Profile</Link>
      </div>
    </div>
  );
}
