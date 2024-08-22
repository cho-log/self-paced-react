import styles from "../css/AboutRestaurants.module.css";
import categoryKorean from "../../templates/category-korean.png";
import categoryAsian from "../../templates/category-asian.png";
import categoryEtc from "../../templates/category-etc.png";
import categoryJapanese from "../../templates/category-japanese.png";
import categoryWestern from "../../templates/category-western.png";
import categoryChinese from "../../templates/category-chinese.png";
import Restaurant from "./Restaurant.jsx";


const RestaurantList = ({restaurants}) => {
    return (
        <section className={styles[`restaurant-list-container`]}>
           <ul className={styles[`restaurants-list`]}>
               {restaurants.map((restaurant, index) => (
                   <Restaurant
                     key={index}
                     image={restaurant.image}
                     title={restaurant.title}
                     description={restaurant.description}
                   />
               ))}
           </ul>

        </section>
    );
};

export default RestaurantList;