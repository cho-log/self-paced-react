import "./App.css";
import Header from "./components/head/Header.jsx"
import RestaurantContainer from "./components/main/RestaurantContainer.jsx";
import AsideContainer from "./components/aside/AsideContainer.jsx";
import { RESTAURANTS } from "./components/main/restaurants.js";
import { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [restaurantList, setRestaurantList] = useState(RESTAURANTS);
  const [restaurantValue, setRestaurantValue] = useState({
    name : "",
    description : ""
  });

  return (
    <>
      <Header setModalState={setModalState} 
              setActiveIndex={setActiveIndex} />
      <RestaurantContainer setModalState={setModalState} 
                           setRestaurantValue={setRestaurantValue}
                           restaurantList={restaurantList} />
      {modalState && <AsideContainer setModalState={setModalState} 
                                     restaurantValue={restaurantValue}
                                     activeIndex={activeIndex} 
                                     restaurantList={restaurantList}
                                     setActiveIndex={setActiveIndex} 
                                     setRestaurantList={setRestaurantList} />}
    </>
  )
}

export default App;
