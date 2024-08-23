import styles from "../css/Modal.module.css"

const categories = [
    {value: '', label: '선택해 주세요'},
    {value: '한식', label: '한식'},
    {value: '중식', label: '중식'},
    {value: '일식', label: '일식'},
    {value: '양식', label: '양식'},
    {value: '아시안', label: '아시안'},
    {value: '기타', label: '기타'}
];
const RestaurantAddModal = () => {
    return (
        <div className={`${styles.modal} ${styles.modalOpen}`}>
            <div className={styles.modalBackdrop}

            ></div>
            <div className={styles.modalContainer}>
                <h2 className={`${styles.modalTitle} text-title`}>새로운 음식점</h2>
                <form>
                    {/* 카테고리 */}
                    <div className={`${styles.formItem} ${styles.formItemRequired}`}>
                        <label htmlFor="category" className={`${styles.textCaption}`}>카테고리</label>
                        <select name="category" id="category" required>
                            {categories.map(category => (
                                <option key={category.value} value={category.value}>
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* 음식점 이름 */}
                    <div className={`${styles.formItem} ${styles.formItemRequired}`}>
                        <label htmlFor="name" className={`${styles.textCaption}`}>이름</label>
                        <input type="text" name="name" id="name" required/>
                    </div>

                    {/* 설명 */}
                    <div className={styles.formItem}>
                        <label htmlFor="description" className={`${styles.textCaption}`}>설명</label>
                        <textarea name="description" id="description" cols="30" rows="5"></textarea>
                        <span className={`${styles.helpText} ${styles.textCaption}`}>메뉴 등 추가 정보를 입력해 주세요.</span>
                    </div>

                    {/* 추가 버튼 */}
                    <div className={styles.buttonContainer}>
                        <button className={`${styles.button} ${styles.buttonPrimary} ${styles.textCaption}`}>추가하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RestaurantAddModal;