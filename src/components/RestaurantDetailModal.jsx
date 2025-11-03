import "../styles/components/Modal.css";
import "../styles/components/Form.css";

export default function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose} />

      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="restaurant-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="restaurant-modal-title" className="modal-title text-title">
          {restaurant.name}
        </h2>
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
      </div>
    </div>
  );
}
