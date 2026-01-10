import React from 'react'
import "./Addons.css"
export default function Addons() {
    const ADDONS = {
      ketchup: { name: "Ketchup", price: 10 },
      mayo: { name: "Mayonnaise", price: 15 },
      cheese: { name: "Cheese", price: 25 },
    };
  return (
    <div>
      <div className="addons">
  {Object.entries(ADDONS).map(([key, addon]) => (
    <label key={key}>
      <input
        type="checkbox"
        checked={cartitems[item.id]?.addons?.[key] || false}
        onChange={() => toggleAddon(item.id, key)}
      />
      {addon.name} (+₹{addon.price})
    </label>
  ))}
</div>
console.log(Addons());


    </div>
  )
}
