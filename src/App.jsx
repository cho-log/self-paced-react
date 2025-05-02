import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import restaurants from "./Data/Data.jsx";
import { useState } from "react";

function App() {
  const [openModalType, setOpenModalType] = useState(null);

  const [restaurantsList, setRestaurantsList] = useState(restaurants);
  const handleAddRestaurantList = (restaurant) => {
    setRestaurantsList((prev) => [...prev, restaurant]);
  };

  const [clickedRestaurantInfo, setClickedRestaurantInfo] = useState(null);
  const handleClickedRestaurant = (name, description) => {
    const restaurant = {
      name,
      description,
    };
    setClickedRestaurantInfo(restaurant);
    setOpenModalType("detail");
  };

  const onCloseModal = () => setOpenModalType(null);
  return (
    <>
      <Header onClickAdd={() => setOpenModalType("add")} />
      <main>
        <MainContent
          onClickedDetail={handleClickedRestaurant}
          restaurants={restaurantsList}
        />
      </main>
      <aside>
        <Sidebar
          openModalType={openModalType}
          onAddRestaurant={handleAddRestaurantList}
          clickedRestaurantInfo={clickedRestaurantInfo}
          onCloseModal={onCloseModal}
        />
      </aside>
    </>
  );
}

export default App;
