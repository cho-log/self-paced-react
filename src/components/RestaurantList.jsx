import '../css/RestaurantList.css';

import { CATEGORIES } from '../constants/categories';

const IMAGE_DIRECTORY = '/images';

function Restaurant({ restaurant, onSelectRestaurant }) {
  return (
    <li className="restaurant">
      <button type="button" className="restaurant__button" onClick={() => onSelectRestaurant(restaurant)}>
        <div className="restaurant__category">
          <img
            src={`${IMAGE_DIRECTORY}/category-${CATEGORIES[restaurant.category]}.png`}
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
