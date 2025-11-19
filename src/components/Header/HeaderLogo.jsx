import styles from "./HeaderLogo.module.css";
import logo from "../../assets/logo.svg";

export default function HeaderLogo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__text}>
        <span className={styles.logo__title}>Sprinters</span>
        <span className={styles.logo__subtitle}>Перевізники Європи</span>
      </div>
    </div>
  );
}

