<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> upstream/changwooj
import "./App.css";
import Body from "./pages/Body";
import Header from "./pages/Header";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";
import AddRestaurantModal from "./component/aside/AddRestaurantModal";
<<<<<<< HEAD
=======
import restaurantList from './const/restaurantList';
>>>>>>> upstream/changwooj

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch("http://localhost:3000/restaurants");
        const restaurantData = await response.json();
        setRestaurants(restaurantData);
      } catch (error) {
        console.error("레스토랑 목록 불러오기 실패: ", error);
      }
    }

    fetchRestaurant();
  }, [isAddModalOpen])

  return (
    <>
      <Header setIsAddModalOpen={setIsAddModalOpen} />
      <Body
        restaurants={restaurants}
        setIsModalOpen={setIsModalOpen}
        setSelectedRestaurant={setSelectedRestaurant}
      />
      <RestaurantInfoModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedRestaurant={selectedRestaurant}
        restaurants={restaurants}
      />
      <AddRestaurantModal
        isOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
<<<<<<< HEAD
=======
        setRestaurants={setRestaurants}
>>>>>>> upstream/changwooj
      />
    </>
  );
}

export default App;
