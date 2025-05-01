import styles from './Modal.module.css';
import Modal from './modal/modal';

const RestaurantDetailModal = ({
  setIsModalOpen,
  selectedRestaurant,
  setSelectedRestaurant,
}) => {
  const closeRestaurantDetailModal = () => {
    setIsModalOpen(false);
    setSelectedRestaurant(null);
  };

  return (
    <Modal title={selectedRestaurant.name} onClose={closeRestaurantDetailModal}>
      <div className={styles['restaurant-info']}>
        <p className={`${styles['restaurant-info__description']} text-body`}>
          {selectedRestaurant.description}
        </p>
      </div>
      <div className={styles['button-container']}>
        <button
          type="button"
          className={`${styles.button} ${styles['button--primary']} text-caption`}
          onClick={closeRestaurantDetailModal}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
};

export default RestaurantDetailModal;
