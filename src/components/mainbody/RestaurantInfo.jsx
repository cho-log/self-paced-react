import styles from "../../css/Restaurant.module.css";
import CategoryKorean from "../../../templates/category-korean.png";
import CategoryChinese from "../../../templates/category-chinese.png";
import CategoryJapanese from "../../../templates/category-japanese.png";
import CategoryWestern from "../../../templates/category-western.png";
import CategoryAsian from "../../../templates/category-asian.png";
import CategoryETC from "../../../templates/category-etc.png"; // CSS 모듈을 불러옵니다

const RestaurantInfo = ({ restaurant,key,setIsModal }) => {
    const getCategoryIcon = (category) => {
        switch (category) {
            case "한식":
                return CategoryKorean;
            case "중식":
                return CategoryChinese;
            case "일식":
                return CategoryJapanese;
            case "양식":
                return CategoryWestern;
            case "아시안":
                return CategoryAsian;
            case "기타":
                return CategoryETC;
            default:
                return "";
        }
    }
    const icon = getCategoryIcon(restaurant.category);
    return (
        <li
            className={styles.restaurant}
            key={key}
            onClick={() => setIsModal({
                isOpen: true,
                restaurant : {
                    name : restaurant.name,
                    description: restaurant.description,
                }
            })}
        >
            <div className={styles.restaurantCategory}>
                <img
                    src={icon}
                    alt={restaurant.category}
                    className={styles.categoryIcon}
                />
            </div>
            <div className={styles.restaurantInfo}>
                <h3 className={`${styles.restaurantName} textSubtitle`}>
                    {restaurant.name}
                </h3>
                <p className={`${styles.restaurantDescription} textBody`}>
                    {restaurant.description}
                </p>
            </div>
        </li>
    );
};

export default RestaurantInfo;
