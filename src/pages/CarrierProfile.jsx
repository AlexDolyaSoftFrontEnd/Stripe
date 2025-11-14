import CarrierHeader from "../components/CarrierHeader/CarrierHeader";

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

export default function CarrierProfilePage() {
  return (
    <>
      <CarrierHeader carrier={carrierData} />
    </>
  );
}
