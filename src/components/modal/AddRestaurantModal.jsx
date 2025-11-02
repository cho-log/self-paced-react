import styles from "./Modal.module.css";
import Modal from "./Modal";
import categories from "../../constants/category";

// Temporary for step 4
import restaurants from "../../data/restaurant";

export default function AddRestaurantModal({ closeModal }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const newRestaurant = Object.fromEntries(formData.entries());
    newRestaurant.id = Date.now();

    //Todo : Replace with API Call for step 5
    restaurants.push(newRestaurant);
    closeModal();
  };

  return (
    <Modal title="새로운 음식점" onBackdropClick={closeModal}>
      <form method="post" onSubmit={handleSubmit}>
        <div
          className={`${styles["form-item"]} ${styles["form-item--required"]}`}
        >
          <label htmlFor="category" className="text-caption">
            카테고리
          </label>
          <select name="category" id="category" required>
            <option value="">선택해 주세요</option>
            {categories
              .filter((category) => category.key !== "all")
              .map((categoryItem) => (
                <option key={categoryItem.key} value={categoryItem.value}>
                  {categoryItem.value}
                </option>
              ))}
          </select>
        </div>

        <div
          className={`${styles["form-item"]} ${styles["form-item--required"]}`}
        >
          <label htmlFor="name" className="text-caption">
            이름
          </label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className={styles["form-item"]}>
          <label htmlFor="description" className="text-caption">
            설명
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
          ></textarea>
          <span className="help-text text-caption">
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        <div className={styles["button-container"]}>
          <button
            type="submit"
            className={`${styles.button} ${styles["button--primary"]} text-caption`}
          >
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}
