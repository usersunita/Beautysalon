// import React, { useState } from "react";
// import product1 from "../assets/product1.jpg";
// import { NavLink } from "react-router-dom";

// export const newProducts = [
<<<<<<< HEAD
//   const products = [
//     {
//       id: 1,
//       category: "skin",
//       image: product1,
//       title: "FaceWash For Women",
//       price: "RS.300",
//       description: "A gentle facewash for daily use, removes impurities and makes your skin feel fresh.",
//       sizes: ["100ml", "200ml"]
//     },
//     {
//       id: 2,
//       category: "skin",
//       image: product1,
//       title: "Element Small FaceWash",
//       price: "RS.250",
//       description: "A small-sized facewash for on-the-go usage, perfect for travel.",
//       sizes: ["50ml"]
//     },
//     {
//       id: 3,
//       category: "nail",
//       image: product1,
//       title: "Blue Fake Nail's For Women",
//       price: "RS.250",
//       description: "Set of blue fake nails for an elegant look, easy to apply and remove.",
//       sizes: ["One size"]
//     },
//     {
//       id: 4,
//       category: "nail",
//       image: product1,
//       title: "Shiny Red Nail Polish",
//       price: "RS.210",
//       description: "A shiny red nail polish that lasts for days, perfect for a glamorous look.",
//       sizes: ["15ml"]
//     },
//     {
//       id: 5,
//       category: "mackup",
//       image: product1,
//       title: "Set of Bridal Eye Lashes",
//       price: "RS.1100",
//       description: "A set of luxurious bridal eyelashes to give you a dramatic look on your special day.",
//       sizes: ["One size"]
//     },
//     {
//       id: 6,
//       category: "nail",
//       image: product1,
//       title: "Nail Polish For Women",
//       price: "RS.1200",
//       description: "Long-lasting nail polish available in various shades to give your nails a chic finish.",
//       sizes: ["12ml"]
//     },
//     {
//       id: 7,
//       category: "mackup",
//       image: product1,
//       title: "Permanent Lipstick",
//       price: "RS.3000",
//       description: "A long-lasting permanent lipstick that stays put all day without fading.",
//       sizes: ["4g"]
//     },
//     {
//       id: 8,
//       category: "skin",
//       image: product1,
//       title: "Women's FaceWash",
//       price: "RS.1450",
//       description: "A premium facewash that nourishes the skin while removing dirt and makeup.",
//       sizes: ["150ml", "300ml"]
//     },
//     {
//       id: 9,
//       category: "skin",
//       image: product1,
//       title: "Skin Care Lotion For Women",
//       price: "RS.900",
//       description: "A moisturizing lotion that leaves your skin soft, smooth, and hydrated.",
//       sizes: ["200ml"]
//     },
//     {
//       id: 10,
//       category: "mackup",
//       image: product1,
//       title: "Face Powder For Women",
//       price: "RS.800",
//       description: "A translucent face powder that sets your makeup and gives you a flawless finish.",
//       sizes: ["10g"]
//     }
//   ];
  
=======
//   {
//     id: 1,
//     category: "skin",
//     image: product1,
//     title: "FaceWash For Women",
//     price: "RS.300",
//   },
//   {
//     id: 2,
//     category: "skin",
//     image: product1,
//     title: "Element Small FaceWash",
//     price: "RS.250",
//   },
//   {
//     id: 3,
//     category: "nail",
//     image: product1,
//     title: "Blue Fake Nail's For Women",
//     price: " RS.250",
//   },
//   {
//     id: 4,
//     category: "nail",
//     image: product1,
//     title: "Shiny Red Nail Polish",
//     price: "RS210",
//   },
//   {
//     id: 5,
//     category: "mackup",
//     image: product1,
//     title: "Set of Bridal Eye Lashes",
//     price: "RS.1100",
//   },
//   {
//     id: 6,
//     category: "nail",
//     image: product1,
//     title: "Nail Polish For Women",
//     price: "RS.1200",
//   },
//   {
//     id: 7,
//     category: "mackup",
//     image: product1,
//     title: "Permanent Lipstick",
//     price: "RS.3000",
//   },
//   {
//     id: 8,
//     category: "skin",
//     image: product1,
//     title: "Women's FaceWash",
//     price: "RS.1450",
//   },
//   {
//     id: 9,
//     category: "skin",
//     image: product1,
//     title: "Skin Care Lotion For Women",
//     price: "RS.900",
//   },
//   {
//     id: 10,
//     category: "mackup",
//     image: product1,
//     title: "Face Powder For Women",
//     price: "RS.800",
//   },
>>>>>>> 8dfa8a8e306d76af42de4445ea6e959a03cb0257
// ];

