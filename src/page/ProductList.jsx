import React, { useContext, useState } from "react";
import ProductIItem from "../component/ProductItem";
import { ShopContext } from "../context/ShopContext";

const ProductList = () => {
  const { products: newProducts } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(4);
  const totalProducts = newProducts.length;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleToggle = () => {
    setVisibleCount((prev) => (prev >= totalProducts ? 4 : prev + 4));
  };

  const handleProductClick = (productId) => {
    setSelectedProduct((prev) => (prev === productId ? null : productId));
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
          className="text-blue-600 text-xs cursor-pointer"
          onClick={handleToggle}
        >
          {visibleCount >= totalProducts ? "<<View Less>>" : "<<View More>>"}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {newProducts.slice(0, visibleCount).map((product, index) => (
          <ProductIItem
            id={product.id}
            image={product.image}
            name={product.productName}
            price={product.price}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
