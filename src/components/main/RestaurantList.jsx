import RestaurantValue from "./RestaurantValue";
import styles from "/src/styles/RestaurantList.module.css"

  const filteredRestaurants = selectedCategory === '전체' ? restaurants : restaurants.filter(restaurant => restaurant.alt === selectedCategory);
export default function RestaurantList({ restaurants, selectedCategory, setIsModalOpen, setRestaurantValue }) {

  return (
    <section className={`${styles["restaurant-list-container"]}`}>
      <ul className={`${styles["restaurant-list"]}`}>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantValue
            key={restaurant.id}
            categoryIcon={restaurant.icon}
            categoryAlt={restaurant.alt}
            name={restaurant.name}
            description={restaurant.description}
            setIsModalOpen={setIsModalOpen}
            setRestaurantValue={setRestaurantValue}
          />
        ))}
      </ul>
    </section>
  );
}