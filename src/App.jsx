import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
// import baseRestaurants from "./data/data.js";
import { useState, useEffect } from "react";

function App() {
  const [modalTypeToOpen, setModalTypeToOpen] = useState(null);

  // const [updatedRestaurants, setUpdatedRestaurants] = useState(baseRestaurants);
  // const handleUpdatedRestaurants = (restaurant) => {
  //   setUpdatedRestaurants((prev) => [...prev, restaurant]);
  // };

  const [clickedRestaurantInfo, setClickedRestaurantInfo] = useState(null);
  const handleClickedRestaurantInfo = (name, description) => {
    const restaurant = {
      name,
      description,
    };
    setClickedRestaurantInfo(restaurant);
    setModalTypeToOpen("detail");
  };

  const handleCloseModal = () => setModalTypeToOpen(null);

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
    console.log(newRestaurant);
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
