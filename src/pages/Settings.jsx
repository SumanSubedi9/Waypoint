import styles from "./Settings.module.css";
import User from "../components/User";
import UpdateUserDataForm from "../authentication/UpdateUserInfo/UpdateUserDataForm";
import UpdatePasswordForm from "../authentication/UpdateUserInfo/UpdatePasswordForm";

function Settings() {
  return (
    <div className={styles.page}>
      <div className={styles.setting}>
        <User />
        <h1>Update your account</h1>
        <UpdateUserDataForm />
        <UpdatePasswordForm />
      </div>
    </div>
  );
}

export default Settings;
