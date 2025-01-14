import styles from "./ResetHelp.module.css";
import UpdatePasswordForm from "../authentication/UpdateUserInfo/UpdatePasswordForm";
import { TbLockPassword } from "react-icons/tb";
import HomeButton from "../components/HomeButton";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../src/authentication/useUser.js";

function ResetHelp() {
  const navigate = useNavigate();

  const { user } = useUser();

  function handleClick(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <div className={styles.resetHelp}>
      <div className={styles.page}>
        <TbLockPassword className={styles.icon} />
        <h1>Reset Account Password </h1>
        <p>Enter a new password for {user?.email}</p>
        <UpdatePasswordForm />
        <div className={styles.buttons}>
          <HomeButton />
          <Button style="primary" onClick={handleClick}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResetHelp;
