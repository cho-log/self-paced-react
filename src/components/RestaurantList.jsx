import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ restaurants }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </section>
  );
}

//  <section class="restaurant-list-container">
//       <ul class="restaurant-list">

//         레스토랑아이템들
//       </ul>
//   </section>
