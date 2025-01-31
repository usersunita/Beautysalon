import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Home from "../page/Home";
import ProductDetail from "../page/ProductDetail";
import Register from "../page/Register";
import Login from "../page/Login";
import Products from "../page/Products";
import DetailServices from "../page/DetailServices";

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
          <Route path="/services/:name" element={<DetailServices />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/testmonial" element={<Home />} />
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
