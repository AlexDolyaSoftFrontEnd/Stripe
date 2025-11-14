import styles from "./HeaderActions.module.css";

export default function HeaderActions() {
  return (
    <div className={styles.actions}>
      <a href="/create" className={styles.actions__create}>
        Створити профіль
      </a>
      <button className={styles.actions__login}>Увійти</button>
    </div>
  );
}

