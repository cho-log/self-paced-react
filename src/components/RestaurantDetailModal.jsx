import Modal from "./Modal";
import styles from "./RestaurantDetailModal.module.css";

export default function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2 className={`${styles.title} text-title`}>{restaurant.name}</h2>
      <div className={styles.info}>
        <p className={`${styles.description} text-body`}>
          {restaurant.description}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.primary} text-caption`}
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}
