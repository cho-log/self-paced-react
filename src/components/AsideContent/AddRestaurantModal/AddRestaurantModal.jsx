import styles from '../RestaurantModal.module.css';

export default function AddRestaurantModal({ updateShowAddRestaurantModal, addRestaurantInfo }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryImgMap = {
      한식: 'templates/category-korean.png',
      중식: 'templates/category-chinese.png',
      일식: 'templates/category-japanese.png',
      양식: 'templates/category-western.png',
      아시안: 'templates/category-asian.png',
      기타: 'templates/category-etc.png',
    };
    const formData = new FormData(e.target);
    const newRestaurant = {
      id: Date.now(),
      name: formData.get('name'),
      description: formData.get('description'),
      category: formData.get('category'),
      imgSrc: categoryImgMap[formData.get('category')],
    };
    addRestaurantInfo(newRestaurant);
    updateShowAddRestaurantModal(false);
  };

  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div className={styles.modalBackdrop} />
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>새로운 음식점</h2>
        <form onSubmit={handleSubmit}>
          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="category" className="text-caption">카테고리</label>
            <select name="category" id="category" required>
              <option value="">선택해 주세요</option>
              <option value="한식">한식</option>
              <option value="중식">중식</option>
              <option value="일식">일식</option>
              <option value="양식">양식</option>
              <option value="아시안">아시안</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="name" className="text-caption">이름</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="description" className="text-caption">설명</label>
            <textarea name="description" id="description" cols="30" rows="5" />
            <span className={`${styles.helpText} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={`${styles.button} ${styles.buttonPrimary} text-caption`}>추가하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
