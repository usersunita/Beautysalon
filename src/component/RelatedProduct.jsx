import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
// import ProductList from "../page/ProductList";

<<<<<<< HEAD
// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from './ShopContext';
// import ProductList from '../page/ProductList';

// const RelatedProducts = ({category, subCategory }) => {
//   const { products } = useContext(ShopContext);
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     if (products.length > 0) {
//       const filteredProducts = products.filter(
//         item => item.category === category && item.subCategory === subCategory
//       );
//       setRelated(filteredProducts.slice(0, 5)); 
//     }
//   }, [products, category, subCategory]); 

//   return (
//     <div className='my-24'>
//       <div className='text-center text-3xl py-2'>
//         <h2>Related PRODUCTS</h2>
//       </div>
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
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
=======
const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelated(filteredProducts.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <h2>Related PRODUCTS</h2>
      </div>{" "}
      const {products} = useContext(ShopContext);
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {/* {related.map((item, index) => (
          <ProductList
            key={index}
            id={item._id}  
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))} */}
      </div>
    </div>
  );
};

export default RelatedProducts;
>>>>>>> 8dfa8a8e306d76af42de4445ea6e959a03cb0257
