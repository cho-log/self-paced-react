import Modal from "./modal/Modal";
import styles from "/src/styles/RestaurantAddModal.module.css";
import RestaurantCategory from "../category/RestaurantCategory";

const categoryMap = {
    '한식': 'korean',
    '중식': 'chinese',
    '일식': 'japanese',
    '양식': 'western',
    '아시안': 'asian',
    '기타': 'etc',
};

export default function RestaurantAddModal({ restaurantList, setActiveIndex, setIsModalOpen, setRestaurantList }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const id = restaurantList.length + 1;
        const alt = e.target.category.value;
        const category = categoryMap[alt];
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

        setRestaurantList((prev) => [...prev, newRestaurant]);
        setActiveIndex(0);
        setIsModalOpen(false);
    };

    const addModalClose = () => {
        setActiveIndex(0);
        setIsModalOpen(false);
    }

    return (
        <Modal title="새로운 음식점" onClose={addModalClose} onSubmit={handleSubmit}>
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
                <textarea name="description" id="description" cols="30" rows="5"></textarea>
                <span className={`${styles["help-text"]} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
            </div>
        </Modal>
    );
}
