import { useNavigate } from "react-router-dom";
import { useLogout } from "../authentication/useLogout.js";
import { useUser } from "../authentication/useUser.js";
import styles from "./User.module.css";
import Avatar from "/public/default-user.jpg";
import SettingIcon from "../ui/SettingIcon.jsx";
import { useConfirmation } from "../context/ConfirmContext.jsx";

function User() {
  const { logout, isLoading } = useLogout();
  const navigate = useNavigate();
  const { user } = useUser();
  const { confirm } = useConfirmation();

  const defaultAvatar = Avatar;

  const {
    user: {
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { avatar } = user.user_metadata;

  const handleClick = async () => {
    const isConfirmed = await confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      logout();
      navigate("/login");
    }
  };

  return (
    <div className={styles.user}>
      <img src={avatar || defaultAvatar} alt={currentFullName.split("")[0]} />
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
