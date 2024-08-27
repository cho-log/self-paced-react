import styles from "../../css/Modal.module.css";

const InformationModal = ({isModal,setIsModal}) => {
    const onCloseModal = () => {
        setIsModal({
            isOpen: false,
            restaurants:{
                name:"",
                description:"",
            }
        })
    }
    return (
         <div className={`${styles.modal} ${styles.modalOpen}`}>
            <div
                className={styles.modalBackdrop}
                onClick={onCloseModal}
            ></div>
            <div className={styles.modalContainer}>
                <h2 className={`${styles.modalTitle} text-title`}>{isModal.restaurant.name}</h2>
                <div className={styles.restaurantInfo}>
                    <p className={`${styles.restaurantInfoDescription} text-body`}>{isModal.restaurant.description}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        className={`${styles.button} ${styles.buttonPrimary} text-caption`}
                        onClick={onCloseModal}
                    >닫기</button>
                </div>
            </div>
        </div>
    );
};

export default InformationModal;
