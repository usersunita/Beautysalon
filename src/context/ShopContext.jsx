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

import React, { createContext, useState } from "react";
import { productData } from "../data/ProductData";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const doller = "$";
  const [products, setProducts] = useState(productData);

  const value = { products, setProducts, doller };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
