import React, { useContext, useState } from "react";
import logo from "../assets/logo.avif";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import cart_icon from "../assets/cart_icon.png";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";

const Header = () => {
  const { cartCount } = useContext(ShopContext);

  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };
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
            <h1 className="text-black font-bold text-2xl lg:text-3xl">
              Beauty <span className="text-gray-400">Salon</span>{" "}
            </h1>
          </NavLink>
        </div>
        <div className="block lg:hidden" onClick={handleMobileMenu}>
          <BiMenuAltRight className="h-14 w-14" />
        </div>
        <div className=" items-center bg-gray-100 rounded-md px-3 py-2 w-[30%] hidden lg:flex">
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

        <div className="lg:flex items-center space-x-4 hidden">
          <Link to="/cart" className="relative">
            <img src={cart_icon} alt="" className="w-5 min-w-5" />
            <p className="absolute right-[-5px] bottom-[-4px] w-4 text-center leading-4  bg-black text-white aspect-square rounded-full text-[8px]">
              {cartCount}
            </p>
          </Link>
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
      {isMobileOpen && (
        <div
          className="fixed inset-50 bg-gray-50 "
          onClick={handleMobileMenu}
        ></div>
      )}

      <aside
        className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg p-6 transform transition-transform z-50 lg:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="h-8" />
          <RiCloseLine
            className="h-8 w-8 text-gray-700 cursor-pointer"
            onClick={handleMobileMenu}
          />
        </div>

        <ul className="flex flex-col gap-6 mt-10 text-gray-700">
          <li className="cursor-pointer hover:text-btnprimary">
            <NavLink to="/" onClick={handleMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-btnprimary">
            <NavLink to="/about" onClick={handleMobileMenu}>
              About Us
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-btnprimary">
            <NavLink to="/contact" onClick={handleMobileMenu}>
              Contact Us
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-btnprimary">
            <NavLink to="/products" onClick={handleMobileMenu}>
              Product
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-btnprimary">
            <NavLink to="/products" onClick={handleMobileMenu}>
              Service
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-btnprimary">
            <NavLink to="/products" onClick={handleMobileMenu}>
              Testomoinal
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-btnprimary">
            <NavLink to="/products" onClick={handleMobileMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="flex pt-40 flex-col gap-3 mt-6">
          <NavLink to="createaccount" onClick={handleMobileMenu}>
            
          </NavLink>
          <NavLink to="signin" onClick={handleMobileMenu}>
            <button
              className="w-full py-2 border border-gray-300 text-primary rounded-md"
            />
          </NavLink>
        </div>
      </aside>
    </nav>
  );
};

export default Header;
