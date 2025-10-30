import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import RestaurantCategoryFilter from "./components/restaurant/RestaurantCategoryFilter/RestaurantCategoryFilter";
import RestaurantList from "./components/restaurant/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/modal/RestaurantDetailModal";
import AddRestaurantModal from "./components/modal/AddRestaurantModal";
import getFilteredRestaurant from "./utils/getFilteredRestaurant";

function App() {
  const [selectedCategory, setCategory] = useState("전체");
  const [modalState, setModalState] = useState({
    isRestaurantDetailModalOpen: false,
    isAddRestaurantModalOpen: false,
  });
  const filteredRestaurants = getFilteredRestaurant(selectedCategory);

  const toggleModal = (modalName, isOpen) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: isOpen,
    }));
  };

  return (
    <>
      <Header toggleModal={toggleModal} />
      <main>
        <RestaurantCategoryFilter
          category={selectedCategory}
          onChangeCategory={setCategory}
        />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          toggleModal={toggleModal}
        />
      </main>
      <aside>
        {modalState.isRestaurantDetailModalOpen && (
          <RestaurantDetailModal toggleModal={toggleModal} />
        )}
        {modalState.isAddRestaurantModalOpen && (
          <AddRestaurantModal toggleModal={toggleModal} />
        )}
        {/* {isRestaurantDetailModalOpen && (
          <RestaurantDetailModal
            setIsRestaurantDetailModalOpen={setIsRestaurantDetailModalOpen}
          />
        )}
        {isAddRestaurantModalOpen && (
          <AddRestaurantModal
            setIsAddRestaurantModalOpen={setIsAddRestaurantModalOpen}
          />
        )} */}
      </aside>
    </>
  );
}

export default App;
