import Modal from './Modal';
import styles from "../../css/Modal.module.css";
import CategoryKorean from "../../../templates/category-korean.png";
import CategoryChinese from "../../../templates/category-chinese.png";
import CategoryJapanese from "../../../templates/category-japanese.png";
import CategoryWestern from "../../../templates/category-western.png";
import CategoryAsian from "../../../templates/category-asian.png";
import CategoryETC from "../../../templates/category-etc.png";

const options = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];

const AddRestaurantModal = ({ setIsAddModal, restaurants, setRestaurants }) => {
    const onCloseAddModal = () => {
        setIsAddModal(false);
    }

    const onAddRestaurant = (e) => {
        e.preventDefault();

        const category = e.target.category.value;
        const name = e.target.name.value;
        const description = e.target.description.value;
        let icon;
        switch (category) {
            case "한식":
                icon = CategoryKorean;
                break;
            case "중식":
                icon = CategoryChinese;
                break;
            case "일식":
                icon = CategoryJapanese;
                break;
            case "양식":
                icon = CategoryWestern;
                break;
            case "아시안":
                icon = CategoryAsian;
                break;
            case "기타":
                icon = CategoryETC;
                break;
            default:
                icon = "";
                break;
        }

        const newRestaurant = {
            id: Date.now(),
            category,
            name,
            description,
            icon,
        };

        setRestaurants([...restaurants, newRestaurant]);
        onCloseAddModal();
    };

    return (
        <Modal title="새로운 음식점" onClose={onCloseAddModal}>
            <form onSubmit={onAddRestaurant}>
                <div className={`${styles.formItem} ${styles.formItemRequired}`}>
                    <label className="text-caption">카테고리</label>
                    <select name="category" required>
                        {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={`${styles.formItem} ${styles.formItemRequired}`}>
                    <label htmlFor="name" className="text-caption">이름</label>
                    <input type="text" name="name" required/>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="description" className="text-caption">설명</label>
                    <textarea name="description" id="description" cols="30" rows="5"></textarea>
                    <span className={`${styles.helpText} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="submit"
                        className={`${styles.button} ${styles.buttonPrimary} text-caption}`}
                    >추가하기
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddRestaurantModal;
