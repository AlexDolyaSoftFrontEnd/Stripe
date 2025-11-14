import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderActions from "./HeaderActions";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <HeaderLogo />
        <HeaderNav />
        <HeaderActions />
        <MobileMenu />
      </div>
    </header>
  );
}

