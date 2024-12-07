import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../authentication/useSignup";

import styles from "./SignupForm.module.css";
import Button from "./Button";
import PageNav from "./PageNav";

export default function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: reset });
  }

  return (
    <main className={styles.signup}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.heading}>
          <h1>Create your Account</h1>
          <h3>
            Already have an account? <Link to="/login">Login</Link>
          </h3>
        </div>

        <div className={styles.row}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "This field is required" })}
          />
          {errors.fullName && (
            <span className={styles.error}>{errors?.fullName?.message}</span>
          )}
        </div>

        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors?.email?.message}</span>
          )}
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password (min 8 characters)</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: { value: 8 },
              message: "Password must be at least 8 characters",
            })}
          />
          {errors.password && (
            <span className={styles.error}>{errors?.password?.message}</span>
          )}
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Repeat Password</label>
          <input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Password needs to match",
            })}
          />
          {errors.passwordConfirm && (
            <span className={styles.error}>
              {errors?.passwordConfirm?.message}
            </span>
          )}
        </div>

        <div>
          <Button type="primary">Sign Up</Button>
        </div>
      </form>
    </main>
  );
}
