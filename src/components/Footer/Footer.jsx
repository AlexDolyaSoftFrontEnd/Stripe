import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import logo from "./icons/logo-footer.svg";

import iconMail from "./icons/mail.svg";
import iconPhone from "./icons/phone.svg";

import socialDribbble from "./icons/dribbble.svg";
import socialFb from "./icons/fb.svg";
import socialInst from "./icons/inst.svg";
import socialLinkedin from "./icons/linkedin.svg";
import socialX from "./icons/x.svg";

export default function Footer() {
  const navLinks = [
    { to: "/", label: "Головна" },
    { to: "/about", label: "Про нас" },
    { to: "/carriers", label: "Перевізникам" },
    { to: "/profile", label: "Профіль перевізника" },
  ];

  const socials = [
    { src: socialFb, alt: "Facebook" },
    { src: socialInst, alt: "Instagram" },
    { src: socialDribbble, alt: "Dribbble" },
    { src: socialLinkedin, alt: "LinkedIn" },
    { src: socialX, alt: "X (Twitter)" },
  ];

  const contacts = [
    { icon: iconPhone, text: "+ 38 (097) 555 55 55", alt: "Телефон" },
    { icon: iconMail, text: "Sprintes@gmail.com", alt: "Email" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Основной контейнер */}
      <div className={styles.footer__container}>
        
        {/* Колонка: логотип */}
        <div className={styles.footer__col}>
          <img src={logo} alt="Логотип Sprinters" className={styles.footer__logo} />

          <p className={styles.footer__desc}>
            Платформа пошуку перевізників<br />
            та бронювання поїздок.
          </p>
        </div>

        {/* Колонка: навигация */}
        <div className={styles.footer__col}>
          <h4 className={styles.footer__title}>Клієнтам</h4>

          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className={styles.footer__link}>
              {label}
            </Link>
          ))}
        </div>

        {/* Колонка: зворотний зв'язок */}
        <div className={styles.footer__col}>
          <h4 className={styles.footer__title}>Зворотний зв'язок</h4>

          <p className={styles.footer__smalltext}>
            Маєш пропозиції щодо покращення сервісу? — пиши нам!
          </p>

          <form className={styles.footer__form} aria-label="Форма для зворотного зв’язку">
            <input type="email" placeholder="Email Address" aria-label="Email" />
            <button type="submit">Надіслати</button>
          </form>

          {contacts.map(({ icon, text, alt }, i) => (
            <div key={i} className={styles.footer__contact}>
              <img src={icon} alt={alt} />
              <span>{text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Нижняя панель */}
      <div className={styles.footer__bottom}>
        <p>2026 © Sprinters</p>

        <div className={styles.footer__socials}>
          {socials.map(({ src, alt }, i) => (
            <img key={i} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </footer>
  );
}
