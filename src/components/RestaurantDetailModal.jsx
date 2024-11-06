import "../styles/RestaurantDetailModalStyle.css";

function RestaurantDetailModal({ setIsModalOpen, restaurantName, restaurantInfo }) {
  return (
    <>
      <div className="modal modal--open">
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}></div>
        <div className="modal-container">
          <h2 className="modal-title text-title">{restaurantName}</h2>
          <div className="restaurant-info">
            <p className="restaurant-info__description text-body">{restaurantInfo}</p>
          </div>
          <div className="button-container">
            <button
              className="button button--primary text-caption"
              onClick={() => setIsModalOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantDetailModal;
