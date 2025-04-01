import styles from "./RestaurantCategoryFilter.module.css";

function RestaurantCategoryFilter({ categoryFilters }) {
  return (
    <section className={styles["restaurant-filter-container"]}>
      <select
        name="category"
        id="category-filter"
        className={styles["restaurant-filter"]}
        aria-label="음식점 카테고리 필터"
      >
        {categoryFilters.map((filter) => (
          <option key={filter.value}>{filter.label}</option>
        ))}
      </select>
    </section>
  );
}

export default RestaurantCategoryFilter;
