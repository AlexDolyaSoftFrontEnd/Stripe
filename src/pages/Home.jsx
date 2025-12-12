import { useState, useMemo, useCallback } from "react";
import styles from "./Home.module.css";

/* ===============================
   Города (mock)
=============================== */
const CITIES = [
  "Київ",
  "Львів",
  "Одеса",
  "Харків",
  "Дніпро",
  "Запоріжжя",
  "Черкаси",
  "Вінниця",
  "Полтава",
  "Івано-Франківськ",
];

const FEATURES = [
  {
    title: "Швидкий пошук",
    desc: "Підбір рейсів за кілька секунд.",
    icon: "🔍",
  },
  {
    title: "Гарантія посадки",
    desc: "Підтверджені місця у автобусі.",
    icon: "👤",
  },
  {
    title: "Проста оплата",
    desc: "Підтримуємо картки та онлайн-платежі.",
    icon: "🛒",
  },
];

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  /* ===============================
     Filters
  =============================== */
  const filteredFrom = useMemo(
    () =>
      from
        ? CITIES.filter((c) =>
            c.toLowerCase().startsWith(from.toLowerCase())
          )
        : [],
    [from]
  );

  const filteredTo = useMemo(
    () =>
      to
        ? CITIES.filter((c) =>
            c.toLowerCase().startsWith(to.toLowerCase())
          )
        : [],
    [to]
  );

  /* ===============================
     Submit
  =============================== */
  const submit = useCallback(
    (e) => {
      e.preventDefault();

      if (!from || !to) {
        alert("Оберіть обидва міста");
        return;
      }

      setIsConfirmOpen(true);
    },
    [from, to]
  );

  const confirmSearch = useCallback(() => {
    setIsConfirmOpen(false);
    console.log("Search confirmed:", from, to);
    // тут буде реальний пошук / navigation / API
  }, [from, to]);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>
          Швидкі міжміські поїздки
        </h1>

        <p className={styles.hero__subtitle}>
          Знайдіть зручний рейс, порівняйте та забронюйте за хвилини.
        </p>

        <form onSubmit={submit} className={styles.search}>
          {/* FROM */}
          <div className={styles.autocomplete}>
            <input
              value={from}
              placeholder="Звідки"
              onChange={(e) => {
                setFrom(e.target.value);
                setOpenFrom(true);
              }}
              onFocus={() => from && setOpenFrom(true)}
              className={styles.input}
            />

            {openFrom && filteredFrom.length > 0 && (
              <ul className={styles.list}>
                {filteredFrom.map((city) => (
                  <li
                    key={city}
                    onClick={() => {
                      setFrom(city);
                      setOpenFrom(false);
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* TO */}
          <div className={styles.autocomplete}>
            <input
              value={to}
              placeholder="Куди"
              onChange={(e) => {
                setTo(e.target.value);
                setOpenTo(true);
              }}
              onFocus={() => to && setOpenTo(true)}
              className={styles.input}
            />

            {openTo && filteredTo.length > 0 && (
              <ul className={styles.list}>
                {filteredTo.map((city) => (
                  <li
                    key={city}
                    onClick={() => {
                      setTo(city);
                      setOpenTo(false);
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className={styles.button}>Знайти</button>
        </form>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <h2 className={styles.features__title}>
          Чому обирають нас
        </h2>

        <div className={styles.features__grid}>
          {FEATURES.map((f) => (
            <article key={f.title} className={styles.card}>
              <div className={styles.card__icon}>{f.icon}</div>
              <h3 className={styles.card__title}>{f.title}</h3>
              <p className={styles.card__desc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONFIRM MODAL */}
      {isConfirmOpen && (
        <div className={styles.modal}>
          <div
            className={styles.modal__overlay}
            onClick={() => setIsConfirmOpen(false)}
          />

          <div className={styles.modal__content}>
            <h3 className={styles.modal__title}>
              Підтвердіть маршрут
            </h3>

            <p className={styles.modal__text}>
              <strong>{from}</strong> → <strong>{to}</strong>
            </p>

            <div className={styles.modal__actions}>
              <button
                className={styles.modal__cancel}
                onClick={() => setIsConfirmOpen(false)}
              >
                Скасувати
              </button>

              <button
                className={styles.modal__confirm}
                onClick={confirmSearch}
              >
                Підтвердити
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
