import Button from "./Button";
import { useNavigate } from "react-router-dom";
import styles from "./HomeButton.module.css";
import { FaHome } from "react-icons/fa";

function HomeButton() {
  const navigate = useNavigate();

  return (
    <div className={styles.homeButton}>
      <Button
        label="Home Button"
        style="home"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <FaHome className={styles.icon} />
      </Button>
    </div>
  );
}

export default HomeButton;
