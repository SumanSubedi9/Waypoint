import { useState } from "react";
import { useUser } from "../useUser";
import { useUpdateUser } from "./useUpdateUser";
import styles from "./UpdateUserDataForm.module.css";
import Button from "../../components/Button";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <label htmlFor="email">Email</label>
        <input value={email} disabled></input>
      </div>

      <div className={styles.formContainer}>
        <label htmlFor="fullName">Full name</label>
        <input
          value={fullName}
          id="fullName"
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
        ></input>
      </div>

      <div className={styles.formContainer}>
        <label htmlFor="file">Avatar Image</label>
        <input
          className={styles.fileInput}
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        ></input>
      </div>

      <div className={styles.formContainer}>
        <Button
          type="reset"
          style="cancel"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button style="update" disabled={isUpdating}>
          Update account
        </Button>
      </div>
    </form>
  );
}

export default UpdateUserDataForm;
