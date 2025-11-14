import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.nav__link_active : styles.nav__link
            }
          >
            Головна
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/carriers"
            className={({ isActive }) =>
              isActive ? styles.nav__link_active : styles.nav__link
            }
          >
            Перевізникам
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.nav__link_active : styles.nav__link
            }
          >
            Про нас
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.nav__link_active : styles.nav__link
            }
          >
            Профіль перевізника
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


