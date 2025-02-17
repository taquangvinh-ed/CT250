import React from "react";
import Navigation from "../customer/components/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/product/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import ProductDetails from "../customer/components/ProductDetail/ProductDetails";
import Order from "../customer/components/Order/Order";
import OrderDetail from "../customer/components/Order/OrderDetail";
import Checkout from "../customer/components/Checkout/Checkout";
import Product from "../customer/components/product/Product";
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:labelOne/:labelTwo/:labelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetail />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
