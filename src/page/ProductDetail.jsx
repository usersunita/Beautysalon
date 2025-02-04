import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Button from "../component/Button";

const Product = () => {
  const { id } = useParams();

  const { products, doller, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState();

  const fetchProductData = async () => {
    products.filter((items) => {
      if (items.id === parseInt(id)) {
        setProductData(items);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 w-full md:max-w-[80%] mx-auto h-screen">
      {/*Product dara */}
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reserve gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            <img
              src={productData?.image}
              alt=""
              className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
            />
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={productData?.image} alt="" />
          </div>
        </div>

        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">
            {productData?.productName}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStarHalfAlt color="gold" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {doller}
            {productData?.price}
          </p>
          <p className="mt-5 text-gray-600 md:w-4/5">
            {productData?.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <div>
              <Button
                buttonClassName=""
                label="Add To Cart"
                className="text-white py-2 px-6 bg-black"
                onClick={() => addToCart(productData)}
              />
              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 f;ex f;ex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash on Delivary is availale</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
      </div>
      <div className="flex flex-col text-gray-600  py-6 text-sm gap-y-6">
        <p>
          An Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          blanditiis accusamus unde, quod harum voluptas odit soluta, veniam
          consequatur eaque distinctio esse suscipit ab dolore labore nihil?
          Dolore, sequi repellat.e commerce website is an online platform that
          facilate the buying and selling cloths
        </p>
        <p>
          E-commerce websites typically display product or services alonh with
          detailed information.
        </p>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
