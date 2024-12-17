import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "/public/Logo.png";
function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Waypoint logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
