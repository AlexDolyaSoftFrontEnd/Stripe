import CarrierBreadcrumbs from "./CarrierBreadcrumbs";
import styles from "./CarrierHeader.module.css";

export default function CarrierHeader({ title = "Профіль перевізника", subtitle }) {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        
        {/* Хлебные крошки */}
        <CarrierBreadcrumbs
          items={[
            { label: "Головна", to: "/" },
            { label: "Перевізникам", to: "/carriers" },
            { label: "Про нас", to: "/about" },
            { label: "Профіль пепревізника", to: "/profile" },
          ]}
        />

        {/* Заголовок страницы */}
        <h1 className={styles.header__title}>{title}</h1>

        {/* Опциональный подзаголовок */}
        {subtitle && <p className={styles.header__subtitle}>{subtitle}</p>}
      </div>
    </header>
  );
}


