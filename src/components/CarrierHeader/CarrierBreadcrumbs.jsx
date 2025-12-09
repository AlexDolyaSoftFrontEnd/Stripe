import { Link } from "react-router-dom";
import styles from "./CarrierBreadcrumbs.module.css";

export default function CarrierBreadcrumbs({ items = [], current = "" }) {
  const lastIndex = items.length - 1;

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbs__list}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbs__item}>
            <Link to={item.to} className={styles.breadcrumbs__link}>
              {item.label}
            </Link>

            {/* Разделитель */}
            {index !== lastIndex && (
              <span className={styles.breadcrumbs__separator}>/</span>
            )}
          </li>
        ))}

        {/* Текущая страница */}
        {current && (
          <li className={styles.breadcrumbs__item}>
            <span className={styles.breadcrumbs__current}>{current}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}

