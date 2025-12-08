import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <header className={styles.about__header}>
        <h1 className={styles.about__title}>Про нас</h1>
      </header>

      {/* Наша місія */}
      <section className={styles.section}>
        <h2 className={styles.section__title}>Наша місія</h2>

        <p className={styles.section__lead}>
          Робимо міжміські подорожі простими та безпечними — для пасажирів і
          перевізників. Спрямовані на прозорість, зручність та доступність.
        </p>

        <p className={styles.section__text}>
          Ми віримо, що кожна поїздка повинна бути комфортною і надійною. Наша платформа
          спрощує процес пошуку, бронювання та оплати квитків, економлячи час і гроші.
          Одночасно ми допомагаємо перевізникам керувати рейсами та збільшувати
          завантаженість автобусів.
        </p>
      </section>

      {/* Як все почалося */}
      <section className={styles.section}>
        <h2 className={styles.section__title}>Як все почалося</h2>

        <p className={styles.section__text}>
          Платформа розпочалась з простої ідеї: об'єднати розрізнені системи перевізників
          та дати пасажирам єдине місце для пошуку рейсів. Заснована в 2020 році, ми
          поступово розширили охоплення на 8 країн та обслужили більше 100 тисяч перевезень.
        </p>
      </section>

      {/* Ключові метрики */}
      <section className={styles.section}>
        <h2 className={styles.section__title}>Ключові метрики</h2>

        <div className={styles.metrics}>
          <article className={styles.metrics__item}>
            <div className={styles.metrics__value}>4k+</div>
            <div className={styles.metrics__label}>пасажирів</div>
          </article>

          <article className={styles.metrics__item}>
            <div className={styles.metrics__value}>8</div>
            <div className={styles.metrics__label}>країн</div>
          </article>

          <article className={styles.metrics__item}>
            <div className={styles.metrics__value}>100k+</div>
            <div className={styles.metrics__label}>перевезень</div>
          </article>
        </div>
      </section>

      {/* Наші цінності */}
      <section className={styles.section}>
        <h2 className={styles.section__title}>Наші цінності</h2>

        <div className={styles.values}>
          <article className={styles.values__item}>
            <strong className={styles.values__name}>Надійність</strong>
            <p className={styles.values__desc}>
              Кожен рейс перевірений, кожен перевізник — надійний партнер.
            </p>
          </article>

          <article className={styles.values__item}>
            <strong className={styles.values__name}>Прозорість</strong>
            <p className={styles.values__desc}>
              Жодних прихованих комісій — усі ціни та деталі видно одразу.
            </p>
          </article>

          <article className={styles.values__item}>
            <strong className={styles.values__name}>Швидкість</strong>
            <p className={styles.values__desc}>
              Знайди рейс і забронюй місце за хвилини.
            </p>
          </article>

          <article className={styles.values__item}>
            <strong className={styles.values__name}>Доступність</strong>
            <p className={styles.values__desc}>
              Підтримка 24/7 локальними мовами.
            </p>
          </article>
        </div>
      </section>

      {/* Команда */}
      <section className={styles.section}>
        <h2 className={styles.section__title}>Наша команда</h2>

        <p className={styles.section__text}>
          Наша команда складається з експертів у галузі транспорту, технологій
          та обслуговування клієнтів.
        </p>

        <div className={styles.team}>
          {[
            { img: 1, name: "Олена", role: "CEO & Co-founder", exp: "15+ років у логістиці" },
            { img: 2, name: "Ігор", role: "Product Lead", exp: "10+ років в IT" },
            { img: 3, name: "Марія", role: "Customer Support", exp: "7+ років у Customer Care" },
          ].map((member, index) => (
            <article key={index} className={styles.team__item}>
              <figure className={styles.team__avatarWrapper}>
                <img
                  src={`https://i.pravatar.cc/150?img=${member.img}`}
                  alt={member.name}
                  className={styles.team__avatar}
                />
              </figure>

              <div className={styles.team__name}>{member.name}</div>
              <div className={styles.team__role}>{member.role}</div>
              <p className={styles.team__exp}>{member.exp}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
