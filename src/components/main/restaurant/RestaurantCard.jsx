import styles from '../../../css/Restaurant.module.css';
const RestaurantCard = ({
  category_image,
  image_alt,
  restaurant_name,
  restaurant_description,
}) => {
  return (
    <li className={styles.restaurant}>
      <div className={styles.restaurant__category}>
        <img
          src={category_image}
          alt={image_alt}
          className={styles.categoryIcon}
        />
      </div>
      <div className={styles.restaurant__info}>
        <h3 className={`${styles.restaurant__name} text-subtitle`}>
          {restaurant_name}
        </h3>
        <p className={`${styles.restaurant__description}  text-body`}>
          {restaurant_description}
        </p>
      </div>
    </li>
  );
};
export default RestaurantCard;
