import styles from "./RestaurantModal.module.css";

function RestaurantInfoModal() {
  return (
    <aside>
      <div className={`${styles["modal"]} ${styles["modal--open"]}`}>
        <div className={styles["modal-backdrop"]}></div>
        <div className={styles["modal-container"]}>
          <h2 className={`${styles["modal-title"]} ${styles["text-title"]}`}>
            음식점 이름
          </h2>

          <div className={styles["restaurant-info"]}>
            <p
              className={`${styles["restaurant-info__description"]} ${styles["text-body"]}`}
            >
              음식점 소개 문구
            </p>
          </div>

          <div className={styles["button-container"]}>
            <button
              className={`${styles["button"]} ${styles["button--primary"]} ${styles["text-caption"]}`}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RestaurantInfoModal;
