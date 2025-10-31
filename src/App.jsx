import { useState } from "react";
import { restaurants } from "./data/restaurants.js";

import "./styles/global.css";
import "./styles/layout.css";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
// import AddRestaurantModal from "./components/AddRestaurantModal";

function App() {
  const [category, setCategory] = useState("전체");

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSelectRestaurant = (restaurant) => {
    setSelected(restaurant);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelected(null);
  };

  return (
    <>
      <Header />
      <main>
        <section className="restaurant-filter-container">
          <CategoryFilter
            id="main-category-filter"
            label="음식점 카테고리 필터"
            category={category}
            onChangeCategory={setCategory}
          />
        </section>
        <section className="restaurant-list-container">
          <RestaurantList
            restaurants={filteredRestaurants}
            onSelect={handleSelectRestaurant}
          />
        </section>
      </main>
      <aside>
        {isModalOpen && (
          <RestaurantDetailModal
            restaurant={selected}
            onClose={handleCloseModal}
          />
        )}
        {/* <AddRestaurantModal /> */}
      </aside>
    </>
  );
}

export default App;
