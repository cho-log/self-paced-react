import styles from "../css/AboutRestaurants.module.css";

const Restaurant = ({image,title,description}) => {
    return (
        <li className={styles.restaurant}>
            <div className={styles.restaurant__category}>
                <img src={image.src} alt={image.alt} className={styles.categoryIcon}/>
            </div>
            <div className={styles.restaurant__info}>
                <h3 className={`${styles.restaurant__name} textSubtitle`}>{title}</h3>
                <p className={`${styles.restaurant__description} textBody`}>
                    {description}
                </p>
            </div>
        </li>
    );
};

export default Restaurant;
