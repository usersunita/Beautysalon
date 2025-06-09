import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../component/CartTotal";
import RelatedProducts from "../component/RelatedProduct";

const Cart = () => {
  const { cartItems, Cartamount, doller, delivery } = useContext(ShopContext);
  const [cartData, setCartData] = useState(cartItems);

  useEffect(() => {
    setCartData(cartItems);
  }, [cartItems]);

  const totalPrice = cartData?.reduce((total, item) => {
    return total + item?.product?.price * item?.quantity;
  }, 0) + delivery;

  return (
    <div className="border-t pt-14 w-full md:max-w-[80%] md:mx-auto h-screen">
      <div className="text-2xl mb-3">
        <h1 className="text-2xl md:text-4xl text-gray-600">YOUR CART</h1>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          {cartData?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 border rounded-lg shadow-md bg-white"
            >
              <img
                src={item?.product?.image}
                alt={item?.product?.productName}
                className="h-[150px] w-[150px] object-cover rounded-md shadow-sm"
              />

              {/* Product Details */}
              <div className="flex flex-col gap-3 text-gray-800">
                <p className="text-lg md:text-xl uppercase font-semibold text-gray-900">
                  <span className="text-black">{item?.product?.category}</span>
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {item?.product?.productName}
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  {item?.product?.description}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  {doller} {item?.product?.price}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  {Cartamount(item?.product?.price, item?.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="w-full sm:w-[450px]">
            <CartTotal totalAmount={totalPrice} />
            <div className="w-full text-end">
              <button className="bg-black text-white text-sm my-8 px-8 py-3">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-4  py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
      </div>

      {cartData.length > 0 && (
        <RelatedProducts
          category={cartData[0]?.product?.category}
          subCategory={cartData[0]?.product?.subCategory}
        />
      )}
    </div>
  );
};

export default Cart;
