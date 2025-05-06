import { useState } from "react";
import "./App.css";
import Gnb from "./components/headers/Gnb.jsx";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter.jsx";
import RestaurantList from "./components/mains/RestaurantList.jsx";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal.jsx";
import AddRestaurantModal from "./components/asides/AddRestaurantModal.jsx";
import restaurants from "./data/restaurants.js";
import categoryIcons from "./data/categoryIcons.js";
import categoryOptions from "./data/categoryOptions.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants =
    selectedCategory === "전체"
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  return (
    <>
      <Gnb />
      <main>
        <RestaurantCategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          restaurants={restaurants}
        />
        <RestaurantList
          restaurants={filteredRestaurants}
          categoryIcons={categoryIcons}
          onRestaurantClick={(restaurant) => {
            setSelectedRestaurant(restaurant);
            setIsInfoModalOpen(true);
          }}
        />
      </main>
      <aside>
        <RestaurantInfoModal
          isOpen={isInfoModalOpen}
          onClose={() => {
            setIsInfoModalOpen(false);
            setSelectedRestaurant(null);
          }}
          restaurant={selectedRestaurant}
        />
        <AddRestaurantModal categoryOptions={categoryOptions} />
      </aside>
    </>
  );
}

export default App;
