import Footer from "./customer/components/footer/Footer";
import Navigation from "./customer/components/Navigation";
import Product from "./customer/components/product/Product";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        <Product title="Điện thoại" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
