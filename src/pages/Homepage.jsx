import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>GlobeWatch</h1>
        <br />
        <h2>
          Track your global adventures, one city at a time with GlobeWatch -
          your personal travel companion.
        </h2>
      </section>
    </main>
  );
}

export default Homepage;
