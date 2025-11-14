import styles from "./CarrierAvatar.module.css";
import carrierLogo from "./../../assets/icons/carrier-logo.svg";

export default function CarrierAvatar() {
  return (
    <div className={styles.avatar}>
      <img src={carrierLogo} alt="Carrier Logo" className={styles.avatar__img} />
    </div>
  );
}


