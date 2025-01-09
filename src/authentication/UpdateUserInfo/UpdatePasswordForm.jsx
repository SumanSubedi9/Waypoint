import { useForm } from "react-hook-form";

import styles from "./UpdatePasswordForm.module.css";
import Button from "../../components/Button";
import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formContainer}>
        <label htmlFor="New password">New password (min 8 chars)</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <span className={styles.error}>{errors?.password?.message}</span>
        )}
      </div>

      <div className={styles.formContainer}>
        <label htmlFor="confirm password">Confirm password</label>
        <input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
        {errors.passwordConfirm && (
          <span className={styles.error}>
            {errors?.passwordConfirm?.message}
          </span>
        )}
      </div>

      <div className={styles.formContainer}>
        <Button onClick={reset} type="reset" style="cancel">
          Cancel
        </Button>
        <Button style="update">Update password</Button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
