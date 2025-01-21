import PageNav from "../components/PageNav.jsx";
import styles from "./Explore.module.css";
import Gallery from "../components/Gallery/Gallery.jsx";
import Testimonial from "../components/Testimonials/Testimonial.jsx";

function Explore() {
  return (
    <section className={styles.explore}>
      <PageNav />
      <h1>
        Your journey, our compass—wherever you travel, we&apos;ll track it.
      </h1>
      <div className={styles.exploreContainer}>
        <Gallery />
        <Testimonial />
      </div>
    </section>
  );
}

export default Explore;
