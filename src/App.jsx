import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import RestaurantCategoryFilter from "./components/Restaurant/RestaurantCategoryFilter/RestaurantCategoryFilter";
import RestaurantList from "./components/Restaurant/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/Modal/RestaurantDetailModal";
import AddRestaurantModal from "./components/Modal/AddRestaurantModal";
import getFilteredRestaurant from "./util/getFilteredRestaurant";

function App() {
  const [category, setCategory] = useState("전체");
  const filteredRestaurants = getFilteredRestaurant(category);

  return (
    <>
      <Header />
      <main>
        <RestaurantCategoryFilter
          category={category}
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
