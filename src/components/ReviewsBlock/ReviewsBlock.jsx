import { useState } from "react";
import styles from "./ReviewsBlock.module.css";
import user1 from "./images/user1.png";
import user2 from "./images/user2.png";

export default function ReviewsBlock() {
  const reviews = [
    {
      id: 1,
      name: "Ben Yardley",
      route: "Київ - Кишинів",
      date: "1 May 2023",
      avatar: user1,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      id: 2,
      name: "Craig Martin",
      route: "Львів - Париж",
      date: "1 May 2023",
      avatar: user2,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
  ];

  const [active, setActive] = useState(0);

  // Модалка Apple-style
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    route: "",
    text: "",
  });

  const star = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b45f8">
      <path d="M12 3l2.9 6 6.1.9-4.5 4.4 1 6-5.5-3-5.5 3 1-6L3 9.9l6.1-.9z" />
    </svg>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Відгук відправлено!");
    setModal(false);
  };

  return (
    <>
      <section className={styles.reviews}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Що <span>кажуть люди?</span>
          </h2>

          <p className={styles.textLeft}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className={styles.btn} onClick={() => setModal(true)}>
            Залишити відгук
          </button>
        </div>

        <div className={styles.right}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {reviews.map((r) => (
              <div className={styles.slide} key={r.id}>
                <div className={styles.card}>
                  <div className={styles.userRow}>
                    <img src={r.avatar} className={styles.avatar} alt={r.name} />
                    <div>
                      <p className={styles.name}>{r.name}</p>
                      <p className={styles.route}>{r.route}</p>
                      <p className={styles.date}>{r.date}</p>
                    </div>
                  </div>

                  <p className={styles.text}>{r.text}</p>

                  <div className={styles.stars}>
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${active === i ? styles.activeDot : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- МОДАЛЬНЕ ВІКНО --- */}
      {modal && (
        <div className={styles.modalOverlay} onClick={() => setModal(false)}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.modalTitle}>Залишити відгук</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Ваше ім'я"
                className={styles.input}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Маршрут"
                className={styles.input}
                value={form.route}
                onChange={(e) => setForm({ ...form, route: e.target.value })}
                required
              />

              <textarea
                placeholder="Ваш відгук"
                className={styles.textarea}
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                required
              />

              <button className={styles.submit}>Відправити</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