// const Products = () => {
//   const [visibleCount, setVisibleCount] = useState(4);
//   const totalProducts = newProducts.length;

//   const handleToggle = () => {
//     setVisibleCount((prev) => (prev >= totalProducts ? 4 : prev + 4));
//   };

//   return (
//     <section
//       id="product"
//       className="w-full md:max-w-[90%] md:mx-auto mx-auto my-12"
//     >
//       <div className="flex justify-between w-full items-center">
//         <h3 className="text-3xl font-extrabold text-gray-800 text-center justify-center">
//           New Products
//         </h3>

//         <div
//           className=" text-blue-600 text-xs cursor-pointer"
//           onClick={handleToggle}
//         >
//           {visibleCount >= totalProducts ? "<<View Less>>" : "<<View More>>"}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//         {newProducts.slice(0, visibleCount).map((product) => (
//           <div
//             key={product.id}
//             className={`new-product-box-wrapper ${product.category}`}
//           >
//             <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl border border-gray-100 p-6">
//               <NavLink to={`productDetail/${product.id}`}>
//                 <a href="#" className="relative w-full h-80 mb-6">
//                   <span className="absolute top-2 left-2 bg-red-200 text-gray-800 font-semibold py-1 px-2 rounded-md text-xs">
//                     {product.category.charAt(0).toUpperCase() +
//                       product.category.slice(1)}
//                   </span>
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-full object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
//                   />
//                 </a>
//               </NavLink>

//               <div className="flex flex-col gap-1 text-center pt-4">
//                 <a href="#" className="text-lg font-semibold text-gray-400">
//                   {product.title}
//                 </a>
//                 <span className="text-xl font-medium text-purple-700">
//                   {product.price}
//                 </span>
//                 <a
//                   href="#"
//                   className="w-full mt-5 py-4 px-4 bg-black text-white rounded-full font-semibold text-[15px] hover:bg-gray-700"
//                 >
//                   Add To Cart
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <NavLink to="products">

//       <button className="justify-center border-2 border-black text-center mt-2">
//         View More
//       </button>
//       </NavLink>
//     </section>
//   );
// };

// export default Products;

<<<<<<< HEAD


import React, { useState } from "react";
import product1 from "../assets/product1.jpg";
import { NavLink } from "react-router-dom";

