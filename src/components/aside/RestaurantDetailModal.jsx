import Modal from "./modal/Modal";

export default function RestaurantDetailModal({ setIsModalOpen, restaurantValue }) {
    return (
            <div className="text-body" style={{ marginTop: "1rem" }}>
                <p>{restaurantValue.description}</p>
        <Modal title={restaurantValue.name} onClose={() => setIsModalOpen(false)} showCloseButton>
            </div>
        </Modal>
    );
}