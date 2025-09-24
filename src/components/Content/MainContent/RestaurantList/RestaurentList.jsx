import {
  KoreanRestaurant,
  ChineseRestaurant,
  JapaneseRestaurant,
  WesternRestaurant,
  AsianRestaurant,
  OtherRestaurant
} from "./RestaurantElement/RestaurantElemet.jsx";

export default function RestaurantList() {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
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