import React from "react";
import "./Category.css";

export default function Category({ category, setcategory }) {
  const categorys = [
    {
      _id: "66f891b97dc8c4f26def7e2e",
      name: "All",
      image:
        "https://funday-bites.vercel.app/images/all.webp",
      categoryId: "All",
    },
    {
      _id: "67c9960d32f48e574badda29",
      name: "Ramzan-Special",
      image:
        "https://funday-bites.vercel.app/images/ramzan1.jpg",
      categoryId: "12334",
    },
    {
      _id: "66f891b97dc8c4f26def7e2f",
      name: "Pizza",
      image:
        "https://funday-bites.vercel.app/images/cheezy_veg_pizza.webp",
      categoryId: "66f891b97dc8c4f26def7e2f",
    },
    {
      _id: "67240e190e8f3fc5f4ddf758",
      name: "F-Bites Special",
      image:
        "https://funday-bites.vercel.app/images/kullad.webp",
      categoryId: "67240e190e8f3fc5f4ddf758",
    },
    {
      _id: "66f893dd7dc8c4f26def7e37",
      name: "French Fries",
      image:
        "https://funday-bites.vercel.app/images/fries.webp",
      categoryId: "66f893dd7dc8c4f26def7e37",
    },
    {
      _id: "67240bb80e8f3fc5f4ddf505",
      name: "Chicken Bliss Bites",
      image:
        "https://funday-bites.vercel.app/images/nuggets.webp",
      categoryId: "67240bb80e8f3fc5f4ddf505",
    },
    {
      _id: "66f891b97dc8c4f26def7e30",
      name: "Burger",
      image:
        "https://funday-bites.vercel.app/images/crispy_chicken.png",
      categoryId: "66f891b97dc8c4f26def7e30",
    },
    {
      _id: "66f920f7f8f48f9831e50ce8",
      name: "Beverages",
      image:
        "https://funday-bites.vercel.app/images/Blue_mojhito.webp",
      categoryId: "66f920f7f8f48f9831e50ce8",
    },
    {
      _id: "66f891b97dc8c4f26def7e31",
      name: "Dessert",
      image: "https://funday-bites.vercel.app/images/dora_cake.png",
      categoryId: "66f891b97dc8c4f26def7e31",
    },
  ];

  return (
    <div>
      <div className="category-list">
        {categorys.map((item, index) => (
            <div key={index}>
          <div   className={`category-info ${ category === item.categoryId ? "active" : ""}`} onClick={() => setcategory(item.categoryId)}>
            <div className="img-wrap">
              <img src={item.image} alt={item.name} />
            </div>
             
          </div>
          <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
