import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dove from "../assets/dove.png";
import FixDerma from "../assets/fix derma.png";
import MamaEarth from "../assets/mamaearth.jpg";
import Garnier from "../assets/Garnier.png";
import Offer1 from "../assets/offer1.jpg";
import Offer2 from "../assets/offer2.avif";
import products from "../assets/products.jpg";

const offersData = [
  {
    id: 1,
    title: "Exclusive Deals",
    discount: "Up to 40% OFF",
    description:
      "Get your cart rolling with Top Beauty Picks at unbelievable offers.",
    brands: [Dove, FixDerma, MamaEarth, Garnier],
    image: Offer1,
  },
  {
    id: 2,
    title: "Limited Time Offer",
    discount: "Flat 50% OFF",
    description:
      "Grab the best beauty products at half the price. Limited stock available!",
    brands: [MamaEarth, FixDerma, Garnier, Dove],
    image: products,
  },
  {
    id: 3,
    title: "Special Sale",
    discount: "Buy 1 Get 1 Free",
    description: "Shop now and get exclusive 1+1 offers on top beauty brands.",
    brands: [Garnier, Dove, MamaEarth, FixDerma],
    image: products,
  },
];

const BeautyBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    //   autoplaySpeed: 4000,
  };

  return (  
    <div>
{/* <h3 className="text-4xl font-extrabold text-gray-800 text-center justify-center flex flex-col mt-8 gap-6">
        Hot Deals
      </h3> */}
    <div className="flex bg-gradient-to-r from-pink-100 to-blue-100  px-5 md:px-16 w-full w-full md:max-w-[90%] md:mx-auto items-center mb-5 ">
      <Slider {...settings} className="w-full  ">
        {offersData.map((offer) => (
          <div key={offer.id} className="flex  ">
            <div className="flex justify-between w-full  items-center gap-4">
              <div className="text-left flex flex-col ">
                <h2 className="text-gray-800 text-2xl md:text-4xl font-semibold">
                  {offer.title}
                </h2>
                <p className="text-black text-3xl md:text-4xl font-bold my-3">
                  <span className="bg-white px-3 py-2 rounded-md shadow-md">
                    {offer.discount}
                  </span>
                </p>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  {offer.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-6 ">
                  {offer.brands.map((brand, index) => (
                    <img
                      key={index}
                      src={brand}
                      alt="Brand"
                      className="w-20 h-auto"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center ">
                <img
                  src={offer.image}
                  alt="Beauty Products"
                  className="max-w-[400px] md:max-w-[400px] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default BeautyBanner;
