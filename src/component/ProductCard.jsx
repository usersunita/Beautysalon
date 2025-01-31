import React from "react";

const ProductCard = ({ img, name, price, description }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl border border-gray-100 p-6">
        <a href="#" className="relative w-full h-80 mb-6">
          <span className="absolute top-2 left-2 bg-red-200 text-gray-800 font-semibold py-1 px-2 rounded-md text-xs"></span>
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </a>

        <div className="flex flex-col gap-1 text-center pt-4">
          <a href="#" className="text-lg font-semibold text-gray-400">
            {name}
          </a>
          <span className="text-xl font-medium text-purple-700">
            Rs: {price}
          </span>
          <p className="text-gray-400 h-[30px]">{description}</p>
          <a
            href="#"
            className="w-full mt-5 py-4 px-4 bg-black text-white rounded-full font-semibold text-[15px] hover:bg-gray-700"
          >
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
