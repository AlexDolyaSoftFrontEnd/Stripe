import styles from "./ForCarriers.module.css";

export default function ForCarriers() {
  return (
    <main className={styles.carriers}>

      {/* Інтро секція */}
      <section className={styles.carriers__intro}>
        <p className={styles.carriers__lead}>
          Ми пропонуємо інструменти для керування рейсами, бронюваннями і
          спілкування з пасажирами. Підключення до платформи допомагає збільшити
          заповнюваність і спростити процес оплати.
        </p>
      </section>

      {/* Як приєднатись */}
      <section className={styles.section}>
        <h2 className={styles.carriers__heading}>Як приєднатись</h2>

        <ol className={styles.carriers__steps}>
          <li className={styles.carriers__stepsItem}>
            <span className={styles.carriers__stepsItemTitle}>
              Реєстрація профілю
            </span>{" "}
            — додайте інформацію про флот та контакти.
          </li>

          <li className={styles.carriers__stepsItem}>
            <span className={styles.carriers__stepsItemTitle}>
              Публікація рейсів
            </span>{" "}
            — створюйте маршрути та розклад.
          </li>

          <li className={styles.carriers__stepsItem}>
            <span className={styles.carriers__stepsItemTitle}>
              Прийом бронювань
            </span>{" "}
            — керуйте місцями та оплатами в панелі.
          </li>
        </ol>
      </section>

      {/* Переваги */}
      <section className={styles.section}>
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
