// src/component/common/Modal.js
import React from 'react';
import styles from '../../css/Aside.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className={`${styles['modal']} ${styles['modal--open']}`}>
      <div
        className={styles['modal-backdrop']}
        onClick={onClose}
      ></div>
      <div
        className={styles['modal-container']}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
