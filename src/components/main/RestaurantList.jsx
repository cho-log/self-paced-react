import styles from './css/RestaurantList.module.css';
import restaurants from '../../data/restaurants';

function RestaurantList() {
  return (
    <section className={styles['restaurant-list-container']}>
      <ul className={styles['restaurant-list']}>
        {restaurants.map((restaurant) => (
          <li className={styles.restaurant} key={restaurant.name}>
            <div className={styles.restaurant__category}>
              <img
                src={restaurant.image}
                alt={restaurant.category}
                className={styles['category-icon']}
              />
            </div>
            <div className={styles.restaurant__info}>
              <h3 className={`${styles.restaurant__name} text-subtitle`}>{restaurant.name}</h3>
              <p className={`${styles.restaurant__description} text-body`}>
                {restaurant.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RestaurantList;
