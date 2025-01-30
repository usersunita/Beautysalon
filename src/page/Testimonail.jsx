

import React from 'react';
import dummy from '../assets/dummy.jpg';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const clients = [
  {
    image: dummy,
    title: 'JONE DEW',
    paragraph: 'On a crisp morning, the zebra wearing a tiny bow tie decided to take a leisurely stroll through the enchanted forest. As it wandered past the shimmering candy cane trees, it stumbled upon a group of squirrels hosting a tea party.'
  },
  {
    image: dummy,
    title: 'JANE DOE',
    paragraph: 'On a crisp morning, the zebra wearing a tiny bow tie decided to take a leisurely stroll through the enchanted forest. As it wandered past the shimmering candy cane trees, it stumbled upon a group of squirrels hosting a tea party.'
  },
  {
    image: dummy,
    title: 'ALICE SMITH',
    paragraph: 'On a crisp morning, the zebra wearing a tiny bow tie decided to take a leisurely stroll through the enchanted forest. As it wandered past the shimmering candy cane trees, it stumbled upon a group of squirrels hosting a tea party.'
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial" className="w-full md:max-w-[90%] md:mx-auto h-fit px-5 py-10 flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl text-black font-bold text-center ">Testimonials</h1>
      <p className="text-xl text-black font-semibold text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores commodi provident molestiae iste totam vero blanditiis odio sequi? Voluptates quod, numquam ullam reprehenderit modi iusto. Modi qui nihil saepe repellat.
      </p>
      <div id="clients" className="grid grid-cols-1 md:grid-cols-3 justify-end items-center gap-6">
        {clients.map((items, index) => (
          <div key={index} id="main-box" className="w-full bg-pink-100 p-14 flex flex-col justify-between items-center gap-5 rounded-3xl">
            <div className="flex justify-between items-center gap-8 w-full">
              <div className="flex justify-center items-center gap-4 relative">
                <BiSolidQuoteAltLeft className="size-20 text-[#1caf7e] absolute left-0 opacity-20" />
                <h1 className="text-2xl text-black font-bold">{items.title}</h1>
              </div>
              <img src={items.image} alt={items.title} className="w-[100px] h-[100px] transform hover:scale-110 transition duration-300 cursor-pointer" />
            </div>
            <div className="w-full">
              <p className="text-end text-lg text-gray-600 font-medium">{items.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
