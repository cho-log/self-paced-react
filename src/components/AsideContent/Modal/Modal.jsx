import styles from '../RestaurantModal.module.css';

export default function Modal({ children, onClickBackdrop }) {
  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div
        className={styles.modalBackdrop}
        role="presentation"
        onClick={onClickBackdrop}
      />
      <div className={styles.modalContainer}>
        { children }
      </div>
    </div>
  );
}
