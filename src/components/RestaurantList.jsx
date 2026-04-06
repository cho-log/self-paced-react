import RestaurantItem from "./RestaurantItem";

export default function RestaurantList() {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </ul>
    </section>
  );
}

//  <section class="restaurant-list-container">
//       <ul class="restaurant-list">

//         레스토랑아이템들
//       </ul>
//   </section>
