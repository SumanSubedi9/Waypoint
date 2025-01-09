import styles from "./Button.module.css";
function Button({ children, onClick, style, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[style]}`}
    >
      {children}
    </button>
  );
}

export default Button;
