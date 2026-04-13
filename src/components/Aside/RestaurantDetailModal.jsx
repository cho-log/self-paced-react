import '../styles/default.css';
import '../styles/RestaurantDetailModal.css';

function RestaurantDetailModal({ detailModal, setDetailModal, selectedRestaurant }) {
  if (!detailModal) return null;

  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={() => setDetailModal(false)} />
      <div className="modal-container">
        <h2 className="modal-title text-title">{selectedRestaurant.name}</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">{selectedRestaurant.description}</p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button button--primary text-caption"
            onClick={() => setDetailModal(false)}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailModal;
