import "./App.css";
import Header from "./components/header/Header";
import FilterableRestaurantList from "./components/main/FilterableRestaurantList";
import Aside from "./components/aside/Aside";

import { RESTAURANTS } from "./data/restaurants";
import { useState, useEffect } from "react";

function App() {
  const [category, setCategory] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [restaurants, setRestaurants] = useState(RESTAURANTS);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("레스토랑 목록 데이터를 불러오는데 실패", error);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleAddRestaurant = async (newRestaurant) => {
    try {
      await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
      });
      fetchRestaurants();
    } catch (error) {
      console.error("레스토랑 추가에 실패했습니다.", error);
    }
  };



  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      category === "전체" || restaurant.category === category
  );

  function handleOpenModal(restaurant) {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedRestaurant(null);
    setIsModalOpen(false);
  }

  function handleOpenAddModal() {
    setIsAddModalOpen(true);
  }

  function handleCloseAddModal() {
    setIsAddModalOpen(false);
  }

  return (
    <>
      <Header
        onOpenAddModal={handleOpenAddModal}
      />
      <FilterableRestaurantList
        category={category}
        onChangeCategory={setCategory}
        restaurants={filteredRestaurants}
        onOpenModal={handleOpenModal}
      />
      <Aside
        isModalOpen={isModalOpen}
        selectedRestaurant={selectedRestaurant}
        onCloseModal={handleCloseModal}

        isAddModalOpen={isAddModalOpen}
        onCloseAddModal={handleCloseAddModal}
        onAddRestaurant={handleAddRestaurant}
      />
    </>
  );
}

export default App;
