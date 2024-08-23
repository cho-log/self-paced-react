import styles from "../css/Modal.module.css";

const RestaurantInfoModal = ({isModalOpen,setIsModalOpen,RestaurantInfo}) => {
    return (
        <div className={`${isModalOpen ? styles.modalOpen : styles.modal}`}>
            <div className={styles.modalBackdrop}
                 onClick={() => setIsModalOpen(false)}
            ></div>
            <div className={styles.modalContainer}>
                <h2 className={`${styles.modalTitle} text-title`}>
                    {RestaurantInfo.title}
                </h2>
                <div className={styles.restaurantInfo}>
                    <p className={`restaurant-info__description text-body`}>
                        {RestaurantInfo.description}
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        className={`${styles.button} ${styles.buttonPrimary} text-caption`}
                        onClick={()=>{
                            setIsModalOpen(false);
                        }}
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantInfoModal;
