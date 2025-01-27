import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        {/* Desktop Nav*/}
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Explore">Explore</NavLink>
          </li>
          <li>
            <NavLink to="/Pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
        {isOpen ? (
          <IoClose
            className={styles.menuCloseBtn}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <IoMenu className={styles.menuBtn} onClick={() => setIsOpen(true)} />
        )}
      </nav>

      {/*Mobile Navigation*/}
      <ul
        className={`${styles.mobileNav} ${
          isOpen ? styles.menuOpen : styles.menuClosed
        } `}
        onClick={() => setIsOpen(false)}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default PageNav;
