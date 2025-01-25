import PageNav from "../components/PageNav.jsx";
import styles from "./Explore.module.css";
import Gallery from "../components/Gallery/Gallery.jsx";
import Testimonial from "../components/Testimonials/Testimonial.jsx";

function Explore() {
  return (
    <section className={styles.explore}>
      <PageNav />
      <h1>
        Your <span>Journey</span> , our <span>Compass</span> — wherever you
        <span> travel</span>, we&apos;ll <span>track it</span>.
      </h1>
      <div className={styles.exploreContainer}>
        <Gallery />
        <Testimonial />
      </div>
    </section>
  );
}

export default Explore;
