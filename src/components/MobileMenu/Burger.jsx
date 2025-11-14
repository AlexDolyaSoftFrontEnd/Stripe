import styles from "./Burger.module.css";

export default function Burger({ open, setOpen }) {
  return (
    <button
      type="button"
      className={`${styles.burger} ${open ? styles.burger_open : ""}`}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
    >
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
    </button>
  );
}

