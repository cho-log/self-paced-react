import styles from "./CategoryFilter.module.css";
import { categories } from "../Data/Data.jsx";

function CategoryFilter({ category, onChangeCategory }) {
  return (
    <section className={styles["restaurant-filter-container"]}>
      <select
        name="category"
        id="category-filter"
        className={styles["restaurant-filter"]}
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(event) => onChangeCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.value}>
            {category.value}
          </option>
        ))}
      </select>
    </section>
  );
}

export default CategoryFilter;
