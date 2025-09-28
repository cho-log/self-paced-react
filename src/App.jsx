import { useState } from "react";
import { restaurants } from "./data/restaurants.js";

import "./styles/global.css";
import "./styles/layout.css";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";

function App() {
  const [category, setCategory] = useState("전체");
  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);
  return (
    <>
      <Header />
      <main>
        <section className="restaurant-filter-container">
          <CategoryFilter category={category} onChangeCategory={setCategory} />
        </section>
        <section className="restaurant-list-container">
          <RestaurantList restaurants={filteredRestaurants} />
        </section>
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
