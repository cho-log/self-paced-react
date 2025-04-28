import styles from './Modal.module.css';

const RestaurantDetailModal = ({ onCancelClick, selectedRestaurant }) => {
  if (!selectedRestaurant) {
    return null;
  }
  return (
    <div className={`${styles.modal} ${styles['modal--open']}`}>
      <div
        className={styles['modal-backdrop']}
        onClick={() => onCancelClick(false)}
      />
      <div className={styles['modal-container']}>
        <h2 className={`${styles['modal-title']} text-title`}>
          {selectedRestaurant.name}
        </h2>
        <div className={styles['restaurant-info']}>
          <p className={`${styles['restaurant-info__description']} text-body`}>
            {selectedRestaurant.description}
          </p>
        </div>
        <div className={styles['button-container']}>
          <button
            type="button"
            className={`${styles.button} ${styles['button--primary']} text-caption`}
            onClick={() => onCancelClick(false)}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailModal;
