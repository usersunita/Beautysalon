import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { service } from "../data/ProductData";
import { useForm } from "react-hook-form";
import ProductCard from "../component/ProductCard";

const DetailServices = () => {
  const { name } = useParams();

  const filterData = service.categories.find(
    (category) =>
      category.name.toLowerCase().replace(/\s/g, "") ===
      name.toLowerCase().replace(/\s/g, "")
  );

  const [filteredData, setFilterData] = useState(filterData);
  const { register, watch } = useForm({
    defaultValues: {
      search: "",
      price: "",
    },
  });

  const searchValue = watch("search");
  const priceValue = watch("price");

  useEffect(() => {
    if (filterData) {
      const filteredServices = filterData.services.filter((serviceItem) => {
        const matchesName = serviceItem.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
        const matchesPrice = priceValue
          ? serviceItem.price <= parseFloat(priceValue)
          : true;

        return matchesName && matchesPrice;
      });

      setFilterData({
        ...filterData,
        services: filteredServices,
      });
    }
  }, [searchValue, priceValue, filterData]);

  return (
    <div className="w-full md:max-w-[80%] md:mx-auto mt-20 h-auto ">
      <div className="flex flex-col gap-6 h-40 ">
        <div>
          <h1 className="font-semibold tracking-widest text-[40px] uppercase text-gray-700">
            {filteredData?.name}
          </h1>
        </div>
        <div className=" flex justify-between">
          <div className="flex items-center  rounded-md py-2 w-[400px]">
            <input
              name="search"
              {...register("search")}
              type="search"
              placeholder="Search By name..."
              className="bg-gray-100 border-none outline-none w-full p-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            ></svg>
          </div>
          <div className="flex items-center  rounded-md py-2 w-full md:max-w-[400px] ">
            <input
              name="price"
              {...register("price")}
              type="search"
              placeholder="Search By price..."
              className="bg-gray-100 border-none outline-none w-full p-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            ></svg>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {filteredData &&
          filteredData?.services.map((items, index) => {
            return (
              <div key={index}>
                <ProductCard
                  description={items?.description}
                  img={items.img}
                  name={items?.name}
                  price={items.price}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DetailServices;
