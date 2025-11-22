import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Trendings from '../../components/trendings/Trendings'
import Display from '../../components/fooddisplay/Display'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Trendings/>
      <Display/>
    </div>
  )
}
