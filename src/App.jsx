import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import RestaurantCategoryFilter from "./components/restaurant/RestaurantCategoryFilter/RestaurantCategoryFilter";
import RestaurantList from "./components/restaurant/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/modal/RestaurantDetailModal";
import AddRestaurantModal from "./components/modal/AddRestaurantModal";
import getFilteredRestaurant from "./utils/getFilteredRestaurant";
import useModal from "./hooks/useModal";

function App() {
  const [selectedCategory, setCategory] = useState("전체");
  const restaurantDetailModalState = useModal(false);
  const addRestaurantModalState = useModal(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const filteredRestaurants = getFilteredRestaurant(selectedCategory);

  return (
    <>
      <Header openModal={addRestaurantModalState.open} />
      <main>
        <RestaurantCategoryFilter
          category={selectedCategory}
          onChangeCategory={setCategory}
        />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          setSelectedRestaurant={setSelectedRestaurant}
          openModal={restaurantDetailModalState.open}
        />
      </main>
      <aside>
        {restaurantDetailModalState.modalState && (
          <RestaurantDetailModal
            closeModal={restaurantDetailModalState.close}
            restaurantInfo={selectedRestaurant}
          />
        )}
        {addRestaurantModalState.modalState && (
          <AddRestaurantModal closeModal={addRestaurantModalState.close} />
        )}
      </aside>
    </>
  );
}

export default App;
