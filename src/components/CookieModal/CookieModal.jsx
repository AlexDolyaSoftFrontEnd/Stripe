import { useState } from "react";
import styles from "./CookieModal.module.css";

export default function CookieModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay} />

      <div
        className={styles.modal__content}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
      >
        {/* Заголовок */}
        <h2
          id="cookie-modal-title"
          className={styles.modal__title}
        >
          Налаштування файлів 
        </h2>

        {/* Описание */}
        <p className={styles.modal__text}>
          Ми використовуємо файли cookie, щоб дозволити нашому сайту працювати
          належним чином, персоналізувати контент і рекламу, надавати функції
          соціальних мереж і аналізувати наш трафік. Ми також ділимось інформацією
          про використання вами нашого сайту з нашими партнерами з соціальних
          мереж, реклами і аналітики.
        </p>

        {/* Блок cookies */}
        <div className={styles.modal__box}>
          <div className={styles.modal__row}>
            <span className={styles.modal__label}>
              Cookies, які є невід’ємною частиною сайту
            </span>
            <span className={styles.modal__status}>
              Завжди активні
            </span>
          </div>

          <div className={styles.modal__row}>
            <span className={styles.modal__label}>
              Використання cookies
            </span>
            <label className={styles.switch}>
              <input type="checkbox" defaultChecked />
              <span className={styles.slider} />
            </label>
          </div>

          <div className={styles.modal__row}>
            <span className={styles.modal__label}>
              Функціональні cookies
            </span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider} />
            </label>
          </div>

          <div className={styles.modal__row}>
            <span className={styles.modal__label}>
              Цільові cookies
            </span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider} />
            </label>
          </div>
        </div>

        {/* Кнопки */}
        <div className={styles.modal__actions}>
          <div className={styles.modal__actionsRight}>
            <button
              type="button"
              className={styles.modal__btnPrimary}
              onClick={() => setIsOpen(false)}
            >
              Прийняти всі файли cookie
            </button>
            <button
              type="button"
              className={styles.modal__btnDark}
            >
              Зберегти вибір
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

