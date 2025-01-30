import React from 'react';
import contact from '../assets/contact.jpg';

const Contact = () => {
  return (
    <div id="contact" className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start">
      <div
        className="w-full bg-cover bg-center h-[700px]"
        style={{
          backgroundImage: `url(${contact})`, 
        }}
      >
      </div>

      <div className="bg-gray-900 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]">
        <h1 className="text-white text-6xl font-bold text-center">Contact Us</h1>

        <div className="w-full flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full p-3 text-black font-semibold"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-3 text-black font-semibold"
          />
          <textarea
            name=""
            rows={5}
            cols={30}
            placeholder="Enter Your message here......."
            className="w-full p-3"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="bg-white hover:bg-gray-400 cursor-pointer w-full p-3 text-black text-lg font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
