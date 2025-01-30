

import React from 'react';
import image3 from '../assets/image3.jpg';
import { FaAngleDoubleRight } from 'react-icons/fa';

const WhyChoose = () => {
  return (
    <div>
      <section id='about'
        className="w-full md:px-20 px-10 md:py-20 py-20 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full">
          <h1 className="text-gray-600 text-4xl font-bold">WORKING HOURS</h1>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-xl">SUNDAY 10AM - 8PM</p>
            <p className="text-xl">MONDAY 10AM - 8PM</p>
            <p className="text-xl">TUESDAY 10AM - 8PM</p>
            <p className="text-xl">WEDNESDAY 10AM - 8PM</p>
            <p className="text-xl">THURSDAY 10AM - 8PM</p>
            <p className="text-xl">FRIDAY 10AM - 8PM</p>
            <p className="text-xl">SATURDAY 9AM - 8PM</p>
          </div>
          <button className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6">
            Book Now
          </button>
        </div>

        <div className="md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit">
          <h1 className="text-6xl text-black font-bold text-center">WHY CHOOSE US</h1>
          <p className="text-2xl font-semibold text-black md:text-start text-center">
            The purple penguin danced elegantly across the moonlit marshmallow field
          </p>

          {/* List of Reasons */}
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex justify-center items-center gap-3">
              <FaAngleDoubleRight className="text-black text-2xl" />
              <h1 className="text-xl text-black font-semibold">Always Welcoming</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex justify-center items-center gap-3">
              <FaAngleDoubleRight className="text-black text-2xl" />
              <h1 className="text-xl text-black font-semibold">Experienced Staff</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex justify-center items-center gap-3">
              <FaAngleDoubleRight className="text-black text-2xl" />
              <h1 className="text-xl text-black font-semibold">High-Quality Products</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex justify-center items-center gap-3">
              <FaAngleDoubleRight className="text-black text-2xl" />
              <h1 className="text-xl text-black font-semibold">Affordable Prices</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex justify-center items-center gap-3">
              <FaAngleDoubleRight className="text-black text-2xl" />
              <h1 className="text-xl text-black font-semibold">Friendly Environment</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
