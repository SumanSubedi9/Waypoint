import styles from "./PageNotFound.module.css";
import PageNav from "../components/PageNav.jsx";
import { MdErrorOutline } from "react-icons/md";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div className={styles.page}>
      <MdErrorOutline className={styles.icon} />
      <h1>Sorry, this page isn&apos;t available.</h1>
      <p>
        The link you followed may be broken, or the page may have been removed.
      </p>
      <Button style="primary" onClick={handleClick}>
        Home
      </Button>
    </div>
  );
}

export default PageNotFound;
