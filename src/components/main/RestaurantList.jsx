import styles from "/src/styles/Main.module.css"
import RestaurantValue from "./RestaurantValue";

export default function RestaurantList({ restaurants, selectedCategory }) {
  const filteredRestaurants = selectedCategory === '전체' ? restaurants : restaurants.filter(restaurant => restaurant.alt === selectedCategory);

  return (
    <>
      <section className={styles["restaurant-list-container"]}>
        <ul className={styles["restaurant-list"]}>
          {filteredRestaurants.map((restaurant, index) => (
            <RestaurantValue
              key={index}
              categoryIcon={restaurant.icon}
              categoryAlt={restaurant.alt}
              name={restaurant.name}
              description={restaurant.description}
            />
          ))}
        </ul>
      </section>
    </>
  );
}