import React from "react";
import Header from "./component/Header";
import Her0 from "./page/Her0";
import WhyChoose from "./page/WhyChoose";
import Pricing from "./page/Pricing";
import Services from "./page/Services";
import Gallery from "./page/Gallery";
import Testimonail from "./page/Testimonail";
import Contact from "./page/Contact";
import Footer from "./component/Footer";
import Products from "./page/Products";
import Home from "./page/Home";
import Router from "./Router/Router";

const App = () => {
<<<<<<< HEAD
  return (
    <div  className='bg-gray-50'>
 
      <Header/>
      <Her0/>
       <WhyChoose/> 
       <Products/> 
       <Services/> 
     <Gallery/>
       <Testimonail/>
    {/* <Contact/>
      <Footer/> */}
  </div>
  )
}
=======
  return <Router />;
};
>>>>>>> 83f8044cadc2d6e88778468b5bb1a61ac053be19

export default App;
