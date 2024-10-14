import "../styles/CategoryFilterStyle.css";
import { categoryData } from "../data/categoryData";

function CategoryFilter({ category, onChangeCategory }) {
  function handleChange(event) {
    onChangeCategory(event.target.value);
  }

  return (
    <>
      <section className="restaurant-filter-container">
        <select
          name="category"
          id="category-filter"
          className="restaurant-filter"
          aria-label="음식점 카테고리 필터"
          value={category}
          onChange={handleChange}
        >
          {categoryData.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </section>
    </>
  );
}

export default CategoryFilter;
