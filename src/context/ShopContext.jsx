import React, { createContext, useState, useEffect } from "react";
import { productData } from "../data/ProductData";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const delivery = 100;
  const doller = "$";
  const [products, setProducts] = useState(productData);
  const addToCart = async (data) => {
    if (data) {
      setCartItems((prev) => {
        const existingItem = prev.find((item) => item.product.id === data.id);
        if (existingItem) {
          return prev.map((item) =>
            item.product.id === data.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prev, { product: data, quantity: 1 }];
        }
      });
    }
  };

  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);

  //   const updateQuantity = async (itemId,size,quantity)=>{
  //     let cartData= structuredClone(cartItems);
  //     cartData[itemId] [size]= quantity;
  //     setCartItems(cartData);
  // }

  const Cartamount = (price, quantity) => {
    console.log(price, "dashdg");
    console.log(quantity, "dashdg");

    let totalAmount = 0;
    return totalAmount;
  };

  const value = {
    products,
    setProducts,
    doller,
    cartCount,
    addToCart,
    cartItems,
    delivery,
    Cartamount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
