import React from "react";
import logo from "../assets/logo.avif";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="sticky top-0 bg-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center mb-5">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Beauty Palace Logo"
              className="h-12 w-auto mr-2"
            />
            <h1 className="text-black font-bold text-3xl">
              Beauty <span className="text-gray-400">Salon</span>{" "}
            </h1>
          </NavLink>
        </div>

        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-[30%]">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 border-none outline-none w-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex items-center space-x-4">
          <NavLink to="Login" className="text-gray-700 hover:text-gray-900">
            Sign In
          </NavLink>
          <span className="text-gray-500">|</span>
          <NavLink to="register" className="text-gray-700 hover:text-gray-900">
            Register
          </NavLink>
        </div>
      </div>
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        <li>
          <NavLink
            to="/"
            className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-400"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-400"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-400">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-400"
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="services"
            className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-400"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="testimonial"
            className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-400"
          >
            Testimonial
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-400"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
