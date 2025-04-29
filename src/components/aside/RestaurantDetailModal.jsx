import styles from "/src/styles/Aside.module.css"

export default function RestaurantDetailModal({setModalState, restaurantValue}) {
    const handleClick = (e) => {
        setModalState(false);
    }

    return (
        <div className={`${styles["modal"]} ${styles["modal--open"]}`}>
            <div className={styles["modal-backdrop"]} onClick={handleClick}></div>
            <div className={styles["modal-container"]}>
                <h2 className={`${styles["modal-title"]} text-title`}>{restaurantValue.name}</h2>
                <div className={styles["restaurant-info"]}>
                    <p className={`${styles["restaurant-info__description"]} text-body`}>{restaurantValue.description}</p>
                </div>

                <div className={styles["button-container"]}>
                    <button className={`${styles.button} ${styles["button--primary"]} text-caption`} onClick={handleClick}>닫기</button>
                </div>
            </div>
        </div >
    );
}