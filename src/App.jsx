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
  const filteredRestaurants = getFilteredRestaurant(selectedCategory);
  return (
    <>
      <Header />
      <main>
        <RestaurantCategoryFilter
          category={selectedCategory}
          onChangeCategory={setCategory}
        />
        <RestaurantList filteredRestaurants={filteredRestaurants} />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
