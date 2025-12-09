import { useNavigate } from "react-router-dom";
import styles from "./HeaderLogo.module.css";

export default function HeaderLogo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); 
  };

  return (
    <div className={styles.logo} onClick={handleClick} role="button" tabIndex={0}>
      <div className={styles.logo__text}>
        <span className={styles.logo__title}>Sprinters</span>
        <span className={styles.logo__subtitle}>Перевізники Європи</span>
      </div>
    </div>
  );
}

