import { useForm } from "react-hook-form";
import { useUser } from "../useUser";
import styles from "./UpdateUserDataForm.module.css";
import Button from "../../components/Button";

function UpdateUserDataForm() {
  const { register, formState, errors } = useForm();
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  // const { updateUser, isUpdating } = useUpdateUser();

  // const [fullName, setFullName] = useState(currentFullName);
  // const [avatar, setAvatar] = useState(null);

  return (
    <div>
      <form className={styles.formContainer}>
        <label htmlFor="email">Email</label>
        <input value={email} disabled></input>
      </form>

      <form className={styles.formContainer}>
        <label htmlFor="fullName">Full name</label>
        <input value={currentFullName} id="fullName"></input>
      </form>

      <form className={styles.formContainer}>
        <label htmlFor="file">Avatar Image</label>
        <input
          className={styles.fileInput}
          type="file"
          id="avatar"
          accept="image/*"
        ></input>
      </form>

      <div className={styles.formContainer}>
        <Button type="reset">Cancel</Button>
        <Button type="update">Update account</Button>
      </div>
    </div>
  );
}

export default UpdateUserDataForm;
