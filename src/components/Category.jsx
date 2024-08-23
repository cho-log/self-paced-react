import styles from "../css/Category.module.css";

const Category = ({category,onCategoryChange}) => {
    const options = ["전체","한식", "중식", "일식", "양식", "아시안", "기타"];
    return (
        <section className={styles[`restaurant-filter-container`]}>
            <select name="category"
                    id="category-filter"
                    className="restaurant-filter"
                    aria-label="음식점 카테고리 필터"
                    value={category}
                    onChange={onCategoryChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default Category;