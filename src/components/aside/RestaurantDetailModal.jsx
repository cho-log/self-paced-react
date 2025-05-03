import Modal from "./modal/Modal";
import styles from "../../styles/RestaurantDetailModal.module.css"

export default function RestaurantDetailModal({ setIsModalOpen, restaurantValue }) {
    return (
        <Modal title={restaurantValue.name} onClose={() => setIsModalOpen(false)} showCloseButton>
            <div className={`${styles["restaurant-info"]}`}>
                <p className={`${styles["restaurant-info__description"]} text-body`}>{restaurantValue.description}</p>
            </div>
        </Modal>
    );
}