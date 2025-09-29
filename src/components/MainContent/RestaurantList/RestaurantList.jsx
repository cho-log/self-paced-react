import RestaurantElement from './RestaurantElement/RestaurantElement.jsx';
import styles from './RestaurantList.module.css'

export default function RestaurantList({restaurantInfoList}) {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        {restaurantInfoList.map((restaurantInfo)=>(
          <RestaurantElement key = {restaurantInfo.id} restaurantInfo={restaurantInfo}/>
        ))}
      </ul>
    </section>
  );
}