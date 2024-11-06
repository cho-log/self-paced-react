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

  const filterRestaurants = (category) => {
    if (category === "전체") return restaurantsData;
    else return restaurantsData.filter((restaurant) => restaurant.category === category);
  };

  const filteredRestaurants = filterRestaurants(category);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState("");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <Header setIsAddModalOpen={setIsAddModalOpen} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          SetIsModalOpen={setIsModalOpen}
          setRestaurantName={setRestaurantName}
          setRestaurantInfo={setRestaurantInfo}
        />
      </main>
      <aside>
        {isModalOpen && (
          <RestaurantDetailModal
            SetIsModalOpen={setIsModalOpen}
            restaurantName={restaurantName}
            restaurantInfo={restaurantInfo}
          />
        )}
        {isAddModalOpen && <AddRestaurantModal setIsAddModalOpen={setIsAddModalOpen} />}
      </aside>
    </>
  );
}

export default App;
