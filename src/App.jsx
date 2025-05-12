import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { useState, useEffect } from "react";

function App() {
  const [modalTypeToOpen, setModalTypeToOpen] = useState(null);
  const handleCloseModal = () => setModalTypeToOpen(null);

  const [clickedRestaurantInfo, setClickedRestaurantInfo] = useState(null);
  const handleClickedRestaurantInfo = (name, description) => {
    const restaurant = {
      name,
      description,
    };
    setClickedRestaurantInfo(restaurant);
    setModalTypeToOpen("detail");
  };

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("http://localhost:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  const handleUpdatedRestaurants = async (restaurant) => {
    const response = await fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restaurant),
    });
    const newRestaurant = await response.json();
    setRestaurants((prev) => [...prev, newRestaurant]);
  };

  return (
    <>
      <Header openAddRestaurantModal={() => setModalTypeToOpen("add")} />
      <main>
        <MainContent
          onClickedDetailModal={handleClickedRestaurantInfo}
          restaurants={restaurants}
        />
      </main>
      <aside>
        <Sidebar
          modalTypeToOpen={modalTypeToOpen}
          onSubmitRestaurant={handleUpdatedRestaurants}
          clickedRestaurantInfo={clickedRestaurantInfo}
          onCloseModal={handleCloseModal}
        />
      </aside>
    </>
  );
}

export default App;
