import Modal from "../../modals/Modal";
import styles from "./RestaurantModal.module.css";

function AddRestaurantModal({ isOpen, onClose, categoryOptions }) {
  if (!categoryOptions) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={`${styles["modal-title"]} ${styles["text-title"]}`}>
        새로운 음식점
      </h2>
      <form>
        <div
          className={`${styles["form-item"]} ${styles["form-item--required"]}`}
        >
          <label htmlFor="category" className={styles["text-caption"]}>
            카테고리
          </label>
          <select name="category" id="category" required>
            {categoryOptions.map((option) => (
              <option key={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div
          className={`${styles["form-item"]} ${styles["form-item--required"]}`}
        >
          <label htmlFor="name" className={styles["text-caption"]}>
            이름
          </label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className={styles["form-item"]}>
          <label htmlFor="description" className={styles["text-caption"]}>
            설명
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
          ></textarea>
          <span className={`${styles["help-text"]} ${styles["text-caption"]}`}>
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        <div className={styles["button-container"]}>
          <button
            className={`${styles["button"]} ${styles["button--primary"]} ${styles["text-caption"]}`}
          >
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
