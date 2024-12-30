import Logo from "./Logo";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <Logo />
      <Link to="/" className={styles.link}>
        Go back to homepage
      </Link>
      <h2>
        For the best experience, please use Waypoint on a device with a screen
        width larger than 1000px.
      </h2>
      <footer>
        Note: The Waypoint team is currently working on making the app
        responsive for smaller screens.
      </footer>
    </div>
  );
}

export default ErrorPage;
