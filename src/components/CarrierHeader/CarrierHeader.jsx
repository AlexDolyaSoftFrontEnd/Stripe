import styles from "./CarrierHeader.module.css";

export default function CarrierHeader({subtitle }) {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        {subtitle && <p className={styles.header__subtitle}>{subtitle}</p>}
      </div>
    </header>
  );
}



