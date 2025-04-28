import styles from './css/RestaurantList.module.css';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({
  restaurants,
  onRestaurantClick,
  onChangeSelectedRestaurant,
}) => {
  return (
    <section className={styles['restaurant-list-container']}>
      <ul className={styles['restaurant-list']}>
        {restaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            onRestaurantClick={onRestaurantClick}
            onChangeSelectedRestaurant={onChangeSelectedRestaurant}
          />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
