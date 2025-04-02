import styles from "/src/styles/Main.module.css"
import RestaurantCategory from "../category/RestaurantCategory";

export default function RestaurantFilter({ selectedCategory, setSelectedCategory }) {
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    return (
        <section className={styles["restaurant-filter-container"]}>
            <select name="category" id="category-filter" className={styles["restaurant-filter"]}
                aria-label="음식점 카테고리 필터" value={selectedCategory} onChange={handleChange}>
                <RestaurantCategory excludedCategories={"선택해 주세요"} />
            </select>
        </section>
    );
}