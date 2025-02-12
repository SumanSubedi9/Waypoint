import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import ProButton from "../ui/ProButton/ProButton";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <ProButton />
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
