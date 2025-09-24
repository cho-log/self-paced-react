import {
  KoreanRestaurant,
  ChineseRestaurant,
  JapaneseRestaurant,
  WesternRestaurant,
  AsianRestaurant,
  OtherRestaurant
} from "./RestaurantElement/RestaurantElement.jsx";

import styles from "./RestaurantList.module.css"

export default function RestaurantList() {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        <KoreanRestaurant />
        <ChineseRestaurant />
        <JapaneseRestaurant />
        <WesternRestaurant />
        <AsianRestaurant />
        <OtherRestaurant />
      </ul>
    </section>
  );
}