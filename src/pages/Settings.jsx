import styles from "./Settings.module.css";
import User from "../components/User";
import UpdateUserDataForm from "../authentication/UpdateUserInfo/UpdateUserDataForm";
import UpdatePasswordForm from "../authentication/UpdateUserInfo/UpdatePasswordForm";
import BackButton from "../components/BackButton";

function Settings() {
  return (
    <div className={styles.page}>
      <h1>Update your account</h1>
      <div className={styles.setting}>
        <User />

        <h2>Update user data</h2>
        <UpdateUserDataForm />
        <h2>Update password</h2>
        <UpdatePasswordForm />
        <BackButton />
      </div>
    </div>
  );
}

export default Settings;
