import { useState } from "react";
import Burger from "./Burger";
import MobileNav from "./MobileNav";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className={styles.mobile}>
      <Burger open={open} setOpen={setOpen} />

      {open && (
        <div className={styles.mobile__backdrop} onClick={handleClose} />
      )}

      <MobileNav open={open} onClose={handleClose} />
    </div>
  );
}

