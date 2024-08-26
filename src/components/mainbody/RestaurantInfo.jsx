import styles from "../../css/Restaurant.module.css"; // CSS 모듈을 불러옵니다

const RestaurantInfo = ({ restaurant,key }) => {
    return (
        <li className={styles.restaurant} key={key}>
            <div className={styles.restaurantCategory}>
                <img
                    src={restaurant.icon}
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
