import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Scroll from "./components/Scroll/Scroll";


import CarrierHeader from "./components/CarrierHeader/CarrierHeader";
import CarrierInfo from "./components/CarrierInfo/CarrierInfo";
import DriversSwiper from "./components/DriversSwiper/DriversSwiper";
import ReviewsBlock from "./components/ReviewsBlock/ReviewsBlock";
import ServiceBlock from "./components/ServiceBlock/ServiceBlock";
import About from "./pages/About";
import ForCarriers from "./pages/ForCarriers";
import Home from "./pages/Home";


const carrierData = {
  name: "Stripe",
  logo: "/images/carrier-logo.png",
  site: "https://stripe.com",
  phone: "+38 (073) 555 55 55",
  trips: 43,
  since: "Травень 31, 2011",
  passengers: "4000+",
  buses: "8 бусів",
  countries: "8 країн",
  city: "Львів",
};

const PageTitle = ({ children }) => (
  <h1
    style={{
      marginLeft: 24,
      marginTop: 20,
      fontWeight: 600,
      width: "100%",
      boxSizing: "border-box"
    }}
  >
    {children}
  </h1>
);
function App() {
  return (
    <>
      <Header />
      <Scroll />

      <main style={{ minHeight: "60vh", width: "100%", boxSizing: "border-box" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/carriers" element={<ForCarriers />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/profile"
            element={
              <>
                <CarrierHeader carrier={carrierData} />
                <CarrierInfo />
                <DriversSwiper />
                <ServiceBlock />
                <ReviewsBlock />
              </>
            }
          />

          <Route path="/create" element={<PageTitle>Створити профіль</PageTitle>} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

