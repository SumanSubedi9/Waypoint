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
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("test123");
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
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
