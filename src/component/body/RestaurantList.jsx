import styles from '../../css/Body.module.css';
import insertImgSrc from '../utils/insertImgSrc';

const RestaurantList = ({ restaurants, setIsModalOpen, setSelectedRestaurant }) => {
  const handleRestaurantCilck = (restaurant) => {
    setIsModalOpen(true);
    setSelectedRestaurant(restaurant)
  };

  return (
    <section className={styles['restaurant-list-container']}>
      <ul className={styles['restaurant-list']}>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className={styles.restaurant} onClick={() => handleRestaurantCilck(restaurant.id)}>
            <div className={styles.restaurant__category}>
              <img
                src={insertImgSrc[restaurant.category]}
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
