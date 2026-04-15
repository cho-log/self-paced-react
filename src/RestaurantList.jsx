const CATEGORY_ICON_MAP = {
	한식: '/category-korean.png',
	중식: '/category-chinese.png',
	일식: '/category-japanese.png',
	양식: '/category-western.png',
	아시안: '/category-asian.png',
	기타: '/category-etc.png',
};

export default function RestaurantList({ restaurants, onClickRestaurant }) {
	return (
		<section className="restaurant-list-container">
			<ul className="restaurant-list">
				{restaurants.map(restaurant => (
					<li
						key={restaurant.id}
						className="restaurant"
						onClick={() => onClickRestaurant(restaurant)}
						role="button"
						tabIndex={0}
					>
						<div className="restaurant__category">
							<img
								src={CATEGORY_ICON_MAP[restaurant.category]}
								alt={restaurant.category}
								className="category-icon"
							/>
						</div>
						<div className="restaurant__info">
							<h3 className="restaurant__name text-subtitle">
								{restaurant.name}
							</h3>
							<p className="restaurant__description text-body">
								{restaurant.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
