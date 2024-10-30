import PageNav from "../components/PageNav";
import styles from "./Memories.module.css";

function Memories() {
  return (
    <section className={styles.memories}>
      <div>
        <PageNav />
        <h1>Memories</h1>
      </div>
    </section>
  );
}

export default Memories;
