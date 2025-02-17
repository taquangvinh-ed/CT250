import { Route, Routes } from "react-router-dom";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation";
import Order from "./customer/components/Order/Order";
import OrderDetail from "./customer/components/Order/OrderDetail";
import Cart from "./customer/components/product/Cart/Cart";
import Product from "./customer/components/product/Product";
import ProductDetails from "./customer/components/ProductDetail/ProductDetails";
import HomePage from "./customer/pages/HomePage/HomePage";
import CustomerRouters from "./customerRouters/CustomerRouters";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
      <div>{/* <Navigation /> */}</div>
      <div>
        {/* <HomePage /> */}
        {/* <Product title="Điện thoại" /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
