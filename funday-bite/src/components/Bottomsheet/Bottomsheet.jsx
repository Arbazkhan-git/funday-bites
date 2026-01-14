import { useState } from "react";
import "./Bottomsheet.css";

const ADDON_PRICES = {
  ketchup: 10,
  mayo: 15,
  cheese: 25,
};

function Bottomsheet({ item, onClose, onAdd }) {
  const [qty, setQty] = useState(1);
  const [addons, setAddons] = useState({});

  if (!item) return null;

  const addAddon = (key) => {
    setAddons((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
  };

  const removeAddon = (key) => {
    setAddons((prev) => {
      const current = prev[key] || 0;
      if (current <= 1) {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }
      return {
        ...prev,
        [key]: current - 1,
      };
    });
  };

  return (
    <div className="bottom-sheet-overlay" onClick={onClose}>
      <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>

        {/* TOP SECTION */}
        <div className="item-details-top">
          <img
           src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
            alt={item.name}
          />

          <div className="price-qty">
            <p>₹{item.price}</p>

            <div style={{display:"flex",gap:"6px"}} className="qty">
              <button disabled={qty === 1} onClick={() => setQty(qty - 1)}>
                <img style={{ height: "35px", width: "35px" }} src="/remove-icon.png" alt="minus" />
              </button>

              <span >{qty}</span>

              <button onClick={() => setQty(qty + 1)}>
                <img style={{ height: "35px", width: "35px" }} src="/add_icon_white.png" alt="plus" />
              </button>
            </div>
          </div>
        </div>

        <h2>{item.name}</h2>

        {/* ADDONS */}
        <h4>Addons</h4>

        {Object.keys(ADDON_PRICES).map((addon) => {
          const count = addons[addon] || 0;

          return (
            <div key={addon} className="addon-row">
              <span>
                {addon} (+₹{ADDON_PRICES[addon]})
              </span>

              <div style={{display:"flex",gap:"6px"}} className="addon-controls"> 
                <button
                  disabled={count === 0}
                  onClick={() => removeAddon(addon)}
                >
                  <img style={{ height: "35px", width: "35px",display:"flex",gap:"6px"  }} src="/remove-icon.png" alt="remove" />
                </button>

                <span>{count}</span>

                <button onClick={() => addAddon(addon)}>
                  <img style={{ height: "25px", width: "25px", }} src="/add_icon_white.png" alt="add" />
                </button>
              </div>
            </div>
          );
        })}

        <button
          className="add-cart-btn"
          onClick={() => onAdd(item, qty, addons)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default Bottomsheet;
