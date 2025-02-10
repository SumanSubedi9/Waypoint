import styles from "../ProButton/ProButton.module.css";
import { PiLightningFill } from "react-icons/pi";

function ProButton() {
  return (
    <div className={styles.container}>
      <button className={styles.proBtn}>
        Upgrade
        <PiLightningFill />
      </button>
    </div>
  );
}

export default ProButton;
