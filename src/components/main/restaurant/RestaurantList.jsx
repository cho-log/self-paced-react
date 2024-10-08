import { RESTAURANTS } from '../../constants/Restaurants';
import styles from '../../../css/Restaurant.module.css';
import RestaurantCard from './RestaurantCard';
const RestaurantList = () => {
  return (
    <section className={`${styles.restaurantListContainer}`}>
      <ul className={`${styles.restaurantList}`}>
        {RESTAURANTS.map((item) => {
          return (
            <RestaurantCard
              key={item.id}
              category_image={item.categoryIcon}
              image_alt={item.category}
              restaurant_name={item.name}
              restaurant_description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default RestaurantList;
