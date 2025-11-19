import { Routes, Route } from "react-router-dom";

import Scroll from "./components/Scroll/Scroll";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import CarrierHeader from "./components/CarrierHeader/CarrierHeader";
import CarrierInfo from "./components/CarrierInfo/CarrierInfo";
import ServiceBlock from "./components/ServiceBlock/ServiceBlock";
import DriversSwiper from "./components/DriversSwiper/DriversSwiper";
import ReviewsBlock from "./components/ReviewsBlock/ReviewsBlock";


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

      <main style={{ minHeight: "60vh" }}>
        <Routes>
          <Route path="/" element={<PageTitle>Главная</PageTitle>} />

          <Route path="/carriers" element={<PageTitle>Перевізникам</PageTitle>} />

          <Route path="/about" element={<PageTitle>Про нас</PageTitle>} />

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

