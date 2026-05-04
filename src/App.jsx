import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";

// 5단계 미션 때문에 상수파일 의존성 삭제.
// import { restaurants as initialRestaurants } from "./constants/restaurants";

import { useState } from "react";
const BASE_URL = "http://localhost:3000/restaurants";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [category, setCategory] = useState("전체");
  const [isDetailModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("음식점 데이터를 불러오는 중 오류가 발생했습니다.", error);
    }
  };

  const addRestaurant = (restaurant) => {
    setRestaurants((prev) => [...prev, restaurant]);
  };

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
            onAddRestaurant={addRestaurant}
            onClose={() => setIsAddModalOpen(false)}
          />
        ) : null}
      </aside>
    </>
  );
}

export default App;
