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
  const {
    isOpen: isDetailModalOpen,
    open: openDetailModal,
    close: closeModalDetail,
  } = useModal(false);
  const {
    isOpen: isAddModalOpen,
    open: openAddModal,
    close: closeAddModal,
  } = useModal(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const filteredRestaurants = getFilteredRestaurant(selectedCategory);

  return (
    <>
      <Header openModal={openAddModal} />
      <main>
        <RestaurantCategoryFilter
          category={selectedCategory}
          onChangeCategory={setCategory}
        />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          setSelectedRestaurant={setSelectedRestaurant}
          openModal={openDetailModal}
        />
      </main>
      <aside>
        {isDetailModalOpen && (
          <RestaurantDetailModal
            closeModal={closeModalDetail}
            restaurantInfo={selectedRestaurant}
          />
        )}
        {isAddModalOpen && <AddRestaurantModal closeModal={closeAddModal} />}
      </aside>
    </>
  );
}

export default App;
