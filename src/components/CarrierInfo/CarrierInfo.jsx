import styles from "./CarrierInfo.module.css";

import bus1 from "./images/bus1.png";
import bus2 from "./images/bus2.png";
import bus3 from "./images/bus3.png";

import Calendar from "./Calendar";

export default function CarrierInfo() {
  return (
    <section className={styles["carrier-info"]}>
      {/* LEFT */}
      <div className={styles["carrier-info__left"]}>
        <h2 className={styles["carrier-info__title"]}>Опис перевізника</h2>

        <p className={styles["carrier-info__text"]}>
          Stripe is a software platform for starting and running internet
          businesses. Millions of businesses rely on Stripe’s software tools to
          accept payments, expand globally, and manage their businesses online.
          Stripe has been at the forefront of expanding internet commerce,
          powering new business models.
        </p>

        <h3 className={styles["carrier-info__subtitle"]}>Ми у соц. мережах</h3>

        <div className={styles["carrier-info__social"]}>
          
  
          <a href="#" className={styles["carrier-info__social-link"]}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#635bff">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.9-2.38c-.83.49-1.75.84-2.72 1.03A4.28 4.28 0 0 0 16.1 4c-2.37 0-4.28 1.92-4.28 4.29 0 .34.04.67.1.98-3.55-.18-6.7-1.88-8.81-4.48a4.31 4.31 0 0 0-.58 2.16c0 1.5.76 2.82 1.91 3.59a4.23 4.23 0 0 1-1.94-.54v.05c0 2.1 1.49 3.85 3.46 4.25-.36.1-.75.15-1.15.15-.28 0-.55-.03-.81-.08.55 1.73 2.15 2.99 4.05 3.02A8.59 8.59 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.63 8.63 0 0 0 22.46 6z"/>
            </svg>
            twitter.com/stripe
          </a>

          <a href="#" className={styles["carrier-info__social-link"]}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#635bff">
              <path d="M13.5 21v-7h2.3l.3-2.7h-2.6v-1.6c0-.7.2-1.2 1.3-1.2h1.2V6.1c-.2 0-.9-.1-1.7-.1-1.7 0-3 1-3 3v1.7H9v2.7h2.3v7h2.2z"/>
            </svg>
            facebook.com/StripeHQ
          </a>

        </div>

        <div className={styles["carrier-info__gallery"]}>
          <img src={bus1} alt="Bus 1" />
          <img src={bus2} alt="Bus 2" />
          <img src={bus3} alt="Bus 3" />
        </div>
      </div>

      <div className={styles["carrier-info__right"]}>
        <h2 className={styles["carrier-info__title"]}>Обслуговуємо країни</h2>

        <ul className={styles["carrier-info__countries"]}>
          <li className={styles["carrier-info__country"]}>
            {/* FRANCE */}
            <svg width="26" height="18" viewBox="0 0 48 32">
              <rect width="16" height="32" fill="#0055A4" />
              <rect width="16" height="32" x="16" fill="#fff" />
              <rect width="16" height="32" x="32" fill="#EF4135" />
            </svg>
            Франція
          </li>

          <li className={styles["carrier-info__country"]}>
  
            <svg width="26" height="18" viewBox="0 0 48 32">
              <rect width="16" height="32" fill="#009246" />
              <rect width="16" height="32" x="16" fill="#fff" />
              <rect width="16" height="32" x="32" fill="#CE2B37" />
            </svg>
            Італія
          </li>

          <li className={styles["carrier-info__country"]}>
            {/* SPAIN */}
            <svg width="26" height="18" viewBox="0 0 48 32">
              <rect width="48" height="32" fill="#AA151B" />
              <rect width="48" height="16" y="8" fill="#F1BF00" />
            </svg>
            Іспанія
          </li>

          <li className={styles["carrier-info__country"]}>
            <svg width="26" height="18" viewBox="0 0 48 32">
              <rect width="48" height="10.7" fill="#AE1C28" />
              <rect width="48" height="10.7" y="10.7" fill="#fff" />
              <rect width="48" height="10.7" y="21.3" fill="#21468B" />
            </svg>
            Нідерланди
          </li>

        </ul>
        <Calendar />
      </div>
    </section>
  );
}

