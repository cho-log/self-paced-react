import styles from '../../css/Body.module.css';

const RestaurantList = ({ restaurants }) => {
  return (
    <section className={styles['restaurant-list-container']}>
      <ul className={styles['restaurant-list']}>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className={styles.restaurant}>
            <div className={styles.restaurant__category}>
              <img
                src={restaurant.imgSrc}
                alt={restaurant.category}
                className={styles['category-icon']}
              />
            </div>
            <div className={styles.restaurant__info}>
              <h3 className={`$ {styles["restaurant__name"]} text-subtitle`}>
                {restaurant.name}
              </h3>
              <p className={`${styles.restaurant__description} text-body`}>
                {restaurant.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
