import styles from "../css/AboutRestaurants.module.css";
import Restaurant from "./Restaurant.jsx";


const RestaurantList = ({restaurants,setIsModalOpen,setRestaurantInfo}) => {
    return (
        <section className={styles[`restaurant-list-container`]}>
           <ul className={styles[`restaurants-list`]}>
               {restaurants.map((restaurant, index) => (
                   <Restaurant
                     key={index}
                     image={restaurant.image}
                     title={restaurant.title}
                     description={restaurant.description}
                     setIsModalOpen={setIsModalOpen}
                     setRestaurantInfo={setRestaurantInfo}
                   />
               ))}
           </ul>

        </section>
    );
};

export default RestaurantList;