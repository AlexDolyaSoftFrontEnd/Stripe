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
  {
    name: "Надійність",
    desc: "Кожен рейс перевірений, кожен перевізник — надійний партнер.",
  },
  {
    name: "Прозорість",
    desc: "Жодних прихованих комісій — усі ціни та деталі видно одразу.",
  },
  {
    name: "Швидкість",
    desc: "Знайди рейс і забронюй місце за хвилини.",
  },
  {
    name: "Доступність",
    desc: "Підтримка 24/7 локальними мовами.",
  },
];

const team = [
  {
    img: 1,
    name: "Олена",
    role: "CEO & Co-founder",
    exp: "15+ років у логістиці",
  },
  {
    img: 2,
    name: "Ігор",
    role: "Product Lead",
    exp: "10+ років в IT",
  },
  {
    img: 3,
    name: "Марія",
    role: "Customer Support",
    exp: "7+ років у Customer Care",
  },
];

/* ============================================================
   КОМПОНЕНТ
============================================================ */

export default function About() {
  return (
    <main className={styles.about}>

      {/* Наша місія */}
      <Section title="Наша місія">
        <p className={styles.section__lead}>{missionText[0]}</p>
        {missionText.slice(1).map((text, i) => (
          <p key={i} className={styles.section__text}>{text}</p>
        ))}
      </Section>

      {/* Як все почалося */}
      <Section title="Як все почалося">
        {historyText.map((text, i) => (
          <p key={i} className={styles.section__text}>{text}</p>
        ))}
      </Section>

      {/* Ключові метрики */}
      <Section title="Ключові метрики">
        <div className={styles.metrics}>
          {metrics.map((item) => (
            <article key={item.label} className={styles.metrics__item}>
              <div className={styles.metrics__value}>{item.value}</div>
              <div className={styles.metrics__label}>{item.label}</div>
            </article>
          ))}
        </div>
      </Section>

      {/* Наші цінності */}
      <Section title="Наші цінності">
        <div className={styles.values}>
          {values.map((v) => (
            <article key={v.name} className={styles.values__item}>
              <strong className={styles.values__name}>{v.name}</strong>
              <p className={styles.values__desc}>{v.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Наша команда */}
      <Section title="Наша команда">
        <p className={styles.section__text}>
          Ми зібрали команду експертів у галузі транспорту, технологій та клієнтського сервісу.
        </p>

        <div className={styles.team}>
          {team.map((member) => (
            <TeamCard key={member.name} data={member} />
          ))}
        </div>
      </Section>
    </main>
  );
}

/* ============================================================
   ДОДАТКОВІ КОМПОНЕНТИ
============================================================ */

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  );
}

function TeamCard({ data }) {
  return (
    <article className={styles.team__item}>
      <figure className={styles.team__avatarWrapper}>
        <img
          src={`https://i.pravatar.cc/150?img=${data.img}`}
          alt={data.name}
          className={styles.team__avatar}
          loading="lazy"
        />
      </figure>

      <div className={styles.team__name}>{data.name}</div>
      <div className={styles.team__role}>{data.role}</div>
      <p className={styles.team__exp}>{data.exp}</p>
    </article>
  );
}
