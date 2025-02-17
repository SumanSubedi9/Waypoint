import styles from "./StatIcon.module.css";
import { useNavigate } from "react-router-dom";
import { BsClipboardData } from "react-icons/bs";

function StatIcon() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/user-stat");
  }
  return (
    <button className={styles.icon} onClick={handleClick}>
      <BsClipboardData />
    </button>
  );
}

export default StatIcon;
