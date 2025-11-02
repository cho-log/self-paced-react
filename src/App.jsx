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
  const restaurantDetailModal = useModal(false);
  const addRestaurantModal = useModal(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const filteredRestaurants = getFilteredRestaurant(selectedCategory);

  return (
    <>
      <Header openModal={addRestaurantModal.open} />
      <main>
        <RestaurantCategoryFilter
          category={selectedCategory}
          onChangeCategory={setCategory}
        />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          setSelectedRestaurant={setSelectedRestaurant}
          openModal={restaurantDetailModal.open}
        />
      </main>
      <aside>
        {restaurantDetailModal.modalState && (
          <RestaurantDetailModal
            closeModal={restaurantDetailModal.close}
            restaurantInfo={selectedRestaurant}
          />
        )}
        {addRestaurantModal.modalState && (
          <AddRestaurantModal closeModal={addRestaurantModal.close} />
        )}
      </aside>
    </>
  );
}

export default App;
