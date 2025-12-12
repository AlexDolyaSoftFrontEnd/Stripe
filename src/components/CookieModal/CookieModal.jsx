import { useState } from "react";
import styles from "./CookieModal.module.css";

/*
--------------------------------------------------
Добавлена модель состояния настроек cookie
--------------------------------------------------
*/

const STORAGE_KEY = "cookiePreferences";

const DEFAULT_PREFERENCES = {
  usage: true,
  functional: false,
  marketing: false,
};

/*
--------------------------------------------------
Добавлена безопасная инициализация из localStorage
--------------------------------------------------
*/

function getInitialState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return {
        isOpen: true,
        preferences: DEFAULT_PREFERENCES,
      };
    }

    return {
      isOpen: false,
      preferences: JSON.parse(stored),
    };
  } catch {
    return {
      isOpen: true,
      preferences: DEFAULT_PREFERENCES,
    };
  }
}

export default function CookieModal() {
  const [{ isOpen, preferences }, setState] = useState(getInitialState);

  if (!isOpen) return null;

  /*
  --------------------------------------------------
  Реализовано переключение чекбоксов cookie
  --------------------------------------------------
  */

  const toggle = (key) => {
    setState((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: !prev.preferences[key],
      },
    }));
  };

  /*
  --------------------------------------------------
  Сохранение настроек cookie и закрытие модального окна
  --------------------------------------------------
  */

  const savePreferences = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    setState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay} />

      <div
        className={styles.modal__content}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
      >
        <h2 id="cookie-modal-title" className={styles.modal__title}>
          Налаштування файлів cookie
        </h2>

        <p className={styles.modal__text}>
          Ми використовуємо файли cookie для коректної роботи сайту,
          персоналізації контенту та аналізу трафіку.
        </p>

        <div className={styles.modal__box}>
          <div className={styles.modal__row}>
            <span className={styles.modal__label}>
              Обовʼязкові cookies
            </span>
            <span className={styles.modal__status}>
              Завжди активні
            </span>
          </div>

          <div className={styles.modal__row}>
            <span className={styles.modal__label}>
              Аналітичні cookies
            </span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={preferences.usage}
                onChange={() => toggle("usage")}
              />
              <span className={styles.slider} />
            </label>
          </div>

          <div className={styles.modal__row}>
            <span className={styles.modal__label}>
              Функціональні cookies
            </span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={() => toggle("functional")}
              />
              <span className={styles.slider} />
            </label>
          </div>

          <div className={styles.modal__row}>
            <span className={styles.modal__label}>
              Маркетингові cookies
            </span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => toggle("marketing")}
              />
              <span className={styles.slider} />
            </label>
          </div>
        </div>

        <div className={styles.modal__actions}>
          <button
            type="button"
            className={styles.modal__btnDark}
            onClick={savePreferences}
          >
            Зберегти вибір
          </button>
        </div>
      </div>
    </div>
  );
}

