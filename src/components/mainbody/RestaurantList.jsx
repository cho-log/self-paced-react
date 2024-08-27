import styles from "../../css/Restaurant.module.css";
import RestaurantInfo from "./RestaurantInfo.jsx";

const RestaurantList = ({filteredRestaurants,setIsModal}) => {

    return (
        <section className={styles.restaurantListContainer}>
            <ul>
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantInfo key={restaurant.id} restaurant={restaurant} setIsModal={setIsModal} />
                ))}
            </ul>
        </section>
    );
};

export default RestaurantList;
