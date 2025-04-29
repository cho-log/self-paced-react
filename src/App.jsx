import { useState } from "react";
import "./App.css";
import Body from "./pages/Body";
import Header from "./pages/Header";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(null);

  return(
    <>
      <Header />
      <Body setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <RestaurantInfoModal setIsModalOpen={setIsModalOpen} />}
    </>
  )
}

export default App;
