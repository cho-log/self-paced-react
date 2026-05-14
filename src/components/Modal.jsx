import styles from "./Modal.module.css";

export default function Modal({ onClose, children }) {
  return (
    <div className={`${styles.modal} ${styles.open}`}>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
