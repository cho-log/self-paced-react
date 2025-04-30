import { useState } from "react";
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import restaurants from "../../Data/Data.jsx";
import RestaurantDetailModal from "../Sidebar/RestaurantDetailModal.jsx";

function MainContent() {
  const [category, setCategory] = useState("전체");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  const [clickedRestaurantInfo, setClickedRestaurantInfo] = useState(null);

  const handleClickedRestaurant = (name, description) => {
    const restaurant = {
      name,
      description,
    };
    setClickedRestaurantInfo(restaurant);
  };

  return (
    <>
      <CategoryFilter
        category={category}
        onChangeCategory={handleCategoryChange}
      />
      <RestaurantList
        restaurants={filteredRestaurants}
        onClickedRestaurant={handleClickedRestaurant}
      />
      {clickedRestaurantInfo != null && (
        <RestaurantDetailModal
          restaurantName={clickedRestaurantInfo.name}
          restaurantDescription={clickedRestaurantInfo.description}
        />
      )}
    </>
  );
}

export default MainContent;
