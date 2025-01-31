import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-pink-100 w-full   flex flex-col justify-center gap-6 p-6 pt-12  border-gray-700">
        <h1 className="text-black font-bold text-5xl text-center">
          Beauty<span className="text-gray-400">Salon</span>
        </h1>
        <p className="text-lg text-center font-semibold text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil
          animi quasi nam harum asperiores recusandae autem doloribus qui culpa
          cumque eius quia perspiciatis, iure officiis odit quos, placeat error.
        </p>
        <div className="flex justify-center items-center gap-4">
          <div className="p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
            <FaFacebook className="size-7 " />
          </div>
          <div className="p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
            <FaInstagram className="size-7 " />
          </div>
          <div className="p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
            <FaTwitter className="size-7 " />
          </div>
          <div className="p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300 shadow-lg shadow-gray-200">
            <FaWhatsapp className="size-7" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
