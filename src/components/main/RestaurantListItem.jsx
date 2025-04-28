import styles from './css/RestaurantList.module.css';

const RestaurantListItem = ({
  restaurant,
  onRestaurantClick,
  onChangeSelectedRestaurant,
}) => {
  const handleRestaurantClick = () => {
    onRestaurantClick(true);
    onChangeSelectedRestaurant(restaurant);
  };
  return (
    <li className={styles.restaurant} onClick={handleRestaurantClick}>
      <div className={styles.restaurant__category}>
        <img
          src={restaurant.image}
          alt={restaurant.category}
          className={styles['category-icon']}
        />
      </div>
      <div className={styles.restaurant__info}>
        <h3 className={`${styles.restaurant__name} text-subtitle`}>
          {restaurant.name}
        </h3>
        <p className={`${styles.restaurant__description} text-body`}>
          {restaurant.description}
        </p>
      </div>
    </li>
  );
};

export default RestaurantListItem;
