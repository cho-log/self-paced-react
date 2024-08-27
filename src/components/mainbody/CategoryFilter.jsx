import styles from "../../css/Category.module.css";

const options = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];

const CategoryFilter = ({setCategory}) => {
    return (
        <section className={styles.restaurantFilterContainer}>
            <select
                name="category"
                id="category-filter"
                className={styles.restaurantFilter}
                aria-label="음식점 카테고리 필터"
                onChange={(e) => setCategory(e.target.value)}
            >
                {options.map(option => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}q
            </select>
        </section>
    );
};

export default CategoryFilter;
