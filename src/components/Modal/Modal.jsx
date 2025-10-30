import styles from "./Modal.module.css";

export default function Modal({ title, children, toggleModal }) {
  function handleClose() {
    toggleModal("isRestaurantDetailModalOpen", false);
  }

  return (
    <div className={`${styles.modal} ${styles["modal--open"]}`}>
      <div className={styles["modal-backdrop"]} onClick={handleClose} />
      <div className={styles["modal-container"]}>
        <h2 className={`${styles["modal-title"]} text-title`}>{title}</h2>
        {children}
      </div>
    </div>
  );
}