export const newProducts = [
  {
    id: 1,
    category: "skin",
    image: product1,
    title: "FaceWash For Women",
    price: "RS.300",
    description: "A gentle facewash for daily use, removes impurities and makes your skin feel fresh.",
    sizes: ["100ml", "200ml"]
  },
  {
    id: 2,
    category: "skin",
    image: product1,
    title: "Element Small FaceWash",
    price: "RS.250",
    description: "A small-sized facewash for on-the-go usage, perfect for travel.",
    sizes: ["50ml"]
  },
  {
    id: 3,
    category: "nail",
    image: product1,
    title: "Blue Fake Nail's For Women",
    price: "RS.250",
    description: "Set of blue fake nails for an elegant look, easy to apply and remove.",
    sizes: ["One size"]
  },
  {
    id: 4,
    category: "nail",
    image: product1,
    title: "Shiny Red Nail Polish",
    price: "RS.210",
    description: "A shiny red nail polish that lasts for days, perfect for a glamorous look.",
    sizes: ["15ml"]
  },
  {
    id: 5,
    category: "mackup",
    image: product1,
    title: "Set of Bridal Eye Lashes",
    price: "RS.1100",
    description: "A set of luxurious bridal eyelashes to give you a dramatic look on your special day.",
    sizes: ["One size"]
  },
  {
    id: 6,
    category: "nail",
    image: product1,
    title: "Nail Polish For Women",
    price: "RS.1200",
    description: "Long-lasting nail polish available in various shades to give your nails a chic finish.",
    sizes: ["12ml"]
  },
  {
    id: 7,
    category: "mackup",
    image: product1,
    title: "Permanent Lipstick",
    price: "RS.3000",
    description: "A long-lasting permanent lipstick that stays put all day without fading.",
    sizes: ["4g"]
  },
  {
    id: 8,
    category: "skin",
    image: product1,
    title: "Women's FaceWash",
    price: "RS.1450",
    description: "A premium facewash that nourishes the skin while removing dirt and makeup.",
    sizes: ["150ml", "300ml"]
  },
  {
    id: 9,
    category: "skin",
    image: product1,
    title: "Skin Care Lotion For Women",
    price: "RS.900",
    description: "A moisturizing lotion that leaves your skin soft, smooth, and hydrated.",
    sizes: ["200ml"]
  },
  {
    id: 10,
    category: "mackup",
    image: product1,
    title: "Face Powder For Women",
    price: "RS.800",
    description: "A translucent face powder that sets your makeup and gives you a flawless finish.",
    sizes: ["10g"]
  }
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
              <NavLink to={`productDetail/${product.id}`}>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="products">
        <button className="justify-center border-2 border-black text-center mt-2">
          View More
        </button>
      </NavLink>
    </section>
=======
// // import React, { useState } from "react";
// // import product1 from "../assets/product1.jpg";
// // import { NavLink } from "react-router-dom";

// // export const newProducts = [
// //   {
// //     id: 1,
// //     category: "skin",
// //     image: product1,
// //     title: "FaceWash For Women",
// //     price: "RS.300",
// //     description: "A refreshing facewash that cleanses your skin deeply."
// //   },
// //   {
// //     id: 2,
// //     category: "skin",
// //     image: product1,
// //     title: "Element Small FaceWash",
// //     price: "RS.250",
// //     description: "Gentle formula, ideal for all skin types."
// //   },
// //   {
// //     id: 3,
// //     category: "skin",
// //     image: product1,
// //     title: "Element Small FaceWash",
// //     price: "RS.250",
// //     description: "Gentle formula, ideal for all skin types."
// //   },
// //   {
// //     id: 4,
// //     category: "skin",
// //     image: product1,
// //     title: "Element Small FaceWash",
// //     price: "RS.250",
// //     description: "Gentle formula, ideal for all skin types."
// //   },
// //   {
// //     id: 5,
// //     category: "skin",
// //     image: product1,
// //     title: "Element Small FaceWash",
// //     price: "RS.250",
// //     description: "Gentle formula, ideal for all skin types."
// //   },
// //   {
// //     id: 6,
// //     category: "skin",
// //     image: product1,
// //     title: "Element Small FaceWash",
// //     price: "RS.250",
// //     description: "Gentle formula, ideal for all skin types."
// //   },
// //   {
// //     id: 7,
// //     category: "skin",
// //     image: product1,
// //     title: "Element Small FaceWash",
// //     price: "RS.250",
// //     description: "Gentle formula, ideal for all skin types."
// //   },
// //   {
// //     id: 8,
// //     category: "skin",
// //     image: product1,
// //     title: "Element Small FaceWash",
// //     price: "RS.250",
// //     description: "Gentle formula, ideal for all skin types."
// //   },
// // ];

// // const Products = () => {
// //   const [visibleCount, setVisibleCount] = useState(4);
// //   const totalProducts = newProducts.length;
// //   const [selectedProduct, setSelectedProduct] = useState(null);

// //   const handleToggle = () => {
// //     setVisibleCount((prev) => (prev >= totalProducts ? 4 : prev + 4));
// //   };

// //   const handleProductClick = (productId) => {
// //     setSelectedProduct((prev) => (prev === productId ? null : productId));
// //   };

// //   return (
// //     <section id="product" className="w-full md:max-w-[90%] md:mx-auto mx-auto my-12">
// //       <div className="flex justify-between w-full items-center">
// //         <h3 className="text-3xl font-extrabold text-gray-800 text-center justify-center">
// //           New Products
// //         </h3>
// //         <div className="text-blue-600 text-xs cursor-pointer" onClick={handleToggle}>
// //           {visibleCount >= totalProducts ? "<<View Less>>" : "<<View More>>"}
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
// //         {newProducts.slice(0, visibleCount).map((product) => (
// //           <div key={product.id} className={`new-product-box-wrapper ${product.category}`}>
// //             <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl border border-gray-100 p-6">
// //               <NavLink to={`productDetail/${product.id}`}>
// //                 <a href="#" className="relative w-full h-80 mb-6">
// //                   <img
// //                     src={product.image}
// //                     alt={product.title}
// //                     className="w-full h-full object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
// //                   />
// //                 </a>
// //               </NavLink>

// //               <div className="flex flex-col gap-1 text-center pt-4">
// //                 <a href="#" className="text-lg font-semibold text-gray-400">
// //                   {product.title}
// //                 </a>
// //                 <span className="text-xl font-medium text-purple-700">{product.price}</span>

// //                 {/* Add a button to toggle the description */}
// //                 <div className="mt-4">
// //                   <button
// //                     className="w-full py-4 px-4 bg-black text-white rounded-full font-semibold text-[15px] hover:bg-gray-700"
// //                     onClick={() => handleProductClick(product.id)}
// //                   >
// //                     {selectedProduct === product.id ? "Hide Description" : "Show Description"}
// //                   </button>

// //                   {/* Show description if the product is clicked */}
// //                   {selectedProduct === product.id && (
// //                     <p className="text-gray-600 mt-3">{product.description}</p>
// //                   )}
// //                 </div>

// //                 <a
// //                   href="#"
// //                   className="w-full mt-5 py-4 px-4 bg-black text-white rounded-full font-semibold text-[15px] hover:bg-gray-700"
// //                 >
// //                   Add To Cart
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <NavLink to="products">
// //         <button className="justify-center border-2 border-black text-center mt-2">
// //           View More
// //         </button>
// //       </NavLink>
// //     </section>
// //   );
// // };

// // export default Products;
import React, { useContext, useEffect, useState } from "react";
import ProductIItem from "../component/ProductItem";
import { ShopContext } from "../context/ShopContext";

const Products = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProdducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("low-high");
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((pre) => pre.filter((item) => item !== e.target.value));
    } else {
      setCategory((pre) => [...pre, e.target.value]);
    }
  };

  console.log(category, "category");

  const applyFilter = () => {
    let productCopy = [...products];

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );

      console.log("productCopy", productCopy);
    }

    setFilterProdducts(productCopy);
  };

  const sortProduct = () => {
    let fCopy = [...filterProducts];

    switch (sortType) {
      case "low-high":
        setFilterProdducts(fCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProdducts(fCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t w-full md:max-w-[90%] md:mx-auto p-4">
      {/*Filter Option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 md:text-4xl text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 my-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"skin"}
                onChange={toggleCategory}
              />
              Skin
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"hair"}
                onChange={toggleCategory}
              />
              Hair
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"makeup"}
                onChange={toggleCategory}
              />
              Makeup
            </p>
          </div>
        </div>
      </div>
      {/*Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <h1 className="md:text-4xl text-xl">All Collection </h1>

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevent">Sort by: Relevance</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts?.map((item) => (
            <ProductIItem
              key={item.id}
              id={item.id}
              image={item.image}
              price={item.price}
              name={item.productName}
            />
          ))}
        </div>
      </div>
    </div>
>>>>>>> 8dfa8a8e306d76af42de4445ea6e959a03cb0257
  );
};

export default Products;
