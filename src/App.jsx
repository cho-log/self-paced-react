import "./App.css";
import Header from "./components/head/Header.jsx"
import RestaurantContainer from "./components/main/RestaurantContainer.jsx";
import AsideContainer from "./components/aside/AsideContainer.jsx";
import { RESTAURANTS } from "./components/main/restaurants.js";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [restaurantList, setRestaurantList] = useState(RESTAURANTS);
  const [restaurantValue, setRestaurantValue] = useState({
    name : "",
    description : ""
  });

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} 
              setActiveIndex={setActiveIndex} />
      <RestaurantContainer setIsModalOpen={setIsModalOpen} 
                           setRestaurantValue={setRestaurantValue}
                           restaurantList={restaurantList} />
      {isModalOpen && <AsideContainer setIsModalOpen={setIsModalOpen} 
                                     restaurantValue={restaurantValue}
                                     activeIndex={activeIndex} 
                                     restaurantList={restaurantList}
                                     setActiveIndex={setActiveIndex} 
                                     setRestaurantList={setRestaurantList} />}
    </>
  )
}

export default App;
