import styles from "./CategoryFilter.module.css";

function CategoryFilter() {
  const categories = [
    { id: 1, value: "전체" },
    { id: 2, value: "한식" },
    { id: 3, value: "중식" },
    { id: 4, value: "일식" },
    { id: 5, value: "양식" },
    { id: 6, value: "아시안" },
    { id: 7, value: "기타" },
  ];

  return (
    <section className={styles["restaurant-filter-container"]}>
      <select
        name="category"
        id="category-filter"
        className={styles["restaurant-filter"]}
        aria-label="음식점 카테고리 필터"
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
