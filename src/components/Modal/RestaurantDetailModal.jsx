import style from "./Modal.module.css";

export default function RestaurantDetailModal({ toggleModal }) {
  function handleClose() {
    toggleModal("isRestaurantDetailModalOpen", false);
  }

  return (
    <div className={`${style.modal} ${style["modal--open"]}`}>
      <div className={style["modal-backdrop"]} onClick={handleClose} />
      <div className={style["modal-container"]}>
        <h2 className={`${style["modal-title"]} text-title`}>음식점 이름</h2>
        <div className={style["restaurant-info"]}>
          <p className={`${style["restaurant-info__description"]} text-body`}>
            음식점 소개 문구
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
      </div>
    </div>
  );
}
