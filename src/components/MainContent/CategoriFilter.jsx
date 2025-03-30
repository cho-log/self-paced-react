import styles from "./CategoryFilter.module.css";

function CategoryFilter() {
  const categories = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];

  return (
    <section className={styles["restaurant-filter-container"]}>
      <select
        name="category"
        id="category-filter"
        className={styles["restaurant-filter"]}
        aria-label="음식점 카테고리 필터"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
}

export default CategoryFilter;
