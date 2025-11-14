import { Routes, Route } from "react-router-dom";
import Scroll from "./components/Scroll/Scroll";

import Header from "./components/Header/Header";

import CarrierHeader from "./components/CarrierHeader/CarrierHeader";
import CarrierInfo from "./components/CarrierInfo/CarrierInfo";

import ServiceBlock from "./components/ServiceBlock/ServiceBlock";
import DriversSwiper from "./components/DriversSwiper/DriversSwiper";
import ReviewsBlock from "./components/ReviewsBlock/ReviewsBlock";

import Footer from "./components/Footer/Footer";  

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
  city: "Львів"
};

function App() {
  return (
    <>
      <Header />
      <Scroll />
      <Routes>
        <Route path="/" element={<h1>Главная</h1>} />
        <Route path="/carriers" element={<h1>Перевізникам</h1>} />
        <Route path="/about" element={<h1>Про нас</h1>} />

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

        <Route path="/create" element={<h1>Створити профіль</h1>} />
      </Routes>

      <Footer />   
    </>
  );
}

export default App;



