import Modal from "./modal/Modal.jsx";
import styles from "/src/styles/RestaurantAddModal.module.css";
import RestaurantCategory from "../category/FilteredCategoryOptions";
import { useRestaurantContext } from "../../context/RestaurantContext.jsx";

const CATEGORYMAP = {
    korean: "한식",
    chinese: "중식",
    japanese: "일식",
    western: "양식",
    asian: "아시안",
    etc: "기타",
};

export default function RestaurantAddModal() {
    const {
        restaurants,
        setRestaurants,
        setActiveModalIndex,
        closeModal,
    } = useRestaurantContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = restaurants.length + 1;
        const category = e.target.category.value;
        const alt = CATEGORYMAP[category];
        const icon = `/assets/images/category/category-${category}.png`;
        const name = e.target.name.value;
        const description = e.target.description.value;

        const newRestaurant = {
            id,
            category,
            icon,
            alt,
            name,
            description,
        };

        setRestaurants((prev) => [...prev, newRestaurant]);
        setActiveModalIndex(0);
        closeModal();
    };

    return (
        <Modal title="새로운 음식점" onClose={closeModal} onSubmit={handleSubmit}>
            <div className={`${styles["form-item"]} ${styles["form-item--required"]}`}>
                <label htmlFor="category" className="text-caption">카테고리</label>
                <select name="category" id="category" required>
                    <RestaurantCategory excludedCategories={"전체"} />
                </select>
            </div>

            <div className={`${styles["form-item"]} ${styles["form-item--required"]}`}>
                <label htmlFor="name" className="text-caption">이름</label>
                <input type="text" name="name" id="name" required />
            </div>

            <div className={styles["form-item"]}>
                <label htmlFor="description" className="text-caption">설명</label>
                <textarea name="description" id="description" cols="30" rows="5" />
                <span className={`${styles["help-text"]} text-caption`}>
                    메뉴 등 추가 정보를 입력해 주세요.
                </span>
            </div>
        </Modal>
    );
}
