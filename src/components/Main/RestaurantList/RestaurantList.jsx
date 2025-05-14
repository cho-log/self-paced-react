import { CATEGORY_ICONS } from "../../Constants/icons";
import styles from "../../../css/Restaurant.module.css";
import RestaurantComponent from "./RestaurantComponent";


function RestaurantList({
  filteredRestaurants,
  selectClickedRestaurant,
  setIsDetailModalOpen,
}) {
  return (
    <ul className={styles.restaurantList}>

      {filteredRestaurants?.map(({ id, category, name, description }) => (
        <RestaurantComponent
          id={id}
          key={name}
          category={category}
          categoryIcon={CATEGORY_ICONS[category]}
          name={name}
          description={description}
          setIsDetailModalOpen={setIsDetailModalOpen}
          selectClickedRestaurant={selectClickedRestaurant}
        />
      ))}

    </ul>
  );
}

export default RestaurantList;
