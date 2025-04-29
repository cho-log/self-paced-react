import { useState } from "react";
import "./App.css";
import Body from "./pages/Body";
import Header from "./pages/Header";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";
import AddRestaurantModal from "./component/aside/AddRestaurantModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return(
    <>
      <Header setIsAddModalOpen={setIsAddModalOpen} />
      <Body setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <RestaurantInfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      {isAddModalOpen && <AddRestaurantModal setIsAddModalOpen={setIsAddModalOpen} />}
    </>
  )
}

export default App;
