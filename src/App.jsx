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
      <RestaurantInfoModal
        isOpen={isModalOpen}  // isAddModalOpen과 달리 레스토랑 이름을을 넘겨주어야함.
        setIsModalOpen={setIsModalOpen}
        restaurants={restaurants}
      />
      <AddRestaurantModal
        isOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        setRestaurants={setRestaurants}
      />
    </>
  )
}

export default App;
