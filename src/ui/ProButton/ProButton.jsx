import styles from "../ProButton/ProButton.module.css";
import { PiLightningFill } from "react-icons/pi";

function ProButton() {
  const paymentLink = "https://buy.stripe.com/test_8wM2c50oTfv79EcbII";

  function handleClick(e) {
    e.preventDefault();
    window.open(paymentLink);
  }
  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.proBtn}>
        Upgrade
        <PiLightningFill />
      </button>
    </div>
  );
}

export default ProButton;
