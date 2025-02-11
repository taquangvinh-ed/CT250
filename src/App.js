import Footer from "./customer/components/footer/Footer";
import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
