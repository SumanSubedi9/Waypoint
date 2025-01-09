import styles from "./UpdatePasswordForm.module.css";
import Button from "../../components/Button";

function UpdatePasswordForm() {
  return (
    <div>
      <form className={styles.formContainer}>
        <label htmlFor="New password">New password (min 8 chars)</label>
        <input></input>
      </form>

      <form className={styles.formContainer}>
        <label htmlFor="confirm password">Confirm password</label>
        <input></input>
      </form>

      <form className={styles.formContainer}>
        <Button type="reset">Cancel</Button>
        <Button type="update">Update password</Button>
      </form>
    </div>
  );
}

export default UpdatePasswordForm;
