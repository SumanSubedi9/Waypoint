import { Outlet } from "react-router-dom";
import App from "../App";
import AppNav from "./AppNav";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} GlobeWatch
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
