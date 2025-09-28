import { useId } from "react";
import "../styles/components/CategoryFilter.css";

const OPTIONS = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];

export default function CategoryFilter({ id, category, onChangeCategory }) {
  const autoId = useId();
  const selectId = id ?? `category-filter-${autoId}`;

  return (
    <select
      name="category"
      id={selectId}
      className="restaurant-filter"
      aria-label="음식점 카테고리 필터"
      value={category}
      onChange={(e) => onChangeCategory(e.target.value)}
    >
      {OPTIONS.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
