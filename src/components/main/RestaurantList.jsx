import styles from './css/RestaurantList.module.css';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({ restaurants }) => {
  return (
    <section className={styles['restaurant-list-container']}>
      <ul className={styles['restaurant-list']}>
        {restaurants.map((restaurant) => (
          <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
