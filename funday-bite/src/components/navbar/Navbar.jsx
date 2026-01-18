import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className="navbar-header">
          <div>  
        <h1 className='text-2xl font-semibold'>Hi,</h1>
        </div>
        <div className="logo">
            <img src="https://funday-bites.vercel.app/_next/image?url=%2Fimages%2Flogo.webp&w=64&q=75" alt="" />
        </div>
        </div>  
      
      
    
    <p className='current-status '>closed</p>
     
<div className="searchbar">
    <input type="text" id="searchBox" placeholder="Search"/>

</div>

     </div>
    </>
  )
}