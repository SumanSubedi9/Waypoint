// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useLogin } from "../authentication/useLogin";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login({ email, password }),
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      };
  }

  // useEffect(() => {
  //   if (isAuthenticated) navigate("/app", { replace: true });
  // }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <section className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h1>Welcome Back!</h1>
            <h3>
              Don&apos;t have an account?<Link to="/signup">Sign up</Link>
            </h3>
          </div>

          <div className={styles.row}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <h3 className={styles.heading}>
              <Link to="/login-help">Forgot Password?</Link>
            </h3>
          </div>

          <div>
            <Button style="primary">Login</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
