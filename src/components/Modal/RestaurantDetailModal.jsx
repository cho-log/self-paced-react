import Modal from "./Modal";
import style from "./Modal.module.css";

export default function RestaurantDetailModal({ restaurantInfo, toggleModal }) {
  function handleClose() {
    toggleModal("isRestaurantDetailModalOpen", false);
  }

  return (
    <Modal title={restaurantInfo?.name} toggleModal={handleClose}>
      <div className={style["restaurant-info"]}>
        <p className={`${style["restaurant-info__description"]} text-body`}>
          {restaurantInfo?.description}
        </p>
      </div>
      <div className={style["button-container"]}>
        <button
          className={`${style.button} ${style["button--primary"]} text-caption`}
          onClick={handleClose}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}
