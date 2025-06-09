// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import ProductList from "../page/ProductList";

// const RelatedProducts = ({ category, subCategory }) => {
//   const { products } = useContext(ShopContext);
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     if (products.length > 0) {
//       const filteredProducts = products.filter(
//         (item) => item.category === category && item.subCategory === subCategory
//       );
//       setRelated(filteredProducts.slice(0, 5));
//     }
//   }, [products, category, subCategory]);

//   return (
//     <div className="my-24">
//       <div className="text-center text-3xl py-2">
//         <h2>Related PRODUCTS</h2>
//       </div>{" "}
//       const {products} = useContext(ShopContext);
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {related.map((item, index) => (
//           <ProductList
//             key={index}
//             id={item._id}  
//             name={item.name}
//             price={item.price}
//             image={item.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../component/ProductItem"; // Updated to use ProductItem instead of ProductList

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      // Remove duplicate products based on _id or id
      const uniqueProducts = Array.from(
        new Map(filteredProducts.map((item) => [item._id || item.id, item])).values()
      );

      setRelated(uniqueProducts.slice(0, 5)); // Show only first 5 unique products
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24 mb-10"> {/* Added mb-10 */}
      <div className="text-center text-3xl py-2">
        <h2>Related PRODUCTS</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item) => (
            <ProductItem
              key={item._id || item.id}
              id={item._id || item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;


