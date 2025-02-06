import styles from "../ConfirmationDialog/ConfirmationDialog.module.css";
export default function ConfirmationDialog({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.confirmationOverlay}>
      <div className={styles.confirmationDialog}>
        <p>{message}</p>
        <div className={styles.dialogActions}>
          <button className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
