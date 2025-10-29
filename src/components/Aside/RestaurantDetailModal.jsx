import Modal from '../UI/Modal';
import styles from './RestaurantModal.module.css';

function RestaurantDetailModal({ restaurant }) {
  return (
    <Modal>
      <h2 className={`${styles.modalTitle} text-title`}>{restaurant.name}</h2>
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantInfodescription} text-body`}>{restaurant.description}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button type="button" className={`${styles.button} ${styles.buttonPrimary} text-caption`}>닫기</button>
      </div>
    </Modal>
  );
}

export default RestaurantDetailModal;
