import styles from "./RestaurantList.module.css";
import RestaurantListItem from "./RestaurantListItem";
import getCategoryIcon from "../../../utils/getCategoryIcon";

export default function RestaurantList({ filteredRestaurants, toggleModal }) {
  return (
    <section className={`${styles["restaurant-list-container"]}`}>
      <ul className={`${styles["restaurant-list"]}`}>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            icon={getCategoryIcon(restaurant.category)}
            onClick={() => toggleModal("isRestaurantDetailModalOpen", true)}
          />
        ))}
      </ul>
    </section>
  );
}
