import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import AddRestaurantModal from "./components/AddRestaurantModal";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import restaurantsData from "./data/restaurantsData";

function App() {
  const [category, setCategory] = useState("전체");

  const filterRestaurants = (category) => {
    console.log("카테고리:", category);
    console.log("음식점 리스트:", restaurantsData);

    console.log(filteredRestaurants);
    if (category === "전체") return restaurantsData;
    else return restaurantsData.filter((restaurant) => restaurant.category === category);
  };

  const filteredRestaurants = filterRestaurants(category);
  console.log(filteredRestaurants);

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
