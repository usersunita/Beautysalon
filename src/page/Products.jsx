import React, { useState } from "react";
import product1 from "../assets/product1.jpg";
import { NavLink } from "react-router-dom";

const newProducts = [
  {
    id: 1,
    category: "skin",
    image: product1,
    title: "FaceWash For Women",
    price: "RS.300",
  },
  {
    id: 2,
    category: "skin",
    image: product1,
    title: "Element Small FaceWash",
    price: "RS.250",
  },
  {
    id: 3,
    category: "nail",
    image: product1,
    title: "Blue Fake Nail's For Women",
    price: " RS.250",
  },
  {
    id: 4,
    category: "nail",
    image: product1,
    title: "Shiny Red Nail Polish",
    price: "RS210",
  },
  {
    id: 5,
    category: "mackup",
    image: product1,
    title: "Set of Bridal Eye Lashes",
    price: "RS.1100",
  },
  {
    id: 6,
    category: "nail",
    image: product1,
    title: "Nail Polish For Women",
    price: "RS.1200",
  },
  {
    id: 7,
    category: "mackup",
    image: product1,
    title: "Permanent Lipstick",
    price: "RS.3000",
  },
  {
    id: 8,
    category: "skin",
    image: product1,
    title: "Women's FaceWash",
    price: "RS.1450",
  },
  {
    id: 9,
    category: "skin",
    image: product1,
    title: "Skin Care Lotion For Women",
    price: "RS.900",
  },
  {
    id: 10,
    category: "mackup",
    image: product1,
    title: "Face Powder For Women",
    price: "RS.800",
  },
];

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const totalProducts = newProducts.length;

  const handleToggle = () => {
    setVisibleCount((prev) => (prev >= totalProducts ? 4 : prev + 4));
  };

  return (
    <section
      id="product"
      className="w-full md:max-w-[90%] md:mx-auto mx-auto my-12"
    >
      <div className="flex justify-between w-full items-center">
        <h3 className="text-3xl font-extrabold text-gray-800 text-center justify-center">
          New Products
        </h3>

        <div
          className=" text-blue-600 text-xs cursor-pointer"
          onClick={handleToggle}
        >
          {visibleCount >= totalProducts ? "<<View Less>>" : "<<View More>>"}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {newProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className={`new-product-box-wrapper ${product.category}`}
          >
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl border border-gray-100 p-6">
              <NavLink to>
                <a href="#" className="relative w-full h-80 mb-6">
                  <span className="absolute top-2 left-2 bg-red-200 text-gray-800 font-semibold py-1 px-2 rounded-md text-xs">
                    {product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)}
                  </span>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </a>
              </NavLink>

              <div className="flex flex-col gap-1 text-center pt-4">
                <a href="#" className="text-lg font-semibold text-gray-400">
                  {product.title}
                </a>
                <span className="text-xl font-medium text-purple-700">
                  {product.price}
                </span>
                <a
                  href="#"
                  className="w-full mt-5 py-4 px-4 bg-black text-white rounded-full font-semibold text-[15px] hover:bg-gray-700"
                >
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="justify-center border-2 border-black text-center mt-2">
        View More
      </button>
    </section>
  );
};

export default Products;
