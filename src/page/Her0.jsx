
import React from 'react';
import image1 from '../assets/image1.jpg';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { FaHeadphones } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import slider1 from '../assets/slider1.jpg'
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg'
import ProductGrid from '../component/ProductGrid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Her0 = () => {
  const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <div>
      <section id="home" className="w-full md:max-w-[90%] md:mx-auto  flex flex-col justify-center items-center gap-8 md:flex-row pt-6 ">
        <div id="content-box" className="flex flex-col justify-center items-start gap-8 p-6   bg-pink-100 text-gray-700 rounded-md">
          <h1 className="text-5xl  font-semibold">WELCOME</h1>
          <h1 className="text-3xl  font-bold">
            Beauty Salon in Nepal, Kathmandu
          </h1>
          <div data-aos="slide-up" id="icon-list" className="flex flex-col justify-center items-start gap-6">
            <div id="icon-box" className="flex justify-center items-center gap-3">
              <FaLocationDot className="text-black text-2xl" />
              <h1 className="text-xl text-gray-800 font-semibold">Kathmandu, 10 Tinkune</h1>
            </div>
            <div id="icon-box" className="flex justify-center items-center gap-3">
              <MdOutlinePhoneAndroid className="text-black text-2xl" />
              <h1 className="text-xl text-gray-800 font-semibold">9845678945 / 0166457</h1>
            </div>
            <div id="icon-box" className="flex justify-center items-center gap-3">
              <MdEmail className="text-black text-2xl" />
              <h1 className="text-xl text-gray-800 font-semibold">company@gmail.com</h1>
            </div>
            <div id="icon-box" className="flex justify-center items-center gap-3">
              <FaHeadphones className="text-black text-2xl" />
              <h1 className="text-xl text-gray-800 font-semibold">customer@gmail.com</h1>
            </div>
          </div>
          <button className="px-8 py-3 rounded-xl border-2 border-gray-600 text-gray-600 font-semibold text-lg hover:bg-pink-300">
            Book an Appointment
          </button>
        </div>
        <div className="md:w-[50%] w-full"> 
        <Slider {...settings}>
          <img
            src={slider1}
            alt="Beauty Salon Interior"
            className="rounded-xl w-full md:h-[500px] h-[350px] object-cover"
          />
           <img
            src={image2}
            alt="Beauty Salon Interior"
            className="rounded-xl w-full md:h-[500px] h-[350px] object-cover"
          />
           <img
            src={image3}
            alt="Beauty Salon Interior"
            className="rounded-xl w-full md:h-[500px] h-[350px] object-cover"
          />
          </Slider>
        </div>
      </section>


      {}
      <ProductGrid/>
    </div>
  );
};

export default Her0;




