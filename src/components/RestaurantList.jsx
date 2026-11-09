import '../css/RestaurantList.css';

const IMAGE_DIRECTORY = '/images';

const CATEGORY_NAME = {
  한식: 'korean',
  중식: 'chinese',
  일식: 'japanese',
  양식: 'western',
  아시안: 'asian',
  기타: 'etc',
};

function Restaurant({ restaurant, onSelectRestaurant }) {
  return (
    <li className="restaurant">
      <button type="button" className="restaurant__button" onClick={() => onSelectRestaurant(restaurant)}>
        <div className="restaurant__category">
          <img
            src={`${IMAGE_DIRECTORY}/category-${CATEGORY_NAME[restaurant.category]}.png`}
            alt={restaurant.category}
            className="category-icon"
          />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
          <p className="restaurant__description text-body">{restaurant.description}</p>
        </div>
      </button>
    </li>
  );
}

export default function RestaurantList({ restaurants, onSelectRestaurant }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} onSelectRestaurant={onSelectRestaurant} />
        ))}
      </ul>
    </section>
  );
}
