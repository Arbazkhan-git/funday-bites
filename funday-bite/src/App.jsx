import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Cart from "./pages/home/cart/Cart";
 import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Bottomsheet from "./components/Bottomsheet/Bottomsheet";
function App() {


const [selectedItem, setSelectedItem] = useState(null);

const [showSheet, setShowSheet] = useState(false);

const openSheet = (item) => {
  setSelectedItem(item);
  setShowSheet(true);
};

const closeSheet = () => {
  setShowSheet(false);
  setSelectedItem(null);
};
   
  const [food, setFood] = useState([]);
useEffect(() => {
 const fetchFood = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/food");
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFood();
  }, []);




  const [cartitems, setcartitems] = useState(() => {
  const savedCart = localStorage.getItem("cartitems");
  return savedCart ? JSON.parse(savedCart) : {};
});

 const addtocart = (itemid) => {
  setcartitems((prev) => ({...prev,[itemid]: prev[itemid]
      ? { ...prev[itemid], qty: prev[itemid].qty + 1 }
      : { qty: 1, addons: {} },
  }));
};


const removefromcart = (itemid) => {
  setcartitems((prev) => ({
    ...prev,
    [itemid]: {
      ...prev[itemid],
      qty: Math.max(prev[itemid].qty - 1, 0),
    },
  }));
};


   const removefromcartall = (itemid) => {
  setcartitems((prevItems) => {
    const updated = { ...prevItems };
    delete updated[itemid];
    return updated;
  });
};



  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);

  const ADDON_PRICES = {
  ketchup: 10,
  mayo: 15,
  cheese: 25,
};

const totalAmount = useMemo(() => {
  if (!food.length) return 0;

  return Object.entries(cartitems).reduce((total, [id, item]) => {
    const product = food.find((p) => String(p.id) === String(id));
    if (!product || item.qty <= 0) return total;

    
    let itemTotal = Number(product.price)*item.qty;

     
    Object.entries(item.addons || {}).forEach(([addon, addonQty]) => {
      const addonPrice = ADDON_PRICES[addon] || 0;
      itemTotal += addonPrice * addonQty;
    });

    return total + itemTotal;
  }, 0);
}, [cartitems, food]);


 

const addItemWithAddons = (item, qty, addons) => {
  setcartitems((prev) => ({
    ...prev,[item.id]: {qty,addons,},
  }));
  closeSheet();
};

 



  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addtocart={addtocart}
              removefromcart={removefromcart}
              cartitems={cartitems}
               openSheet={openSheet}
               closeSheet={closeSheet}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
             
            food={food}
              addtocart={addtocart}
              removefromcart={removefromcart}
              cartitems={cartitems}
              removefromcartall={removefromcartall}
                totalAmount={totalAmount}
            />
          }
        />
      </Routes>
      
      
      {showSheet && (
  <Bottomsheet
    item={selectedItem}
    onClose={closeSheet}
    onAdd={addItemWithAddons}
  />
)}

 
    </div>
  );
}

export default App;
