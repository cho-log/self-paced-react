import styles from "./RestaurantElement.module.css"

export default function RestaurantElement({key, restaurantInfo}) {
  return(
    <li className={styles.restaurant} key = {key}>
      <div className={styles.restaurantCategory}>
        <img src={restaurantInfo.imgSrc} alt={restaurantInfo.category} className={styles.categoryIcon} />
      </div>
      <div className={styles.restaurantInfo}>
        <h3 className={`${styles.restaurantName} text-subtitle`}>{restaurantInfo.name}</h3>
        <p className={`${styles.restaurantDescription} text-body`}>{restaurantInfo.description}</p>
      </div>
    </li>
  );
}
