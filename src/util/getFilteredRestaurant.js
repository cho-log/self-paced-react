import restaurants from "../data/restaurant";

export default function getFilteredRestaurant(category) {
  return restaurants.filter((restaurant) => {
    if (category === "전체") return true;
    return restaurant.category === category;
  });
}
