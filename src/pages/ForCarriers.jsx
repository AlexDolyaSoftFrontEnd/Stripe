import styles from "./ForCarriers.module.css";

export default function ForCarriers() {
  return (
    <main className={styles.carriers}>
      {/* Як приєднатись */}
      <section className={styles.carriers__section}>
        <h2 className={styles.carriers__heading}>Як приєднатись</h2>

        <ol className={styles.carriers__steps}>
          <li className={styles.carriers__step}>
            <span className={styles.carriers__stepTitle}>Реєстрація профілу</span>
            — додайте інформацію про флот та контакти.
          </li>

          <li className={styles.carriers__step}>
            <span className={styles.carriers__stepTitle}>Публікація рейсів</span>
            — створюйте маршрути та розклад.
          </li>

          <li className={styles.carriers__step}>
            <span className={styles.carriers__stepTitle}>Прийом бронювань</span>
            — керуйте місцями та оплатами в панелі.
          </li>
        </ol>
      </section>

      {/* Переваги */}
      <section className={styles.carriers__section}>
        <h2 className={styles.carriers__heading}>Переваги для перевізника</h2>

        <div className={styles.carriers__advantages}>
          <article className={styles.carriers__card}>
            <h3 className={styles.carriers__cardTitle}>Аналітика</h3>
            <p className={styles.carriers__cardText}>
              Звіти по рейсам і доходам.
            </p>
          </article>

          <article className={styles.carriers__card}>
            <h3 className={styles.carriers__cardTitle}>Масштабування</h3>
            <p className={styles.carriers__cardText}>
              Додавайте сотні рейсів швидко.
            </p>
          </article>

          <article className={styles.carriers__card}>
            <h3 className={styles.carriers__cardTitle}>Підтримка партнерів</h3>
            <p className={styles.carriers__cardText}>
              Персональний менеджер при великих обсягах.
            </p>
          </article>
        </div>
      </section>

    </main>
  );
}
