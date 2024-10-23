import App from "../App";
import AppNav from "./AppNav";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} GlobeWatch
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
