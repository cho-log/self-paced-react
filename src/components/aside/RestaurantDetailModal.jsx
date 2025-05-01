import Modal from "./Modal";

export default function RestaurantDetailModal({ setModalState, restaurantValue }) {
    return (
        <Modal title={restaurantValue.name} onClose={() => setModalState(false)} showCloseButton>
            <div className="text-body" style={{ marginTop: "1rem" }}>
                <p>{restaurantValue.description}</p>
            </div>
        </Modal>
    );
}