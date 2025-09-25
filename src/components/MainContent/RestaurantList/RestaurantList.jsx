import RestaurantElement from './RestaurantElement/RestaurantElement.jsx';
import styles from './RestaurantList.module.css'

export default function RestaurantList({restaurants}) {
  const RestaurantElements = restaurants.map(restaurant =>(
    <RestaurantElement key = {restaurant.id} restaurantInfo={restaurant}/>
  ));
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        {RestaurantElements}
      </ul>
    </section>
  );
}