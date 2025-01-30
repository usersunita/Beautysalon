
import React from 'react';
import image4 from '../assets/image4.jpg';
import image2 from '../assets/image2.jpg'
import nail from '../assets/nail.avif'
import facial from '../assets/facial.avif'
import wax from '../assets/wax.avif'
import lashes from '../assets/lashes.avif'
import makeup from '../assets/makeup.avif'

const Services = () => {
  const services = [
    { name: 'Hair Care', img: image2 },
    { name: 'Nail Care', img: nail},
    { name: 'Facial Treatments', img: facial },
    { name: 'Waxing', img: wax },
    { name: 'Lashes Extension', img: lashes },
    { name: 'Makeup', img: makeup },
  ];

  return (
    <div id="services" className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-16 ">

      <div className="flex flex-col justify-center items-center gap-4 w-full text-center">
        <h1 className="text-6xl text-black font-bold">Our Services</h1>
        <p className="text-xl text-black">The purple penguin danced elegantly across the moonlit marshmallow field</p>
      </div>
      <div className="w-full flex justify-start items-start gap-16">
        <div className="w-[60%]  flex flex-col justify-start items-start gap-8">
          <div className="w-full h-full">
            <img src={image4} alt="Beauty Salon" className="w-full rounded-xl" />
          </div>
        </div>
        <div className="w-[40%]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 ">
            {services.map((service, index) => (
              <div key={index} className="bg-pink-100 px-8 py-12 flex-col justify-center items-center gap-4 rounded-xl">
                <img src={service.img} alt={service.name} className="w-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <h1 className="text-black text-[25px] font-bold">{service.name}</h1>
                <button  className='border-2 border-black mt-5 bg-black text-white'>View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
