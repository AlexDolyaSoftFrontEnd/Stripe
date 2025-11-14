import { Link } from "react-router-dom";
import styles from "./CarrierBreadcrumbs.module.css";

export default function CarrierBreadcrumbs({ items = [], current }) {
  return (
    <nav className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <div key={index} className={styles.breadcrumbs__group}>
          <Link to={item.to} className={styles.breadcrumbs__link}>
            {item.label}
          </Link>
          <span className={styles.breadcrumbs__separator}>/</span>
        </div>
      ))}

      <span className={styles.breadcrumbs__current}>{current}</span>
    </nav>
  );
}

