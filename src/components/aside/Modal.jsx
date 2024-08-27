import styles from '../../css/Modal.module.css';

const Modal = ({ title, onClose, children }) => {
    return (
        <div className={`${styles.modal} ${styles.modalOpen}`}>
            <div className={styles.modalBackdrop} onClick={onClose}></div>
            <div className={styles.modalContainer}>
                <h2 className={`${styles.modalTitle} text-title`}>{title}</h2>
                <div className={styles.modalContent}>
                    {children}
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        className={`${styles.button} ${styles.buttonPrimary} text-caption}`}
                        onClick={onClose}
                    >닫기</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
