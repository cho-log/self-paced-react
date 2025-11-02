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
  const RestaurantDetailModalState = useModal(false);
  const AddRestaurantModalState = useModal(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const filteredRestaurants = getFilteredRestaurant(selectedCategory);

  return (
    <>
      <Header openModal={AddRestaurantModalState.open} />
      <main>
        <RestaurantCategoryFilter
          category={selectedCategory}
          onChangeCategory={setCategory}
        />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          setSelectedRestaurant={setSelectedRestaurant}
          openModal={RestaurantDetailModalState.open}
        />
      </main>
      <aside>
        {RestaurantDetailModalState.modalState && (
          <RestaurantDetailModal
            closeModal={RestaurantDetailModalState.close}
            restaurantInfo={selectedRestaurant}
          />
        )}
        {AddRestaurantModalState.modalState && (
          <AddRestaurantModal closeModal={AddRestaurantModalState.close} />
        )}
      </aside>
    </>
  );
}

export default App;
