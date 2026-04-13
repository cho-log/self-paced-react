import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ restaurants, onRestaurantClick }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => onRestaurantClick(restaurant)}
          />
        ))}
      </ul>
    </section>
  );
}
