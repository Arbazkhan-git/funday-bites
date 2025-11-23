import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Trendings from '../../components/trendings/Trendings'
import Display from '../../components/fooddisplay/Display'
import Category from '../../components/category/Category'
export default function Home() {
    const [category,setcategory]= useState("All");
  return (
    <div>
      <Navbar/>
      <Trendings/>
      <Category category={category} setcategory={setcategory}/>
      <Display category={category}/>
    </div>
  )
}
