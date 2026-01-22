import React, { useState } from "react";
import "./Address.css";

export default function Adress({ closeAddress, setAddress }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fullAddress, setFullAddress] = useState("");

const saveAddress = async () => {
  if (!fullAddress.trim()) {
    alert("Please enter full address");
    return;
  }

  try {
    const encodedAddress = encodeURIComponent(fullAddress + ", India");

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&limit=1`,
      {
        headers: {
          "User-Agent": "FundayBites/1.0"
        }
      }
    );

    const data = await res.json();

    if (data && data.length > 0) {
      setAddress({
        name,
        phone,
        fullAddress,
        lat: data[0].lat,
        lng: data[0].lon,
      });
    } else {
      // location not found → still save
      setAddress({
        name,
        phone,
        fullAddress,
        lat: null,
        lng: null,
      });
    }

    closeAddress();
  } catch (error) {
    console.warn("Location fetch failed, saving manually");

 
    setAddress({
      name,
      phone,
      fullAddress,
      lat: null,
      lng: null,
    });

    closeAddress();
  }
};



  return (
    <div className="adress-backdrop" onClick={closeAddress}>
      <div className="adress-box" onClick={(e) => e.stopPropagation()}>
        <h2>Delivery Address</h2>

        <input style={{marginBottom:"5px"}}
        className="  w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-orange-500"
         value={name} onChange={(e) => setName(e.target.value)} placeholder=" Name" />
        <input style={{marginBottom:"5px"}} className=" w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-orange-500"
         value={phone} onChange={(e) => setPhone(e.target.value)} placeholder=" Phone" />
        <textarea style={{marginBottom:"5px"}} className=" w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-orange-500"
         value={fullAddress} onChange={(e) => setFullAddress(e.target.value)} placeholder=" Full address"></textarea>

        <button   className="  w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-orange-500"  onClick={saveAddress}>Save</button>
      </div>
    </div>
  );
}
