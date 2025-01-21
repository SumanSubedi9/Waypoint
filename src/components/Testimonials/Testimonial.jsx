import styles from "./Testimonial.module.css";

function Testimonial() {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonials}>
        <figure className={styles.testimonial}>
          <img src="/customers/user-1.jpg" alt="Photo of Customer" />
          <blockquote className={styles.testimonialText}>
            Waypoint makes tracking my travels so easy and fun. It&apos;s like
            having a digital scrapbook of my adventures!
          </blockquote>
          <p className={styles.testimonialName}>&mdash; Param Poudel </p>
        </figure>
        <figure className={styles.testimonial}>
          <img src="/customers/user-2.jpg" alt="Photo of Customer" />
          <blockquote className={styles.testimonialText}>
            I&apos;ve tried many travel apps, but Waypoint stands out for its
            simplicity and elegance. It&apos;s not just about tracking trips—it
            helps me relive the memories. I recommend it to anyone who loves
            exploring the world!
          </blockquote>
          <p className={styles.testimonialName}>&mdash; Joseph Russ</p>
        </figure>
        <figure className={styles.testimonial}>
          <img src="/customers/user-3.jpg" alt="Photo of Customer" />
          <blockquote className={styles.testimonialText}>
            Waypoint simplifies travel tracking like no other app. I love its
            clean design and how easy it is to use. It&apos;s my go-to for
            organizing and cherishing all my trips.
          </blockquote>
          <p className={styles.testimonialName}>&mdash; Krishab Bashyal</p>
        </figure>
        <figure className={styles.testimonial}>
          <img src="/customers/user-4.jpg" />
          <blockquote className={styles.testimonialText}>
            Waypoint keeps my adventures alive in the best way possible.
            It&apos;s like a digital diary of all the places I&apos;ve been,
            with every detail at my fingertips. I recommend it to every traveler
            out there!
          </blockquote>
          <p className={styles.testimonialName}>&mdash; Sushant Subedi</p>
        </figure>
      </div>
    </div>
  );
}

export default Testimonial;
