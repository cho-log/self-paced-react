import GlobalNavigationBar from "./GlobalNavigationBar/GlobalNavigationBar.jsx";
import CategoryFilter from "./CategoryFilter/CategoryFilter.jsx";
import RestaurantList from "./RestaurantList/RestaurantList.jsx";
import { useState } from 'react';
import restaurants from '../../Data/restaurantData.js';


export default function MainContent() {
  const [category, setCategory] = useState('전체');
  const filteredRestaurants = [];

  restaurants.forEach((restaurant) => {
    if(category === "전체" || restaurant.category === category)
      filteredRestaurants.push(restaurant);
  });
  
  return (
    <main>
      <GlobalNavigationBar />
      <CategoryFilter category={category} onChangeCategory={setCategory} />
      <RestaurantList restaurants={filteredRestaurants} />
    </main>
  );
}