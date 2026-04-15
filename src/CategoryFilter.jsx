const CATEGORIES = ['전체', '한식', '중식', '일식', '양식', '아시안', '기타'];

export default function CategoryFilter({ category, onChangeCategory }) {
	return (
		<section className="restaurant-filter-container">
			<select
				name="category"
				id="category-filter"
				className="restaurant-filter"
				aria-label="음식점 카테고리 필터"
				value={category}
				onChange={e => onChangeCategory(e.target.value)}>
				{CATEGORIES.map(category => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</section>
	);
}
