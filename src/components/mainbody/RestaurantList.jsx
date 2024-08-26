import styles from "../../css/Restaurant.module.css";
import RestaurantInfo from "./RestaurantInfo.jsx";
import { restaurants } from "../../datas/restaurantData.js";

const RestaurantList = () => {
    return (
        <section className={styles.restaurantListContainer}>
            <ul>
                {restaurants.map((restaurant,index) => (
                    <RestaurantInfo key={index} restaurant={restaurant} />
                ))}
            </ul>
        </section>
    );
};

export default RestaurantList;
