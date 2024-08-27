import Modal from './Modal';

const RestaurantDetailModal = ({ isModal, setIsModal }) => {
    const onCloseModal = () => {
        setIsModal({
            isOpen: false,
            restaurant: {
                name: "",
                description: "",
            }
        });
    };

    return (
        <Modal title={isModal.restaurant.name} onClose={onCloseModal}>
            <div>
                <p>{isModal.restaurant.description}</p>
            </div>
        </Modal>
    );
};

export default RestaurantDetailModal;
