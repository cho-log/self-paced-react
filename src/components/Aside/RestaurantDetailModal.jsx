import '../styles/default.css';
import '../styles/RestaurantDetailModal.css';

function RestaurantDetailModal({ isOpen, setOpen, selectedRestaurant }) {
  if (!isOpen) return null;

  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={() => setOpen(false)} />
      <div className="modal-container">
        <h2 className="modal-title text-title">{selectedRestaurant.name}</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">{selectedRestaurant.description}</p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button button--primary text-caption"
            onClick={() => setOpen(false)}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailModal;
