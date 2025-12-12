import styles from "./About.module.css";

/* ============================================================
   ДАНІ (місія, історія, цінності, метрики, команда)
============================================================ */

const missionText = [
  "Робимо міжміські подорожі простими та безпечними — для пасажирів і перевізників.",
  "Спрямовані на прозорість, зручність та доступність. Наша платформа допомагає знайти рейс, забронювати місце й оплатити поїздку за хвилини.",
  "Ми віримо, що кожна подорож має бути комфортною, надійною та чесною.",
];

const historyText = [
  "Платформа розпочалась із простої ідеї: дати пасажирам єдине місце для пошуку рейсів.",
  "Створена у 2020 році, платформа об’єднала десятки перевізників, а згодом вийшла на міжнародний ринок.",
  "Сьогодні система працює в 8 країнах та допомогла організувати понад 100 тисяч поїздок.",
];

const metrics = [
  { value: "4k+", label: "пасажирів" },
  { value: "8", label: "країн" },
  { value: "100k+", label: "перевезень" },
];

const values = [
  { name: "Надійність", desc: "Кожен рейс перевірений, кожен перевізник — надійний партнер." },
  { name: "Прозорість", desc: "Жодних прихованих комісій — усі ціни та деталі видно одразу." },
  { name: "Швидкість", desc: "Знайди рейс і забронюй місце за хвилини." },
  { name: "Доступність", desc: "Підтримка 24/7 локальними мовами." },
];

const team = [
  { img: 1, name: "Олена", role: "CEO & Co-founder", exp: "15+ років у логістиці" },
  { img: 2, name: "Ігор", role: "Product Lead", exp: "10+ років в IT" },
  { img: 3, name: "Марія", role: "Customer Support", exp: "7+ років у Customer Care" },
];

/* ============================================================
   КОМПОНЕНТ
============================================================ */

export default function About() {
  return (
    <main className={styles.about}>

      {/* Наша місія */}
      <Section title="Наша місія">
        <p className={styles.about__lead}>{missionText[0]}</p>

        {missionText.slice(1).map((text, i) => (
          <p key={i} className={styles.about__text}>
            {text}
          </p>
        ))}
      </Section>

      {/* Як все почалося */}
      <Section title="Як все почалося">
        {historyText.map((text, i) => (
          <p key={i} className={styles.about__text}>
            {text}
          </p>
        ))}
      </Section>

      {/* Ключові метрики */}
      <Section title="Ключові метрики">
        <div className={styles.about__metrics}>
          {metrics.map((item) => (
            <article key={item.label} className={styles.about__metric}>
              <div className={styles.about__metricValue}>{item.value}</div>
              <div className={styles.about__metricLabel}>{item.label}</div>
            </article>
          ))}
        </div>
      </Section>

      {/* Наші цінності */}
      <Section title="Наші цінності">
        <div className={styles.about__values}>
          {values.map((v) => (
            <article key={v.name} className={styles.about__value}>
              <strong className={styles.about__valueName}>{v.name}</strong>
              <p className={styles.about__valueDesc}>{v.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Наша команда */}
      <Section title="Наша команда">
        <p className={styles.about__text}>
          Ми зібрали команду експертів у галузі транспорту, технологій та клієнтського сервісу.
        </p>

        <div className={styles.about__team}>
          {team.map((member) => (
            <TeamCard key={member.name} data={member} />
          ))}
        </div>
      </Section>

    </main>
  );
}

/* ============================================================
   ДОДАТКОВІ КОМПОНЕНТИ ПО БЕМ
============================================================ */

function Section({ title, children }) {
  return (
    <section className={styles.about__section}>
      <h2 className={styles.about__sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function TeamCard({ data }) {
  return (
    <article className={styles.about__teamItem}>
      <figure className={styles.about__avatarWrapper}>
        <img
          src={`https://i.pravatar.cc/150?img=${data.img}`}
          alt={data.name}
          className={styles.about__avatar}
          loading="lazy"
        />
      </figure>

      <div className={styles.about__teamName}>{data.name}</div>
      <div className={styles.about__teamRole}>{data.role}</div>
      <p className={styles.about__teamExp}>{data.exp}</p>
    </article>
  );
}
