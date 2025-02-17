import styles from "./StatIcon.module.css";
import { BsClipboardData } from "react-icons/bs";

function StatIcon() {
  return (
    <button className={styles.icon}>
      <BsClipboardData />
    </button>
  );
}

export default StatIcon;
