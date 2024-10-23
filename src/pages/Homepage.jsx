import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>GlobeWatch</h1>
        <br />
        <h2>
          Track your global adventures, one city at a time with GlobeWatch -
          your personal travel companion.
        </h2>
        <Link to="/app" className="cta">
          Get started
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
