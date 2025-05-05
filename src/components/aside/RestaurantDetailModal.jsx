import Modal from "./modal/Modal.jsx";
import styles from "../../styles/RestaurantDetailModal.module.css";
import { useRestaurantContext } from "../../context/RestaurantContext.jsx";

export default function RestaurantDetailModal() {
    const { restaurantItem, closeModal } = useRestaurantContext();

    return (
        <Modal title={restaurantItem.name} onClose={closeModal} isButtonOpen>
            <div className={`${styles["restaurant-info"]}`}>
                <p className={`${styles["restaurant-info__description"]} text-body`}>
                    {restaurantItem.description}
                </p>
            </div>
        </Modal>
    );
}
