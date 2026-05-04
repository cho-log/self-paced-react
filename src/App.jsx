import { useState } from "react";
import "./App.css";
import { INIT_RESTAURANT } from "./RestaurantData";
import Header from './components/Header/Header';
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal/AddRestaurantModal";

function App() {

  const [restaurants, setRestaurants] = useState(INIT_RESTAURANT);

  const [category, setCategory]=useState("전체");
  
  const [isDetailModalOpen, setIsDetailModalOpen]=useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants=restaurants.filter((restaurant)=>{
    if(category==="전체"){
      return true;
    }
    const SameCategory=restaurant.category===category;
    return SameCategory;
  });

  const handleAddRestaurant=(newRestaurant)=>{
    setRestaurants((prev)=>[...prev, newRestaurant]);
  };

  const handleOpenModal = (item) => {
    setSelectedRestaurant(item);
    setIsDetailModalOpen(true);
  };

  return ( 
    <>
      <Header onOpenAdd={()=>setIsAddModalOpen(true)}/>
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} category={category} 
          onOpenModal={handleOpenModal} />
      </main>
      <aside>
        {isDetailModalOpen && <RestaurantDetailModal 
          restaurants={selectedRestaurant}
          onCloseModal={()=>setIsDetailModalOpen(false)}/>}
        {isAddModalOpen && <AddRestaurantModal
          onClose={()=>setIsAddModalOpen(false)} onAdd={handleAddRestaurant} />}
      </aside>
    </>
  );
}

export default App;
