import "../styles/components/Modal.css";
import "../styles/components/Form.css";
import Modal from "./Modal.jsx";

export default function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2 className="modal-title text-title">{restaurant.name}</h2>
      <div className="restaurant-info">
        <p className="restaurant-info__description text-body">
          {restaurant.description || "상세 설명이 없습니다."}
        </p>
      </div>

      <div className="button-container">
        <button
          className="button button--primary text-caption"
          type="button"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </Modal>
  );
}
