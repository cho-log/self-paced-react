import styles from './RestaurantItem.module.css';

export default function RestaurantItem({ restaurantInfo, updateClickedRestaurantID }) {
  return (
    <li className={styles.restaurant}>
      <button
        className={styles.restaurantButton}
        type="button"
        onClick={() => { updateClickedRestaurantID(restaurantInfo.id); }}
      >
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
      </button>
    </li>
  );
}
