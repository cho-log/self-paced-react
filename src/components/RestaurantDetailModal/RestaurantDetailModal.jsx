import Modal from "../Modal/Modal";

export default function RestaurantDetailModal({
  restaurants,
  setIsDetailModalOpen,
}) {
  return (
    <Modal title={restaurants.name} onClose={setIsDetailModalOpen}>
      <div className="modal modal--open">
        <div className="modal-backdrop" onClick={setIsDetailModalOpen}></div>
        <div className="modal-container">
          <h2 className="modal-title text-title">{restaurants.name}</h2>
          <div className="restaurant-info">
            <p className="restaurant-info__description text-body">
              {restaurants.description}
            </p>
          </div>
          <div className="button-container">
            <button
              className="button button--primary text-caption"
              onClick={setIsDetailModalOpen}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
