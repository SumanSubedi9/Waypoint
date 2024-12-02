import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Waypoint</h1>
        <br />
        <h2>
          Track your global adventures, one city at a time with Waypoint - your
          personal travel companion. Discover and document the cities
          you&apos;ve explored, building a unique story of your adventures.
        </h2>

        <Link to="/login" className="cta">
          Get started
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
