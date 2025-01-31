import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Home from "../page/Home";
import ProductDetail from "../page/ProductDetail";
import Register from "../page/Register";
import Login from "../page/Login";
import Products from "../page/Products";
<<<<<<< HEAD
import ProductList from "../page/ProductList";
=======
import DetailServices from "../page/DetailServices";
>>>>>>> 10d2c752af7905a5182a9d85bbccbaba56e988fa

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/Products" element={<Products />} />
<<<<<<< HEAD
          {/* <Route path="/productlist/:id" element={<ProductList/>}/> */}
          <Route path="/services" element={<Home />} />
          <Route path="/gallery" element={<Home/>}/>
          <Route path ="/testmonial" element={<Home/>}/>
=======
          <Route path="/services/:name" element={<DetailServices />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/testmonial" element={<Home />} />
>>>>>>> 10d2c752af7905a5182a9d85bbccbaba56e988fa
          <Route path="/contact" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="productdetail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
