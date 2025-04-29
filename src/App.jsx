import { useState } from "react";
import "./App.css";
import Body from "./pages/Body";
import Header from "./pages/Header";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";
import AddRestaurantModal from "./component/aside/AddRestaurantModal";
import restaurantList from './const/restaurantList';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [restaurants, setRestaurants] = useState(restaurantList);

  return(
    <>
      <Header setIsAddModalOpen={setIsAddModalOpen} />
      <Body restaurants={restaurants} setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <RestaurantInfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      {isAddModalOpen && <AddRestaurantModal setRestaurants={setRestaurants} setIsAddModalOpen={setIsAddModalOpen} />}
    </>
  )
}

export default App;
