import styles from "../css/CategoryFilter.module.css";  
import { options } from "../datas/RestaurantData";

function CategoryFilter({ category, onChangeCategory }) {
  
  return (
    <section className={styles["restaurant-filter-container"]}>
      <select
        name="category"
        id="category-filter"
        className={styles["restaurant-filter"]}
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(event)=> onChangeCategory(event.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </section>
  );
}
export default CategoryFilter;