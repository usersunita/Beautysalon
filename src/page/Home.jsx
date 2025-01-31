import React from "react";
import Her0 from "./Her0";
import WhyChoose from "./WhyChoose";
import Products from "./Products";
import Services from "./Services";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-50">
        <Her0 />
        <WhyChoose />
        <Products />
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
