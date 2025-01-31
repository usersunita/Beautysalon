// import React, { createContext, useState } from "react";

// export const ShopContext = createContext();

// export const ShopProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState([
//     // Mock products data
//   ]);
//   const [currency, setCurrency] = useState("₹");

//   const addToCart = (productId, size) => {
//     const existingProduct = cart.find(item => item.id === productId && item.size === size);
//     if (existingProduct) {
//       setCart(cart.map(item =>
//         item.id === productId && item.size === size
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       ));
//     } else {
//       setCart([...cart, { id: productId, size, quantity: 1 }]);
//     }
//   };

//   return (
//     <ShopContext.Provider value={{ products, cart, addToCart, currency }}>
//       {children}
//     </ShopContext.Provider>
//   );
// };



// ShopContext.js

import React, { createContext, useState, useContext } from 'react';
import product1 from "../assets/product1.jpg";
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
        id: 1,
        category: "skin",
        image: product1,
        title: "FaceWash For Women",
        price: "RS.300",
        description: "A refreshing facewash that cleanses your skin deeply."
      },
      {
        id: 2,
        category: "skin",
        image: product1,
        title: "Element Small FaceWash",
        price: "RS.250",
        description: "Gentle formula, ideal for all skin types."
      },
      {
        id: 3,
        category: "skin",
        image: product1,
        title: "Element Small FaceWash",
        price: "RS.250",
        description: "Gentle formula, ideal for all skin types."
      },
      {
        id: 4,
        category: "skin",
        image: product1,
        title: "Element Small FaceWash",
        price: "RS.250",
        description: "Gentle formula, ideal for all skin types."
      },
      {
        id: 5,
        category: "skin",
        image: product1,
        title: "Element Small FaceWash",
        price: "RS.250",
        description: "Gentle formula, ideal for all skin types."
      },
      {
        id: 6,
        category: "skin",
        image: product1,
        title: "Element Small FaceWash",
        price: "RS.250",
        description: "Gentle formula, ideal for all skin types."
      },
      {
        id: 7,
        category: "skin",
        image: product1,
        title: "Element Small FaceWash",
        price: "RS.250",
        description: "Gentle formula, ideal for all skin types."
      },
      {
        id: 8,
        category: "skin",
        image: product1,
        title: "Element Small FaceWash",
        price: "RS.250",
        description: "Gentle formula, ideal for all skin types."
      },
    
  ]);

  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};
