import { ALL_CATEGORIES } from "../constants/categories";

export default function CategoryFilter({ category, onChangeCategory }) {
  return (
    <section className="restaurant-filter-container">
      <select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        {ALL_CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </section>
  );
}
