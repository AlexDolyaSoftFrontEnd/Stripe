import styles from "./CarrierHeader.module.css";

export default function CarrierHeader({ title}) {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        {title && <h1 className={styles.header__title}>{title}</h1>}
      </div>
    </header>
  );
}



