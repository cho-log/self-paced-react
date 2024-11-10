import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal.jsx";
import restaurantsData from "./data/restaurantsData.js";

function App() {
  const [category, setCategory] = useState("전체");
  const [restaurants, setRestaurants] = useState(restaurantsData);

  const filterRestaurants = (category) => {
    if (category === "전체") return restaurants;
    else return restaurants.filter((restaurant) => restaurant.category === category);
  };

  const filteredRestaurants = filterRestaurants(category);

  const [modal, setModal] = useState({
    isOpen: false,
    restaurant: {
      name: "",
      description: "",
    },
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
  };

  return (
    <>
      <Header setIsAddModalOpen={setIsAddModalOpen} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} setModal={setModal} modal={modal} />
      </main>
      <aside>
        {modal.isOpen && <RestaurantDetailModal setModal={setModal} modal={modal} />}
        {isAddModalOpen && (
          <AddRestaurantModal
            setIsAddModalOpen={setIsAddModalOpen}
            handleAddRestaurant={handleAddRestaurant}
          />
        )}
      </aside>
    </>
  );
}

export default App;
