import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import AddRestaurantModal from "./components/AddRestaurantModal";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import restaurantsData from "./data/restaurantsData";

function App() {
  const [category, setCategory] = useState("전체");
  const [filteredRestaurants, SetFilteredRestaurants] = useState([]);

  useEffect(() => {
    if (category === "전체") SetFilteredRestaurants(restaurantsData);
    else
      SetFilteredRestaurants(
        restaurantsData.filter((restaurant) => restaurant.category === category)
      );
  }, [category]);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
