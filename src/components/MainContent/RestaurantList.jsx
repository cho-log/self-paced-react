import styles from "./RestaurantList.module.css";
import { selectedCategories } from "../../data/data";

function RestaurantList({ restaurants, onRestaurantClick }) {
  return (
    <section className={styles["restaurant-list-container"]}>
      <ul className={styles["restaurant-list"]}>
        {restaurants.map((restaurant) => {
          const matchCategory = selectedCategories.find(
            (item) => item.category === restaurant.category
          );
          return (
            <li
              key={restaurant.id}
              className={styles.restaurant}
              onClick={() =>
                onRestaurantClick(restaurant.name, restaurant.description)
              }
            >
              <div className={styles.restaurant__category}>
                <img
                  src={matchCategory.imgSrc}
                  alt={matchCategory.imgAlt}
                  className={styles["category-icon"]}
                />
              </div>
              <div className={styles.restaurant__info}>
                <h3 className={styles.restaurant__name}>{restaurant.name}</h3>
                <p className={styles.restaurant__description}>
                  {restaurant.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default RestaurantList;
