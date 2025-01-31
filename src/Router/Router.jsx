import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Home from "../page/Home";
import ProductDetail from "../page/ProductDetail";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
