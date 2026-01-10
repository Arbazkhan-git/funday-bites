import React, { useEffect, useState } from 'react';
import "./Display.css";
import Foodlist from '../foodlist/Foodlist';

export default function Display({ category,cartitems,addtocart,removefromcart }) {
  const [food, setFood] = useState([]);

  useEffect(() => {
   const fetchFood = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/food');  
    const data = await response.json();
 

    setFood(data);
  } catch (error) {
    console.error('Error fetching food items:', error);
  }
};
fetchFood();
  }, []);
 console.log(food);
  return (
    <div className='food-display' id='food-display'>
      
      <div className="food-display-list">
        {
          food.filter(item => category === "All" || category === item.categoryId)
            .length === 0 ? (
              <p className="no-food">No food available</p>
            ) : (
              food
                .filter(item => category === "All" || category === item.categoryId)
                .map((item) => (
                  <Foodlist
                    key={item.id}
                     
                    name={item.name}
                    price={item.price}
                    id={item.id}
                    cartitems={cartitems}
                    addtocart={addtocart}
                    removefromcart={removefromcart}
                  />
                ))
            )
        }
      </div>
      <h1 className='ckm'>best place in ckm</h1>
       
 
    </div>
  );
}
