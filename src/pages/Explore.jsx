import PageNav from "../components/PageNav.jsx";
import styles from "./Explore.module.css";

function Explore() {
  return (
    <section className={styles.explore}>
      <PageNav />
      <h1>Explore</h1>
    </section>
  );
}

export default Explore;
