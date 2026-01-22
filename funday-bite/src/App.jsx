import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Cart from "./pages/home/cart/Cart";
import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Bottomsheet from "./components/Bottomsheet/Bottomsheet";
import Adress from "./components/Captureadress/Address";
function App() {


  const [selectedItem, setSelectedItem] = useState(null);
  const [showSheet, setShowSheet] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [food, setFood] = useState([]);
  const [cartitems, setcartitems] = useState(() => {
    const savedCart = localStorage.getItem("cartitems");
    return savedCart ? JSON.parse(savedCart) : {};
  });
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    fullAddress: "",
    lat: null,
    lng: null,
  });

  const openAddress = () => setShowAddress(true);
  const closeAddress = () => setShowAddress(false);


  const openSheet = (item) => {
    setSelectedItem(item);
    setShowSheet(true);
  };

  const closeSheet = () => {
    setShowSheet(false);
    setSelectedItem(null);
  };


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






  const addtocart = (itemid) => {
    setcartitems((prev) => ({
      ...prev, [itemid]: prev[itemid]
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


      let itemTotal = Number(product.price) * item.qty;


      Object.entries(item.addons || {}).forEach(([addon, addonQty]) => {
        const addonPrice = ADDON_PRICES[addon] || 0;
        itemTotal += addonPrice * addonQty;
      });

      return total + itemTotal;
    }, 0);
  }, [cartitems, food]);




  const addItemWithAddons = (item, qty, addons) => {
    setcartitems((prev) => ({
      ...prev, [item.id]: { qty, addons, },
    }));
    closeSheet();
  };

  const sendOrderToWhatsApp = () => {
  const phoneNumber = "918618385919";

  let message = `🛒 *New Order – Funday Bites*\n\n`;

  let itemNumber = 1;  

  Object.entries(cartitems).forEach(([id, item]) => {
    if (item.qty <= 0) return;

    const product = food.find((p) => String(p.id) === String(id));
    if (!product) return;

    let itemTotal = product.price * item.qty;

    message += `${itemNumber}. *${product.name}*\n`;
    message += `Qty: ${item.qty}\n`;
    message += `Price: ₹${product.price}\n`;

    if (item.addons && Object.keys(item.addons).length > 0) {
      message += `Addons:\n`;
      Object.entries(item.addons).forEach(([addon, qty]) => {
        if (qty > 0) {
          const addonPrice = ADDON_PRICES[addon] || 0;
          itemTotal += addonPrice * qty;
          message += `• ${addon} x${qty} (₹${addonPrice})\n`;
        }
      });
    }

    message += `Subtotal: ₹${itemTotal}\n\n`;

    itemNumber++;  
  });

  message += `\n📍 Delivery Address:\n`;
  message += `Name: ${address.name}\n`;
  message += `Phone: ${address.phone}\n`;
  message += `Address: ${address.fullAddress}\n`;

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank"
  );
};



  console.log(openAddress)
const handleOrderClick = () => {
  if (!address.fullAddress) {
    setShowAddress(true); 
    return;
  }

  sendOrderToWhatsApp();
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
              openAddress={openAddress}
              handleOrderClick={handleOrderClick}
         
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


      {showAddress && (
        <Adress
         closeAddress={closeAddress}
         setAddress={setAddress} />
      )}



    </div>
  );
}

export default App;
