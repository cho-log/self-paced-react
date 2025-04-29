import React from 'react';
import styles from '../../css/Aside.module.css';

const RestaurantInfoModal = ({ setIsModalOpen }) => {
  return (
    <div
      className={`${styles['modal']} ${styles['modal--open']}`}
    >
      <div className={styles['modal-backdrop']} onClick={() => setIsModalOpen(null)}></div>
      <div className={styles['modal-container']}>
        <h2 className={`${styles['modal-title']} ${styles['text-title']}`}>
          음식점 이름
        </h2>
        <div className={styles['restaurant-info']}>
          <p className={`${styles['restaurant-info__description']} text-body`}>
            음식점 소개 문구
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
      </div>
    </div>
  );
};

export default RestaurantInfoModal;
