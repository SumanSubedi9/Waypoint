import { useNavigate } from "react-router-dom";
import { useLogout } from "../authentication/useLogout.js";
import { useUser } from "../authentication/useUser.js";
import styles from "./User.module.css";
import Avatar from "/public/default-user.jpg";
import SettingIcon from "../ui/SettingIcon.jsx";

function User() {
  const { logout, isLoading } = useLogout();
  const navigate = useNavigate();

  const defaultAvatar = Avatar;

  const {
    user: {
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  function handleClick() {
    window.confirm("Are you sure you want to logout?") && logout();
    navigate("/login");
  }

  return (
    <div className={styles.user}>
      <img src={defaultAvatar} alt={currentFullName.split("")[0]} />
      <span>Welcome, {currentFullName.split(" ")[0]}</span>
      <SettingIcon />

      <button
        className={styles.logoutBtn}
        disabled={isLoading}
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default User;
