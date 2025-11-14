import styles from "./ServiceBlock.module.css";

export default function ServiceBlock() {
  const services = [
    {
      label: "Кондиціонер",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17"
            stroke="#3b45f8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Wi-Fi",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M2 8.5C7 4 17 4 22 8.5M6 12c4-3 8-3 12 0M10 15.5c2-1.5 4-1.5 6 0M13 19h.01"
            stroke="#3b45f8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "TV",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="5"
            width="18"
            height="12"
            rx="2"
            stroke="#3b45f8"
            strokeWidth="2"
          />
          <path d="M8 21h8" stroke="#3b45f8" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: "Туалет",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 20V8M5 20V8M7 5.5c1 0 1.5-.6 1.5-1.3C8.5 3.2 7.8 2.5 7 2.5S5.5 3.2 5.5 4.2 6 5.5 7 5.5zM17 20v-6M13 20v-6M15 5.5c1 0 1.5-.6 1.5-1.3C16.5 3.2 15.8 2.5 15 2.5s-1.5.7-1.5 1.7c0 1 .5 1.3 1.5 1.3z"
            stroke="#3b45f8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Зручні сидіння",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 4h10v7H7zM5 14h14l-1.2 6H6.2L5 14z"
            stroke="#3b45f8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Перевозимо тварин",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s7-4.2 7-9.4C19 7.6 16.5 5 12 5s-7 2.6-7 6.6C5 16.8 12 21 12 21z"
            stroke="#3b45f8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="9" cy="11" r="1" fill="#3b45f8" />
          <circle cx="15" cy="11" r="1" fill="#3b45f8" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.service}>
      <h2 className={styles.title}>Сервіс</h2>
      <p className={styles.subtitle}>Найкращі умови для вашого комфорту</p>

      <div className={styles.list}>
        {services.map((item, index) => (
          <div className={styles.item} key={index}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

