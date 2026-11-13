import Modal from "../modal/Modal";

function RestaurantDetailModal({ restaurant, onCloseModal }) {
  return (
    <Modal onClose={onCloseModal}>
      <h2 className="modal-title text-title">{restaurant.name}</h2>
      <div className="restaurant-info">
        <p className="restaurant-info__description text-body">{restaurant.description}</p>
      </div>
      <div className="button-container">
        <button className="button button--primary text-caption"
          onClick={onCloseModal}
        >닫기</button>
      </div>
    </Modal>

  );
}

export default RestaurantDetailModal;
