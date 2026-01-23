import { useState } from "react";
import "./Bottomsheet.css";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
const ADDON_PRICES = {
    ketchup: { price: 3, img: "/ketchep.png" },
    mayo: { price: 6, img: "/mayo.png" },
    cheese: { price: 25, img: "/cheese.png" }
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


            <div
                className="bottom-sheet w-full max-w-full overflow-x-hidden"
                onClick={(e) => e.stopPropagation()}
            >

                <div>


                    <div className="item-details-top">
                        <div className="veg">
                            <img src="./star.png" />
                            <h1 className="truncate">{item.name}</h1>
                            <p>Tasty Sood with just one click, right infront of ur door!</p>
                        </div>


                        <div className="item-row">
                            <div className="item-image">
                                <img

                                    src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
                                    alt="item"
                                />
                            </div>

                            <div className="price-qty">
                                <p className="item-price  " style={{marginBottom:"-8px"}}>₹{item.price}</p>

                                <div className="qty">
                                    <button disabled={qty === 1} onClick={() => setQty(qty - 1)}>
                                        <MinusIcon className="w-4 h-4 text-white rounded-full bg-[#FFB200]  " style={{paddingBottom:"0px"}} />
                                    </button>

                                    <span className="qty-count">{qty}</span>

                                    <button onClick={() => setQty(qty + 1)}>
                                      <PlusIcon className="w-4 h-4 text-white rounded-full bg-[#FFB200]  " style={{paddingBottom:"0px"}} />
                                    </button>
                                </div>
                            </div>
                        </div>




                    </div>



                </div>



                <h3 style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "400" }}>Add Ons</h3>

                <div className="addons-container">
                    {Object.keys(ADDON_PRICES).map((addon) => {
                        const addonQty = addons[addon] || 0;

                        return (
                            <div key={addon} className="addon-card relative flex flex-col items-center">


                                <div className="relative w-[50px] h-[50px] bg-[#D9D9D9] rounded-xl flex items-center justify-center">
                                    <img
                                        src={ADDON_PRICES[addon].img}
                                        alt={addon}
                                        className="w-full h-full object-contain p-1 rounded-lg cursor-pointer"
                                    />


                                    {addonQty === 0 && (
                                        <div>
                                            <button
                                                style={{ paddingBottom: "0px" }}
                                                onClick={() => addAddon(addon)}
                                                className="h-4 w-4 absolute -bottom-1 -right-1 bg-[#FF9F00] rounded-full p-1 flex items-center justify-center"
                                            >
                                                <PlusIcon className="w-6 h-6 text-white" />
                                            </button>
                                            <span
                                                className="absolute -top-1 -right-1 bg-[#02AB00]   text-white text-[10px]    rounded-full  p-3 h-4 w-4 flex items-center justify-center"
                                            >
                                                ₹{ADDON_PRICES[addon].price}
                                            </span>

                                        </div>
                                    )}
                                </div>


                                <span className="text-sm capitalize mt-1">{addon}</span>


                                {addonQty > 0 && (
                                    <div className="flex items-center gap-2 mt-1 animate-fadeIn">
                                        <button
                                            onClick={() => removeAddon(addon)}
                                            className="w-6 h-6 flex items-center justify-center rounded-full border border-green-500 text-green-600 font-bold active:scale-90 transition"
                                        >
                                            −
                                        </button>

                                        <span className="min-w-[16px] text-center text-sm font-semibold">
                                            {addonQty}
                                        </span>

                                        <button
                                            onClick={() => addAddon(addon)}
                                            className="w-6 h-6 flex items-center justify-center rounded-full border border-green-500 text-green-600 font-bold active:scale-90 transition"
                                        >
                                            +
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                </div>


                <div className="btns">
                    <button style={{ width: "49%", marginRight: "5px", height: "35px", borderRadius: "10px", backgroundColor: "#FFF0CC" }} className="add-cart-btn" onClick={() => onAdd(item, qty, addons)}>  Add to Cart </button>




                    <button style={{ width: "49%", height: "35px", borderRadius: "10px", backgroundColor: "#FFB200" }} onClick={() => window.location.href = "/cart"}>Go to Cart</button>

                </div>
                <div className="X  ">
                    <button style={{ padding: "15px 20px", borderRadius: "50%", margin: "20px", color:"grey",backgroundColor:"#E5E7EB" }} onClick={() => window.location.href = "/"}>X</button>
                </div>


            </div>
        </div>
    );
}

export default Bottomsheet;
