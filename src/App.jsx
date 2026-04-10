import { useState } from "react";
import "./App.css";
import { INIT_RESTAURANT } from "./RestaurantData";
import Header from './components/Header/Header';
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal/AddRestaurantModal";

function App() {

  const [category, setCategory]=useState("전체");

  const [isModalOpen, setIsModalOpen]=useState(false);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants=INIT_RESTAURANT.filter((restaurant)=>{
    if(category==="전체"){
      return true;
    }
    const SameCategory=restaurant.category===category;
    return SameCategory;
  })

  return ( 
    <>
      <Header />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} category={category} 
          onOpenModal={(item)=>{
            setSelectedRestaurant(item);
            setIsModalOpen(true)}} />
      </main>
      <aside>
        {isModalOpen && <RestaurantDetailModal 
          restaurants={selectedRestaurant}
          onCloseModal={()=>setIsModalOpen(false)}/>}
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
