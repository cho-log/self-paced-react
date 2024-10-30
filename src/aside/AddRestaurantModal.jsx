import styles from "../css/RestaurantDetailModal.module.css";
import { options } from "../datas/RestaurantData";
function AddRestaurantModal() {
  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>새로운 음식점</h2>
        <form>
          {/* <!-- 카테고리 --> */}
          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="category" className="text-caption">카테고리</label>
            <select name="category" id="category" required>
            {options.map((option, index) => (
              <option key={index} value={option}>
            {option}
          </option>
        ))}
            </select>
          </div>

          {/* <!-- 음식점 이름 --> */}
          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="name" className="text-caption">이름</label>
            <input type="text" name="name" id="name" required />
          </div>

          {/* <!-- 설명 --> */}
          <div className={styles.formItem}>
            <label htmlFor="description" className="text-caption">설명</label>
            <textarea name="description" id="description" cols="30" rows="5"></textarea>
            <span className="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
          </div>

          {/* <!-- 추가 버튼 --> */}
          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.buttonPrimary} text-caption`}>
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRestaurantModal;