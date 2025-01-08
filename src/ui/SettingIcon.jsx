import { useNavigate } from "react-router-dom";
import styles from "./SettingIcon.module.css";
import { IoSettingsOutline } from "react-icons/io5";

function SettingIcon() {
  const navigate = useNavigate();

  function handleClick() {
    navigate();
  }
  return (
    <button className={styles.icon} onClick={handleClick}>
      <IoSettingsOutline />
    </button>
  );
}

export default SettingIcon;
