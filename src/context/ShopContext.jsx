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

  const updateQuantity = async (itemId,size,quantity)=>{
    let cartData= structuredClone(cartItems);
    cartData[itemId] [size]= quantity;
    setCartItems(cartData);
}

  const Cartamount = () =>{
    let totalAmount =0;
    for(const items in cartItems){
        let itemInfo = products.find((product)=> product._id===items);
        for(const item in cartItems[items]){
            try {
               if(cartItems[items][item]>0){
                totalAmount += itemInfo.price * cartItems[items][item];
               } 
            } catch (error) {
              return(error);  
            }
        }
    }
    return totalAmount;
}



  const value = { products, setProducts, doller, cartCount, addToCart,cartItems, delivery,updateQuantity , Cartamount};

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
