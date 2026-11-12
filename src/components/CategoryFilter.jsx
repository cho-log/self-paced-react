import '../css/CategoryFilter.css';

import { CATEGORIES } from '../constants/categories';

export default function CategoryFilter({ category, onChangeCategory }) {
  function handleChange(event) {
    onChangeCategory(event.target.value);
  }

  return (
    <section className="restaurant-filter-container">
      <select value={category} onChange={handleChange} id="category-filter" className="restaurant-filter" aria-label="음식점 카테고리 필터">
        <option value="전체">전체</option>
        {Object.keys(CATEGORIES).map((categoryName) => (
          <option key={categoryName} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </select>
    </section>
  );
}
