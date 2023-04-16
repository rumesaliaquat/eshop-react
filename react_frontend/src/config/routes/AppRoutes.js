import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/ProductDetails.js";
import Contact from "../../pages/Contact";
import Cart from "../../pages/Cart";
import Error from "../../pages/Error";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRoutes() {
  return (
    // static routing
    // dynamic routing (/:id >>> :id parameter accept only string type data means  in string include no,alpha etc)
    // *** react router first check static/fixed route then dynamic route eg: /users/admin >> static route , /users/:id >> dynamic route

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products k/>} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;