import { useNavigate } from "react-router-dom";
import { useLogout } from "../authentication/useLogout.js";
import styles from "./User.module.css";

function User() {
  const { logout, isLoading } = useLogout();
  const navigate = useNavigate();

  function handleClick() {
    window.confirm("Are you sure you want to logout?") && logout();
    navigate("/login");
  }

  return (
    <div className={styles.user}>
      {/* <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span> */}
      <button disabled={isLoading} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default User;
