import "../styles/components/Modal.css";
import "../styles/components/Form.css";

export default function RestaurantDetailModal() {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" />
      <div className="modal-container" role="dialog" aria-modal="true">
        <h2 className="modal-title text-title">음식점 이름</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">
            음식점 소개 문구
          </p>
        </div>
        <div className="button-container">
          <button className="button button--primary text-caption" type="button">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
