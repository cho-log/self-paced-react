import styles from "./RestaurantCategoryFilter.module.css";
import categorys from "../../../constants/category";

export default function CategoryFilter({ category, onChangeCategory }) {
  return (
    <section className={`${styles["restaurant-filter-container"]}`}>
      <select
        name="category"
        id="category-filter"
        className={`${styles["restaurant-filter"]}`}
        value={category}
        onInput={(event) => onChangeCategory(event.target.value)}
      >
        {categorys.map((categoryItem) => (
          <option key={categoryItem.key} value={categoryItem.value}>
            {categoryItem.value}
          </option>
        ))}
      </select>
    </section>
  );
}
