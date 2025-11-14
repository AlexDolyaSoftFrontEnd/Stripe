import globe from "../../assets/icons/globe.svg";
import phone from "../../assets/icons/phone.svg";
import CarrierTrips from "./CarrierTrips";  

import styles from "./CarrierTitle.module.css";

export default function CarrierTitle({ carrier }) {
  return (
    <div className={styles.title}>
      <div className={styles.title__row}>
        <h1 className={styles.title__name}>{carrier.name}</h1>

        <CarrierTrips count={carrier.trips} />
      </div>

      <div className={styles.title__links}>
        <a href={carrier.site} className={styles.title__link}>
          <img src={globe} alt="" />
          {carrier.site}
        </a>

        <a href={`tel:${carrier.phone}`} className={styles.title__link}>
          <img src={phone} alt="" />
          {carrier.phone}
        </a>
      </div>
    </div>
  );
}

