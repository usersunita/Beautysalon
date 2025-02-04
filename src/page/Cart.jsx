import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../component/CartTotal";

const Cart = () => {
  const { products, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData, setCartData] = useState([cartItems]);

  console.log(cartData,"cartdata")




  // useEffect(() => {
  //   const tempData = [];
  //   for (const itemId in cartItems) {
  //     for (const size in cartItems[itemId]) {
  //       if (cartItems[itemId][size] > 0) {
  //         tempData.push({
  //           _id: itemId,
  //           size: size,
  //           quantity: cartItems[itemId][size],
  //         });
  //       }
  //     }
  //   }
  //   setCartData(tempData);
  // }, [cartItems]);

  return (
    <div className="border-t pt-14 w-full md:max-w-[80%] md:mx-auto h-screen">
      <div className="text-2xl mb-3">
        <h1 className="text-2xl md:text-4xl text-gray-600">YOUR CART</h1>
      </div>

      {/* {


cartData.map((product,index)=>{
  return <div>
    <img src={product.product.image} alt="" />

  </div>
}) */}
      {/* }
      {/* <div> */}
        {cartData.map((item) => {
          const productData = products.find(
            (product) => product.id === item._id
          );

          if (!productData) {
            return null;
          }

          return (
            <div
              key={item._id}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.productName}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{productData.price}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => {
                  const newQuantity = e.target.value;
                  if (newQuantity && newQuantity > 0) {
                    updateQuantity(item._id, item.size, newQuantity);
                  } else {
                    updateQuantity(item._id, item.size, 1);
                  }
                }}
                value={item.quantity}  
                className="border max-w-10 sm:max-w-20 px-2 py-1"
                type="number"
                min={1}
              />
              {/* <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={bin_icon}
                alt="Remove item"
              />  */}
            </div>
          );
        })}
      {/* </div>  */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button className="bg-black text-white text-sm my-8 px-8 py-3">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
