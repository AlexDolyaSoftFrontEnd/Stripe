import { useState } from "react";
import styles from "./Home.module.css";

const features = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/751/751463.png",
    title: "Швидкий пошук",
    desc: "Підбір рейсів за кілька секунд.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    title: "Гарантія посадки",
    desc: "Підтверджені місця у автобусі.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
    title: "Проста оплата",
    desc: "Підтримуємо картки та онлайн-платежі.",
  },
];

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (from.trim() && to.trim()) {
      setSearchResults(`Пошук рейсів від "${from}" до "${to}"`);
    } else {
      alert("Заповніть обидва поля!");
    }
  };

  return (
    <div className={styles.container}>
      {/* HERO + SEARCH */}
      <div className={styles.hero}>
        <h1 className={styles.hero__title}>Швидкі міжміські поїздки</h1>
        <p className={styles.hero__subtitle}>
          Знайдіть зручний рейс, порівняйте та забронюйте за хвилини.
        </p>

        <form onSubmit={handleSearch} className={styles.search}>
          <input
            placeholder="Звідки"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className={styles.search__input}
          />

          <input
            placeholder="Куди"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className={styles.search__input}
          />

          <button type="submit" className={styles.search__btn}>
            Знайти
          </button>
        </form>

        {searchResults && (
          <div className={styles.search__result}>{searchResults}</div>
        )}
      </div>

      {/* FEATURES */}
      <section className={styles.features}>
        <h2 className={styles.features__title}>Чому обирають нас</h2>

        <div className={styles.features__list}>
          {features.map((f) => (
            <article key={f.title} className={styles.feature}>
              <div className={styles.feature__iconWrapper}>
                <img
                  src={f.icon}
                  alt={f.title}
                  className={styles.feature__icon}
                />
              </div>

              <h3 className={styles.feature__title}>{f.title}</h3>
              <p className={styles.feature__desc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

