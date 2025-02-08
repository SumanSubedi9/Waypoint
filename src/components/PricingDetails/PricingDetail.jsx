import styles from "./PricingDetail.module.css";
import Button from "../../components/Button";
import { IoCheckmark, IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function PricingDetail() {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(route);
  }

  return (
    <div className={`${styles.container} ${styles.grid}`}>
      <div className={styles.freePlan}>
        <header>
          <p className={styles.planHeader}>Waypoint</p>
          <p className={styles.planText}></p>
          <p className={styles.planPrice}>
            <span>$</span>0.00
          </p>
          <p className={styles.planText}>Your travel diary, completely FREE!</p>
        </header>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <IoCheckmark className={styles.checkMark} />
            <span>Track Unlimited Trips</span>
          </li>

          <li className={styles.listItem}>
            <IoCheckmark className={styles.checkMark} />
            <span>Ad-Free Experience</span>
          </li>

          <li className={styles.listItem}>
            <IoCloseOutline className={styles.close} />
            <span>Upload Trip Photos</span>
          </li>
          <li className={styles.listItem}>
            <IoCloseOutline className={styles.close} />
            <span>Personalized Trip Insights</span>
          </li>
        </ul>
        <Button
          onClick={() => handleClick("/signup")}
          className={styles.btn}
          style="primary"
        >
          Get Started
        </Button>
      </div>

      <div className={styles.proPlan}>
        <header>
          <p>Waypoint</p>
          <p className={styles.planPrice}>
            <span>$</span>49.99
          </p>
          <p className={styles.planText}>
            per year. That&apos;s just $4 a month!
          </p>
        </header>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <IoCheckmark className={styles.checkMark} />
            <span>Track Unlimited Trips</span>
          </li>

          <li className={styles.listItem}>
            <IoCheckmark className={styles.checkMark} />
            <span>Ad-Free Experience</span>
          </li>

          <li className={styles.listItem}>
            <IoCheckmark className={styles.checkMark} />
            <span>Upload Trip Photos</span>
          </li>
          <li className={styles.listItem}>
            <IoCheckmark className={styles.checkMark} />
            <span>Personalized Trip Insights</span>
            <div className={styles.comingSoon}>Coming Soon</div>
          </li>
        </ul>
        <Button onClick={() => handleClick("/login")} style="primary">
          Upgrade
        </Button>
      </div>
    </div>
  );
}

export default PricingDetail;
