import styles from "./CarrierStatItem.module.css";

export default function CarrierStatItem({ icon, label, value }) {
  return (
    <div className={styles.item}>
      <div className={styles.item__icon}>
        <img src={icon} alt="" />
      </div>

      <div className={styles.item__info}>
        <span className={styles.item__label}>{label}</span>
        <span className={styles.item__value}>{value}</span>
      </div>
    </div>
  );
}

