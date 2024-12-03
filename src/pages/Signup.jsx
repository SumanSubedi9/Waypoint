import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import styles from "./Signup.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

export default function Signup() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("test@t.com");
  const [password, setPassword] = useState("qwerty");
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) signup(email, password);
    else {
      alert("Please enter email and password");
    }
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.signup}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.heading}>
          <h1>Create your Account</h1>
          <h3>
            Already have an account? <Link to="/login">Login</Link>
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
          <Button type="primary">Sign Up</Button>
        </div>
      </form>
    </main>
  );
}
