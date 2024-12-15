import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} Waypoint
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
