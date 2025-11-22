import React from 'react'
import "./Display.css"
import Foodlist from '../foodlist/Foodlist'
export default function Display() {
    const food =[
    {
        "name": "Classic French Fries",
        "image": "fries.webp",
        "categoryId": "66f893dd7dc8c4f26def7e37",
        "price": 59,
        "mrp": 70,
        "createdAt": "2024-09-28T23:42:58.409Z",
        "unAvailable": false,
        "sequenceNo": 1,
        "id": "66f894827dc8c4f26def7e3e"
    },
    {
        "name": "Funday Crispy Special Burger",
        "image": "crispy_chicken.png",
        "categoryId": "66f891b97dc8c4f26def7e30",
        "price": 109,
        "mrp": 120,
        "unAvailable": false,
        "createdAt": "2024-10-31T22:24:42.620Z",
        "sequenceNo": 2,
        "id": "672403aab61a3ca70f5ba6ed"
    },
    {
        "name": "Kullad Pizza",
        "image": "kullad.webp",
        "categoryId": "67240e190e8f3fc5f4ddf758",
        "price": 119,
        "mrp": 150,
        "unAvailable": false,
        "createdAt": "2024-10-31T23:07:15.670Z",
        "sequenceNo": 3,
        "id": "67240da368437cca56eeec0f"
    },
    {
        "name": "Chicken Nugget Balls(5 piece)",
        "image": "nuggets.webp",
        "categoryId": "67240bb80e8f3fc5f4ddf505",
        "price": 79,
        "mrp": 89,
        "unAvailable": false,
        "createdAt": "2024-10-31T16:00:47.296Z",
        "sequenceNo": 5,
        "id": "6723a9afd591840d1873dbeb"
    },
    {
        "name": "Cheesy Fries",
        "image": "cheesy_fries.png",
        "categoryId": "66f893dd7dc8c4f26def7e37",
        "price": 89,
        "mrp": 112,
        "unAvailable": false,
        "createdAt": "2024-10-31T22:40:41.543Z",
        "sequenceNo": 6,
        "id": "67240769507ae7d6d13a3a0f"
    },
    {
        "name": "Frizza",
        "image": "frizza.webp",
        "categoryId": "66f891b97dc8c4f26def7e2f",
        "price": 109,
        "mrp": 150,
        "unAvailable": false,
        "createdAt": "2024-10-31T23:19:50.041Z",
        "sequenceNo": 7,
        "id": "67241096348d0edd8eede883"
    },
    {
        "name": "Blue lagoon mojhito",
        "image": "Blue_mojhito.webp",
        "categoryId": "66f920f7f8f48f9831e50ce8",
        "price": 69,
        "mrp": 80,
        "unAvailable": false,
        "createdAt": "2024-10-31T23:59:15.935Z",
        "sequenceNo": 8,
        "id": "672419d3fc7bc5878bde3dd4"
    },
    {
        "name": "Garden Goddess Burger",
        "image": "garden_goddess.webp",
        "categoryId": "66f891b97dc8c4f26def7e30",
        "price": 94,
        "mrp": 99,
        "unAvailable": false,
        "createdAt": "2024-10-31T17:35:23.100Z",
        "sequenceNo": 9,
        "id": "6723bfdbd5f5d6e7f7c5b0c5"
    },
    {
        "name": "Perry Perry Fries",
        "image": "perry_perry_fries.webp",
        "categoryId": "66f893dd7dc8c4f26def7e37",
        "price": 69,
        "mrp": 91,
        "createdAt": "2024-09-29T09:48:32.787Z",
        "unAvailable": false,
        "sequenceNo": 9,
        "id": "66f92270f8f48f9831e50d03"
    },
    {
        "name": "Crispy Chicken Temptation Burger",
        "image": "chick_temp_b.png",
        "categoryId": "66f891b97dc8c4f26def7e30",
        "price": 119,
        "mrp": 139,
        "unAvailable": false,
        "createdAt": "2024-10-31T22:30:30.703Z",
        "sequenceNo": 10,
        "id": "672405067680fdb7ddeaf487"
    },
    {
        "name": "Funday Chicken Burger",
        "image": "chicken_burger.webp",
        "categoryId": "66f891b97dc8c4f26def7e30",
        "price": 95,
        "mrp": 111,
        "unAvailable": false,
        "createdAt": "2024-10-31T22:11:41.892Z",
        "sequenceNo": 11,
        "id": "6724009d25b5ef4a78595c0c"
    },
    {
        "name": "Funday Veg Burger",
        "image": "veg_b.png",
        "categoryId": "66f891b97dc8c4f26def7e30",
        "price": 85,
        "mrp": 99,
        "unAvailable": false,
        "createdAt": "2024-10-31T22:17:57.518Z",
        "sequenceNo": 12,
        "id": "6724021593bb375f6b9d04af"
    },
    {
        "name": "Lime soda",
        "image": "Lime_soda.webp",
        "categoryId": "66f920f7f8f48f9831e50ce8",
        "price": 45,
        "mrp": 50,
        "unAvailable": false,
        "createdAt": "2024-10-31T23:57:00.771Z",
        "sequenceNo": 12,
        "id": "6724194cfc7bc5878bde3dcf"
    },
    {
        "name": "Chicken Tex Mex Sandwich",
        "image": "chick_s.png",
        "categoryId": "672f34147db07a12a7123cee",
        "price": 98,
        "mrp": 1109,
        "unAvailable": false,
        "sequenceNo": 12,
        "createdAt": "2024-11-09T10:19:30.172Z",
        "id": "672f3732a76a320ffc46bd6b"
    },
    {
        "name": "Veg Popeye Sandwich",
        "image": "veg_s.png",
        "categoryId": "672f34147db07a12a7123cee",
        "price": 70,
        "mrp": 95,
        "unAvailable": false,
        "sequenceNo": 13,
        "createdAt": "2024-11-09T10:11:47.117Z",
        "id": "672f35639b0b943da5779b2e"
    },
    {
        "name": "Funday Egg Sandwitch",
        "image": "egg_s.png",
        "categoryId": "672f34147db07a12a7123cee",
        "price": 68,
        "mrp": 88,
        "unAvailable": false,
        "sequenceNo": 14,
        "createdAt": "2024-11-09T11:01:56.008Z",
        "id": "672f41247a5a6b97cb7656a6"
    },
    {
        "name": "Chicken Popcorn ",
        "image": "cp.png",
        "categoryId": "67240bb80e8f3fc5f4ddf505",
        "price": 89,
        "mrp": 99,
        "unAvailable": false,
        "sequenceNo": 15,
        "createdAt": "2024-11-15T07:08:21.218Z",
        "id": "6736f365aa5eafb8daf1beaf"
    },
    {
        "name": "Chicken Fusion Roll",
        "image": "chik_roll.png",
        "categoryId": "6736f9e109ba43f697d6b5a8",
        "price": 95,
        "mrp": 110,
        "unAvailable": false,
        "sequenceNo": 16,
        "createdAt": "2024-11-15T07:18:15.785Z",
        "id": "6736f5b70cc769571b4ce31f"
    },
    {
        "name": "Nutella Dream Waffle",
        "image": "waffle-neu.png",
        "categoryId": "66f891b97dc8c4f26def7e31",
        "price": 139,
        "mrp": 160,
        "unAvailable": false,
        "sequenceNo": 17,
        "createdAt": "2025-02-09T09:32:09.088Z",
        "id": "67a876192d2c3f99963d17d7"
    },
    {
        "name": "Veg Paradise Roll",
        "image": "veg_roll.png",
        "categoryId": "6736f9e109ba43f697d6b5a8",
        "price": 79,
        "mrp": 95,
        "unAvailable": false,
        "sequenceNo": 17,
        "createdAt": "2024-11-15T07:26:23.401Z",
        "id": "6736f79fe0bdf1e2c9e03423"
    },
    {
        "name": "Veg Supreme Pizza [10 inches]",
        "image": "veg_pizza.png",
        "categoryId": "66f891b97dc8c4f26def7e2f",
        "price": 189,
        "mrp": 229,
        "unAvailable": false,
        "sequenceNo": 19,
        "createdAt": "2024-11-15T17:23:20.859Z",
        "id": "6737838836691ddb79740782"
    },
    {
        "name": "Cheese N Corn Pizza [10 inches]",
        "image": "cheese_n_corn.png",
        "categoryId": "66f891b97dc8c4f26def7e2f",
        "price": 164,
        "mrp": 199,
        "unAvailable": false,
        "sequenceNo": 20,
        "createdAt": "2024-11-15T17:13:48.368Z",
        "id": "6737814c36efe2c649df2291"
    },
    {
        "name": "Nawabi Chicken Pizza [10 inches]",
        "image": "nawabi_c_pizza.png",
        "categoryId": "66f891b97dc8c4f26def7e2f",
        "price": 219,
        "mrp": 299,
        "unAvailable": false,
        "sequenceNo": 21,
        "createdAt": "2024-11-15T17:35:48.294Z",
        "id": "67378674b37dd6303cf3f9ba"
    },
    {
        "name": "FB Chicken Tikka Pizza [10 inches]",
        "image": "c_t_pizza.png",
        "categoryId": "66f891b97dc8c4f26def7e2f",
        "price": 225,
        "mrp": 309,
        "unAvailable": false,
        "sequenceNo": 21,
        "createdAt": "2024-11-15T17:42:56.079Z",
        "id": "6737882066fd9fb5b9f62008"
    },
    {
        "name": " FB Plain Maggi",
        "image": "maggie.png",
        "categoryId": "67a887db37c4fe6ca19d1ec7",
        "price": 50,
        "mrp": 57,
        "unAvailable": false,
        "sequenceNo": 25,
        "createdAt": "2025-02-09T10:45:53.285Z",
        "id": "67a887616a0f4a7e29bc3960"
    },
    {
        "name": "Zesty Veg Maggi",
        "image": "veg-m.jpeg",
        "categoryId": "67a887db37c4fe6ca19d1ec7",
        "price": 55,
        "mrp": 70,
        "unAvailable": false,
        "sequenceNo": 29,
        "createdAt": "2025-02-09T10:57:22.652Z",
        "id": "67a88a12e5cac4c4d84671e3"
    },
    {
        "name": "Cheesy Bliss Maggi",
        "image": "maggie.png",
        "categoryId": "67a887db37c4fe6ca19d1ec7",
        "price": 60,
        "mrp": 84,
        "unAvailable": false,
        "sequenceNo": 30,
        "createdAt": "2025-02-09T11:01:02.243Z",
        "id": "67a88aeee5cac4c4d84671ed"
    },
    {
        "name": "Cheese N' Veggie Maggie",
        "image": "cheesy-m.jpeg",
        "categoryId": "67a887db37c4fe6ca19d1ec7",
        "price": 65,
        "mrp": 87,
        "unAvailable": false,
        "sequenceNo": 31,
        "createdAt": "2025-02-09T11:04:32.294Z",
        "id": "67a88bc0281dff73bb41650b"
    },
    {
        "name": "Choco Lava Cake",
        "image": "lava.jpeg",
        "categoryId": "66f891b97dc8c4f26def7e31",
        "price": 75,
        "mrp": 99,
        "unAvailable": false,
        "sequenceNo": 34,
        "createdAt": "2025-02-09T11:26:56.623Z",
        "id": "67a891002e6db44c28ebc9a8"
    },
    {
        "name": "Choco Lava Cake With Ice Cream",
        "image": "lava-ice.jpeg",
        "categoryId": "66f891b97dc8c4f26def7e31",
        "price": 109,
        "mrp": 130,
        "unAvailable": false,
        "sequenceNo": 35,
        "createdAt": "2025-02-09T11:29:49.103Z",
        "id": "67a891ad2e6db44c28ebc9af"
    },
    {
        "name": "Cold Coffee",
        "image": "ice.png",
        "categoryId": "67b60aa1f082a61721c2e989",
        "price": 110,
        "mrp": 166,
        "unAvailable": false,
        "sequenceNo": 38,
        "createdAt": "2025-02-19T16:54:14.425Z",
        "id": "67b60cb6dba7bb5f37ad0dfd"
    },
    {
        "name": "Kit Kat Shake",
        "image": "png",
        "categoryId": "67b60aa1f082a61721c2e989",
        "price": 109,
        "mrp": 139,
        "unAvailable": false,
        "sequenceNo": 56,
        "createdAt": "2025-02-19T17:12:10.061Z",
        "id": "67b610ea62086a9c54e4e789"
    },
    {
        "name": "Oreo Shake",
        "image": "png",
        "categoryId": "67b60aa1f082a61721c2e989",
        "price": 89,
        "mrp": 128,
        "unAvailable": false,
        "sequenceNo": 56,
        "createdAt": "2025-02-19T17:15:18.166Z",
        "id": "67b611a638e18231937f1523"
    },
    {
        "name": "Blue Lime Mojito",
        "image": "png",
        "categoryId": "67b60aa1f082a61721c2e989",
        "price": 99,
        "mrp": 136,
        "unAvailable": false,
        "sequenceNo": 61,
        "createdAt": "2025-02-19T17:19:10.103Z",
        "id": "67b6128e0e11f755e66324f4"
    },
    {
        "name": "water",
        "image": "png",
        "categoryId": "67b6155e4d1be0aa54b845be",
        "price": 20,
        "mrp": 20,
        "unAvailable": false,
        "sequenceNo": 63,
        "createdAt": "2025-02-19T17:32:02.929Z",
        "id": "67b615924d1be0aa54b845c4"
    }
]
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes Near You </h2>
        <div className="food-display-list">
{
    food.map((item,index)=>{
        return <Foodlist key={index} image={item.image} name={item.name} price={item.price}id={item.id}/>
    })
}
        </div>

      
    </div>
  )
}