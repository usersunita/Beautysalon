import React from "react";
import { NavLink } from "react-router-dom";

const ProductIItem = ({ id, image, name, price }) => {
  return (
    <div className="product-item bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <NavLink to={`/productDetail/${id}`}>
        <img src={image} alt={name} className="w-full h-60 object-cover rounded-t-lg" />
      </NavLink>
      <div className="p-4 text-center">
        <h3 className="font-medium text-lg text-gray-800">{name}</h3>
        <p className="text-xl font-semibold text-purple-700">{price}</p>
      </div>
    </div>
  );
};

export default ProductIItem;
