import { NavLink } from "react-router-dom";
import styles from "./MobileNav.module.css";

export default function MobileNav({ open, onClose }) {
  return (
    <div className={`${styles.menu} ${open ? styles.menu_open : ""}`}>
      <nav className={styles.menu__nav}>
        <NavLink
          to="/"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.menu__link_active : styles.menu__link
          }
        >
          Головна
        </NavLink>

        <NavLink
          to="/carriers"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.menu__link_active : styles.menu__link
          }
        >
          Перевізникам
        </NavLink>

        <NavLink
          to="/about"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.menu__link_active : styles.menu__link
          }
        >
          Про нас
        </NavLink>

        <NavLink
          to="/profile"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.menu__link_active : styles.menu__link
          }
        >
          Профіль перевізника
        </NavLink>
      </nav>

      <div className={styles.menu__actions}>
        <NavLink to="/create" onClick={onClose} className={styles.menu__create}>
          Створити профіль
        </NavLink>
        <button className={styles.menu__login} onClick={onClose}>
          Увійти
        </button>
      </div>
    </div>
  );
}

