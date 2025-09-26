import styles from "./RestaurantList.module.css";
import RestaurantListItem from "./RestaurantListItem";
import getCategoryIcon from "../../../util/getCategoryIcon";

export default function RestaurantList({ filteredRestaurants }) {
  return (
    <section className={`${styles["restaurant-list-container"]}`}>
      <ul className={`${styles["restaurant-list"]}`}>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            icon={getCategoryIcon(restaurant.category)}
          />
        ))}
      </ul>
    </section>
  );
}
