import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Trendings from '../../components/trendings/Trendings'
import Display from '../../components/fooddisplay/Display'
import Category from '../../components/category/Category'
import BottomNavbar from '../../components/bottombar/Bottombar'
 
export default function Home({cartitems,addtocart,removefromcart,openSheet,closeSheet}) {
    const [category,setcategory]= useState("All");
  return (
    <div>
      <Navbar/>
      <Trendings/>
      <Category category={category} setcategory={setcategory}/>
      <Display category={category} cartitems={cartitems} addtocart={addtocart} removefromcart={removefromcart} openSheet={openSheet} closeSheet={closeSheet} />
       <BottomNavbar />
       
    </div>
  )
}
