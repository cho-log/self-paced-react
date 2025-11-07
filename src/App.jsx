import { useEffect, useState } from "react";

import "./styles/global.css";
import "./styles/layout.css";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";

const API_URL = "http://localhost:3000/restaurants";

function App() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [category, setCategory] = useState("전체");

  const filteredRestaurants =
    category === "전체"
      ? restaurantList
      : restaurantList.filter((restaurant) => restaurant.category === category);

  const [selected, setSelected] = useState(null);
  const handleSelectRestaurant = (restaurant) => setSelected(restaurant);
  const handleCloseModal = () => setSelected(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const fetchRestaurants = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRestaurantList(data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleAddRestaurant = async ({ name, description, category }) => {
    const newRestaurant = {
      id: `a${Date.now()}`,
      name,
      description,
      category,
    };

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });

    setIsAddModalOpen(false);
    await fetchRestaurants();
  };

  return (
    <>
      <Header onOpenAddModal={handleOpenAddModal} />
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
        {selected && (
          <RestaurantDetailModal
            restaurant={selected}
            onClose={handleCloseModal}
          />
        )}
        {isAddModalOpen && (
          <AddRestaurantModal
            onAdd={handleAddRestaurant}
            onClose={handleCloseAddModal}
          />
        )}
      </aside>
    </>
  );
}

export default App;
