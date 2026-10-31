import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";
import restaurants from "./data/restaurants";

function App() {
  const [category, setCategory] = useState("전체");
  // 선택된 음식점 (null이면 상세 모달이 닫힌 상태)
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onSelectRestaurant={setSelectedRestaurant}
        />
      </main>
      <aside>
        {selectedRestaurant && (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onClose={() => setSelectedRestaurant(null)}
          />
        )}
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
