import styles from "/src/styles/Main.module.css"

export default function RestaurantValue({ categoryIcon, categoryAlt, name, description }) {
    return (
        <li className={styles["restaurant"]}>
            <div className={styles["restaurant__category"]}>
                <img src={categoryIcon} alt={categoryAlt} className={styles["category-icon"]} />
            </div>
            <div className={styles["restaurant__info"]}>
                <h3 className={`${styles["restaurant__name"]} text-subtitle`}>{name}</h3>
                <p className={`${styles["restaurant__description"]} text-body`}>{description}</p>
            </div>
        </li>
    );
}