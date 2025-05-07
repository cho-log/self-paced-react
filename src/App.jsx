import { useState } from "react";
import "./App.css";
import Gnb from "./components/headers/Gnb.jsx";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter.jsx";
import RestaurantList from "./components/mains/RestaurantList.jsx";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal.jsx";
import AddRestaurantModal from "./components/asides/AddRestaurantModal.jsx";
import initialRestaurants from "./data/restaurants.js";
import categoryIcons from "./data/categoryIcons.js";
import categoryOptions from "./data/categoryOptions.js";
import ModalTypes from "./constants/modalTypes.js";

function App() {
  const [openModal, setOpenModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  const filteredRestaurants =
    selectedCategory === "전체"
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  const handleAddRestaurant = (newRestaurant) => {
    const restaurantWithId = {
      id: Date.now(),
      ...newRestaurant,
    };
    setRestaurants((prev) => [...prev, restaurantWithId]);
  };

  return (
    <>
      <Gnb
        onAddInfoClick={() => {
          setOpenModal(ModalTypes.ADD);
        }}
      />
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
            setOpenModal(ModalTypes.INFO);
          }}
        />
      </main>
      <aside>
        <RestaurantInfoModal
          isOpen={openModal === ModalTypes.INFO}
          onClose={() => {
            setOpenModal(null);
            setSelectedRestaurant(null);
          }}
          restaurant={selectedRestaurant}
        />

        <AddRestaurantModal
          isOpen={openModal === ModalTypes.ADD}
          onClose={() => setOpenModal(null)}
          categoryOptions={categoryOptions}
          onAddRestaurant={handleAddRestaurant}
        />
      </aside>
    </>
  );
}

export default App;
