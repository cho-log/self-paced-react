import styles from "./Modal.module.css";

export default function Modal({ title, children, toggleModal }) {
  return (
    <div className={`${styles.modal} ${styles["modal--open"]}`}>
      <div className={styles["modal-backdrop"]} onClick={toggleModal} />
      <div className={styles["modal-container"]}>
        <h2 className={`${styles["modal-title"]} text-title`}>{title}</h2>
        {children}
      </div>
    </div>
  );
}
