import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import restaurants from "./Data/Data.jsx";
import { useState } from "react";

function App() {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);

  const handleAddRestaurantList = (restaurant) => {
    setRestaurantsList((prev) => [...prev, restaurant]);
  };
  // console.log(restaurantsList);

  return (
    <>
      <Header onAddRestaurant={handleAddRestaurantList} />
      <main>
        <MainContent />
      </main>
      <aside>
        <Sidebar />
      </aside>
    </>
  );
}

export default App;
