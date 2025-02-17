import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";
import PricingDetail from "../components/PricingDetails/PricingDetail";

function Pricing() {
  return (
    <section className={styles.pricing}>
      <PageNav />
      <div className={styles.pricingContainer}>
        <h1 className={styles.header}>
          Your <span>Journey</span> Deserves<span> More</span>.
        </h1>
        <p className={styles.subHeading}>
          Enjoy essential travel diary features for free, or unlock exclusive
          tools with Pro for just $49.99 per year!
        </p>
        <PricingDetail />
        <p className={styles.message}>
          All features of the app are completely FREE for all users! Enjoy
          unlimited access to everything we have to offer. Start exploring now!
        </p>
        <aside className={styles.details}>
          Price includes all applicable taxes. You can cancel at any time.
          <br />
          Subscription auto-renews until canceled.
        </aside>
      </div>
    </section>
  );
}

export default Pricing;
