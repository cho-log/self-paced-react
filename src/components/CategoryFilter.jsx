import "../styles/components/CategoryFilter.css";

const OPTIONS = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];

export default function CategoryFilter({
  id,
  label,
  category,
  onChangeCategory,
}) {
  return (
    <select
      name="category"
      id={id}
      className="restaurant-filter"
      aria-label={label}
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
