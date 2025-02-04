import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, getCartAmount } = useContext(ShopContext);

  console.log(currency);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <h1>CARTTOTAL</h1>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotals</p>
          <p>
            {currency}
            {}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {/* {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00 */}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
