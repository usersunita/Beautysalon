import React, { useContext, useEffect, useState } from "react";
import ProductIItem from "../component/ProductItem";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
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

  const applyFilter = () => {
    let productCopy = [...products];

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
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
  );
};

export default Collection;
