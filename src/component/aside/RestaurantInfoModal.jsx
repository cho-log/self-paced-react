import React from 'react';
import styles from '../../css/Aside.module.css';
import Modal from './Modal';

const RestaurantInfoModal = ({isOpen, setIsModalOpen, restaurants }) => {  
  const selectedRestaurant = restaurants.find(restaurant => restaurant.name === isOpen);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsModalOpen(false)}>
      {selectedRestaurant && (
        <>
          <h2 className={`${styles['modal-title']} ${styles['text-title']}`}>
            {selectedRestaurant.name}
          </h2>
          <div className={styles['restaurant-info']}>
            <p
              className={`${styles['restaurant-info__description']} text-body`}
            >
              {selectedRestaurant.description}
            </p>
          </div>
          <div className={styles['button-container']}>
            <button
              className={`${styles['button']} ${styles['button--primary']} text-caption`}
              onClick={() => setIsModalOpen(null)}
            >
              닫기
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default RestaurantInfoModal;
