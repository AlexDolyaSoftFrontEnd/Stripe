import styles from "./CarrierTrips.module.css";

export default function CarrierTrips({ count }) {
  return (
    <div className={styles.trips}>
      {count} Поїздок
    </div>
  );
}

