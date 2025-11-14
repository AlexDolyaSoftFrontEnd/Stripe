import CarrierStatItem from "./CarrierStatItem";
import flame from "../../assets/icons/flame.svg";
import users from "../../assets/icons/users.svg";
import bus from "../../assets/icons/bus.svg";
import map from "../../assets/icons/map.svg";
import city from "../../assets/icons/city.svg";

import styles from "./CarrierStats.module.css";

export default function CarrierStats({ carrier }) {
  return (
    <div className={styles.stats}>
      <CarrierStatItem icon={flame} label="На ринку від:" value={carrier.since} />
      <CarrierStatItem icon={users} label="Перевезених пасажирів" value={carrier.passengers} />
      <CarrierStatItem icon={bus} label="Автопарк" value={carrier.buses} />
      <CarrierStatItem icon={map} label="Обслуговуємо" value={carrier.countries} />
      <CarrierStatItem icon={city} label="Місто" value={carrier.city} />
    </div>
  );
}

