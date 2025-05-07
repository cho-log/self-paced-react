import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import baseRestaurants from "./data/data.js";
import { useState } from "react";

function App() {
  const [modalTypeToOpen, setModalTypeToOpen] = useState(null);

  const [updatedRestaurants, setUpdatedRestaurants] = useState(baseRestaurants);
  const handleUpdatedRestaurants = (restaurant) => {
    setUpdatedRestaurants((prev) => [...prev, restaurant]);
  };

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

  return (
    <>
      <Header openAddRestaurantModal={() => setModalTypeToOpen("add")} />
      <main>
        <MainContent
          onClickedDetailModal={handleClickedRestaurantInfo}
          restaurants={updatedRestaurants}
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
