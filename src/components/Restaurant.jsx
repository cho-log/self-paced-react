import styles from "../css/AboutRestaurants.module.css";

const Restaurant = ({image, title, description,setIsModalOpen,setRestaurantInfo}) => {
    return (
        <li className={styles.restaurant}
            onClick={() => {
                setIsModalOpen(true);
                setRestaurantInfo({
                    title: title,
                    description: description,
                })
            }}>
            <div className={styles.restaurant__category}>
                <img src={image.src} alt={image.alt} className={styles.categoryIcon}/>
            </div>
            <div className={styles.restaurant__info}>
                <h3 className={`${styles.restaurant__name} textSubtitle`}>{title}</h3>
                <p className={`restaurantInfo__description text-body`}>
                    {description}
                </p>
            </div>
        </li>
    );
};

export default Restaurant;
