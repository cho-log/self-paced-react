import { useState } from "react";
import "./App.css";
import Gnb from "./components/headers/Gnb.jsx";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter.jsx";
import RestaurantList from "./components/mains/RestaurantList.jsx";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal.jsx";
import AddRestaurantModal from "./components/asides/AddRestaurantModal.jsx";
import restaurants from "./data/restaurants.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredRestaurants =
    selectedCategory === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === selectedCategory);

  return (
    <>
      <Gnb />
      <RestaurantCategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <RestaurantList restaurants={filteredRestaurants} />
      <RestaurantInfoModal />
      <AddRestaurantModal />
    </>
  );
}

export default App;
