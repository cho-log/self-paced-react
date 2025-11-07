import { useState } from "react";

import "./styles/global.css";
import "./styles/layout.css";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";

function App() {
  const [restaurantList, setrestaurantList] = useState([]);
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

  const handleAddRestaurant = ({ name, description, category }) => {
    const newRestaurant = {
      id: String(Date.now()),
      name,
      description,
      category,
    };
    setrestaurantList((prev) => [newRestaurant, ...prev]);
    setIsAddModalOpen(false);
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
