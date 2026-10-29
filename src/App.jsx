import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import { useState } from "react";
import { restaurants } from "./data/restaurants";

function App() {
  const [category, setCategory] = useState("전체");
  const [isModalOpen,setIsModalOpen]= useState(false);
  const [selectedRestaurant,setSelectedRestaurant] =useState(null);

  const filteredRestaurants = restaurants.filter(
    (restaurant) => 
     category === "전체" || restaurant.category === category
  );

  function handleOpenModal(restaurant){
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  }

  function handleCloseModal(){
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        category={category}
        onChangeCategory={setCategory}
        restaurants={filteredRestaurants}
        onOpenModal={handleOpenModal}
      />
      <Aside 
        isModalOpen={isModalOpen}
        selectedRestaurant={selectedRestaurant}
        onCloseModal={handleCloseModal}
      />
    </>
  );
}

export default App;
