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
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__col}>
          <img src={logo} alt="logo" className={styles.footer__logo} />

          <p className={styles.footer__desc}>
            Платформа пошуку перевізників<br />
            та бронювання поїздок
          </p>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles.footer__title}>Клієнтам</h4>

          <Link to="/" className={styles.footer__link}>Головна</Link>
          <Link to="/about" className={styles.footer__link}>Про нас</Link>
          <Link to="/carriers" className={styles.footer__link}>Перевізникам</Link>
          <Link to="/profile" className={styles.footer__link}>Профіль перевізника</Link>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles.footer__title}>Зворотний зв'язок</h4>

          <p className={styles.footer__smalltext}>
            Маєш пропозиції щодо покращення сервісу? — пиши нам!
          </p>

          <form className={styles.footer__form}>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Надіслати</button>
          </form>

          <div className={styles.footer__contact}>
            <img src={iconPhone} alt="phone" />
            <span>+ 38 (073) 555 55 55</span>
          </div>

          <div className={styles.footer__contact}>
            <img src={iconMail} alt="mail" />
            <span>gmail@gmail.com</span>
          </div>
        </div>

      </div>

      <div className={styles.footer__bottom}>
        <p>2024 © Sprinters. All rights reserved.</p>

        <div className={styles.footer__socials}>
          <img src={socialFb} alt="fb" />
          <img src={socialInst} alt="inst" />
          <img src={socialDribbble} alt="dribbble" />
          <img src={socialLinkedin} alt="linkedin" />
          <img src={socialX} alt="x" />
        </div>
      </div>
    </footer>
  );
}
