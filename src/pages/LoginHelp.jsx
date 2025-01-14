import { useState } from "react";
import styles from "./LoginHelp.module.css";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import { MdOutlinePassword } from "react-icons/md";
import { useReset } from "../authentication/useReset";
import { toast } from "react-hot-toast";

function LoginHelp() {
  const [email, setEmail] = useState("");
  const { forgotPassword, isLoading } = useReset();

  function handleClick(e) {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }
    forgotPassword({ email });
    setEmail("");
  }

  // const navigate = useNavigate();
  return (
    <div className={styles.loginHelp}>
      <div className={styles.container}>
        <MdOutlinePassword className={styles.icon} />
        <h1>Password Reset</h1>
        <p>
          Provide the email address associated with your account to recover your
          password.
        </p>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </form>
        <Button style="primary" onClick={handleClick} disabled={isLoading}>
          Submit
        </Button>
        <BackButton style="primary"></BackButton>
      </div>
    </div>
  );
}

export default LoginHelp;
