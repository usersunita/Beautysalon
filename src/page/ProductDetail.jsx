import React from "react";
import { useParams } from "react-router-dom";
import { newProducts } from "./Products";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id, "id");

  const filterProduct = newProducts.filter(
    (item) => item.id.toString() === id.toString()
  );
  console.log(filterProduct, "filtredProduct");
  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
