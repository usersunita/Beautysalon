
import React from 'react';
import image3 from '../assets/image3.jpg';
import image2 from '../assets/image2.jpg';

const Gallery = () => {
  return (
    <div>
      <div className="w-full md:max-w-[90%] md:mx-auto flex-col px-10 py-10 justify-center items-center gap-10 ">
        <h1 className="text-6xl text-black font-bold text-center">Our GALLERY</h1>
        <p className="text-4xl text-black font-bold text-center">
          Experience the best service with us
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-10">
        <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
          <img   src={image3} alt="Gallery Image 1"  className="rounded-xl w-[400px] h-[350px] object-cover" />
          <img src={image2}  alt="Gallery Image 2"  className="rounded-xl w-[400px] h-[350px] object-cover"  />
          <img src={image3}  alt="Gallery Image 3"  className="rounded-xl w-[400px] h-[350px] object-cover"  />
          <img  src={image2}  alt="Gallery Image 4"  className="rounded-xl w-[400px] h-[350px] object-cover"  />
          <img   src={image3} alt="Gallery Image 5"  className="rounded-xl w-[400px] h-[350px] object-cover" />
          <img  src={image2}  alt="Gallery Image 6"  className="rounded-xl w-[400px] h-[350px] object-cover"/>
          <img  src={image3} alt="Gallery Image 7" className="rounded-xl w-[400px] h-[350px] object-cover" />
          <img  src={image2}  alt="Gallery Image 8"  className="rounded-xl w-[400px] h-[350px] object-cover"/>
          <img  src={image3} alt="Gallery Image 9"  className="rounded-xl w-[400px] h-[350px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
