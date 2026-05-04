import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";
import { restaurants } from "./constants/restaurants";

import { useState } from "react";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [category, setCategory] = useState("전체");
  const [isDetailModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurants);

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <Header category={category} onAddClick={() => setIsAddModalOpen(true)} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onRestaurantClick={(restaurant) => {
            setSelectedRestaurant(restaurant);
            setIsModalOpen(true);
          }}
        />
      </main>
      <aside>
        {isDetailModalOpen ? (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onClose={() => setIsModalOpen(false)}
          />
        ) : null}
        {isAddModalOpen ? (
          <AddRestaurantModal
            restaurants={restaurants}
            onClose={() => setIsAddModalOpen(false)}
          />
        ) : null}
      </aside>
    </>
  );
}

export default App;
