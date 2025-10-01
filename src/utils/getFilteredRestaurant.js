import restaurants from "../data/restaurant";

export default function getFilteredRestaurant(category) {
  return restaurants.filter((restaurant) => {
    return category === "전체" || restaurant.category === category;
  });
}
