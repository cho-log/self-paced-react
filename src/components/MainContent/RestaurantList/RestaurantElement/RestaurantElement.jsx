import styles from './RestaurantElement.module.css';

export default function RestaurantElement({ restaurantInfo, updateClickedRestaurantID }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          updateClickedRestaurantID(restaurantInfo.id);
        }
      }}
      onClick={() => { updateClickedRestaurantID(restaurantInfo.id); }}
    >
      <li className={styles.restaurant}>
        <div className={styles.restaurantCategory}>
          <img
            src={restaurantInfo.imgSrc}
            alt={restaurantInfo.category}
            className={styles.categoryIcon}
          />
        </div>
        <div className={styles.restaurantInfo}>
          <h3 className={`${styles.restaurantName} text-subtitle`}>{restaurantInfo.name}</h3>
          <p className={`${styles.restaurantDescription} text-body`}>{restaurantInfo.description}</p>
        </div>
      </li>
    </div>
  );
}
