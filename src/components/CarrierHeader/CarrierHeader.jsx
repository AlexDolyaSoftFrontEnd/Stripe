import CarrierBreadcrumbs from "./CarrierBreadcrumbs";
import CarrierAvatar from "./CarrierAvatar";
import CarrierTitle from "./CarrierTitle";
import CarrierStats from "./CarrierStats";

import styles from "./CarrierHeader.module.css";

export default function CarrierHeader({ carrier }) {
  return (
    <div className={styles.header}>
      
      <CarrierBreadcrumbs
        items={[
          { label: "Головна", to: "/" },
          { label: "Профіль перевізника", to: "/profile" }
        ]}
        current={carrier.name}
      />

      <div className={styles.header__content}>
        <CarrierAvatar image={carrier.logo} />

        <div className={styles.header__right}>
          <CarrierTitle carrier={carrier} />
          <CarrierStats carrier={carrier} />
        </div>
      </div>
    </div>
  );
}


