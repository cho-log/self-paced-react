import styles from '../RestaurantModal.module.css';

export default function RestaurantDetailModal({ restaurantInfo, updateClickedRestaurantID }) {
  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div className={styles.modalBackdrop} />
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{restaurantInfo.name}</h2>
        <div className={styles.restaurantInfo}>
          <p className={`${styles.restaurantInfoDescription} text-body`}>{restaurantInfo.description}</p>
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" className={`${styles.button} ${styles.buttonPrimary} text-caption`} onClick={() => { updateClickedRestaurantID('None'); }}>닫기</button>
        </div>
      </div>
    </div>
  );
}
