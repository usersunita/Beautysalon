import React from 'react';
import image4 from '../assets/image4.jpg';
import image2 from '../assets/image2.jpg'
import nail from '../assets/nail.avif'
import facial from '../assets/facial.avif'
import wax from '../assets/wax.avif'
import lashes from '../assets/lashes.avif'
import makeup from '../assets/makeup.avif'
import waxing from '../assets/waxing.jpg'
import lashesext from '../assets/lashesext.jpg'

const Services = () => {
  const services = [
    { name: 'Hair Care', img: image2 },
    { name: 'Nail Care', img: nail},
    { name: 'Facial Treatments', img: facial },
    { name: 'Waxing', img: waxing },
    { name: 'Lashes Extension', img: lashesext },
    { name: 'Makeup', img: makeup },
  ];

  return (
    <div id="services" className="w-full md:max-w-[90%] md:mx-auto flex flex-col  px-5  py-5 justify-center items-center gap-10 ">
      <div className="flex flex-col justify-center items-center gap-4 w-full text-center">
        <h1 className="text-6xl text-black font-bold">Our Services</h1>
        <p className="text-xl text-black">The purple penguin danced elegantly across the moonlit marshmallow field</p>
      </div>
      <div className="w-full flex justify-start items-start gap-16">
        <div className="w-full">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-pink-100 px-8 py-12 flex-col justify-center items-center gap-4 rounded-xl">
                <img src={service.img} alt={service.name} className="w-30 h-30 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <h1 className="text-black text-[25px] font-bold">{service.name}</h1>
                <button className='border-2 border-black mt-5 bg-black text-white'>View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

