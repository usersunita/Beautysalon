import React from "react";
import product from "../assets/products.jpg";
import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.avif";
const ProductGrid = () => {
  return (
    <div className="w-full md:max-w-[90%] md:mx-auto">
      <h3 className="text-4xl font-extrabold text-gray-800 text-center justify-center flex flex-col mt-8 gap-6">
        Hot Deals
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6  mx-auto my-6 px-4">
        <div className="relative h-52 rounded-lg overflow-hidden flex justify-end bg-green-100">
          <img
            src={product}
            alt="Natural Green Lotion"
            className="h-full object-cover object-right"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs flex flex-col items-center justify-center text-center p-4 bg-white bg-opacity-60 rounded-lg">
            <strong className="text-gray-800 font-semibold text-lg leading-snug">
              Natural Green Lotion
            </strong>
            <span className="text-gray-600 text-sm font-medium mt-1">
              Skin Care Product
            </span>
            <a
              href="#"
              className="font-semibold text-gray-800 mt-3 inline-block px-4 py-2 bg-green-300 rounded-md hover:bg-green-400 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="relative h-52 rounded-lg overflow-hidden flex justify-end bg-green-100">
          <img
            src={product}
            alt="Natural Green Lotion"
            className="h-full object-cover object-right"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs flex flex-col items-center justify-center text-center p-4 bg-white bg-opacity-60 rounded-lg">
            <strong className="text-gray-800 font-semibold text-lg leading-snug">
              Natural Green Lotion
            </strong>
            <span className="text-gray-600 text-sm font-medium mt-1">
              Skin Care Product
            </span>
            <a
              href="#"
              className="font-semibold text-gray-800 mt-3 inline-block px-4 py-2 bg-green-300 rounded-md hover:bg-green-400 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="relative h-52 rounded-lg overflow-hidden flex justify-end bg-pink-100">
          <img
            src={offer1}
            alt="3 in 1 Novage Lotion's"
            className="h-full object-cover object-right"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs flex flex-col items-center justify-center text-center p-4 bg-white bg-opacity-60 rounded-lg">
            <strong className="text-gray-800 font-semibold text-lg leading-snug">
              3 in 1 Novage Lotion's
            </strong>
            <span className="text-gray-600 text-sm font-medium mt-1">
              Skin Care Product
            </span>
            <a
              href="#"
              className="font-semibold text-gray-800 mt-3 inline-block px-4 py-2 bg-pink-300 rounded-md hover:bg-pink-400 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="relative h-52 rounded-lg overflow-hidden flex justify-end bg-yellow-100">
          <img
            src={offer2}
            alt="Gold FaceWash & Perfume"
            className="h-full object-cover object-right"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs flex flex-col items-center justify-center text-center p-4 bg-white bg-opacity-60 rounded-lg">
            <strong className="text-gray-800 font-semibold text-lg leading-snug">
              Gold FaceWash & Perfume
            </strong>
            <span className="text-gray-600 text-sm font-medium mt-1">
              Skin Care Product
            </span>
            <a
              href="#"
              className="font-semibold text-gray-800 mt-3 inline-block px-4 py-2 bg-yellow-300 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGrid;
