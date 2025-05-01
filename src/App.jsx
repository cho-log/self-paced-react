import "./App.css";
import Header from "./components/head/Header.jsx"
import RestaurantContainer from "./components/main/RestaurantContainer.jsx";
import AsideContainer from "./components/aside/AsideContainer.jsx";
import { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(false);
  const [restaurantValue, setRestaurantValue] = useState({
    name : "",
    description : ""
  })


  return (
    <>
      <Header />
      <RestaurantContainer setModalState={setModalState} setRestaurantValue={setRestaurantValue} />
      {modalState && <AsideContainer setModalState={setModalState} restaurantValue={restaurantValue} />}
    </>
  )
}

export default App;
