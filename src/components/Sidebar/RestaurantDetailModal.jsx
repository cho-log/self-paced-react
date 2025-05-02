import styles from "./Sidebar.module.css";

function RestaurantDetailModal({
  restaurantName,
  restaurantDescription,
  onClose,
}) {
  return (
    <div className={`${styles.modal} ${styles["modal--open"]}`}>
      <div className={styles["modal-backdrop"]} onClick={() => onClose()}></div>
      <div className={styles["modal-container"]}>
        <h2 className={`${styles["modal-title"]} text-title`}>
          {restaurantName}
        </h2>
        <div className={styles["restaurant-info"]}>
          <p className="restaurant-info__description text-body">
            {restaurantDescription}
          </p>
        </div>
        {/* 닫기버튼 */}
        <div className={styles["button-container"]}>
          <button
            className={`${styles.button} ${styles["button--primary"]} text-caption`}
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailModal;
