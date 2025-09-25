import RestaurantElement from './RestaurantElement/RestaurantElement.jsx';
import styles from './RestaurantList.module.css'

export default function RestaurantList({restaurantInfoList}) {
  const RestaurantElements = restaurantInfoList.map(restaurantInfo =>(
    <RestaurantElement key = {restaurantInfo.id} restaurantInfo={restaurantInfo}/>
  ));
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        {RestaurantElements}
      </ul>
    </section>
  );
}