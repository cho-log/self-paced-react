import "./App.css";
import Header from "./header/Header.jsx";
import CategoryFilter from "./mainbody/CategoryFilter.jsx";
import RestaurantList from "./mainbody/RestaurantList.jsx";
import RestaurantDetailModal from "./aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./aside/AddRestaurantModal.jsx";
import { useState } from "react";
import { restaurants } from "./datas/RestaurantData";

function App() {
  const [category,setCategory] = useState("전체");

  let filteredRestaurants= category==="전체" ? restaurants : restaurants.filter((restaurant)=>restaurant.category===category);
  
  const handleCategoryChange = (newCategory) => {
    console.log("Selected category:", newCategory); // 카테고리가 변경될 때 출력
    setCategory(newCategory); // 실제 카테고리 상태 변경
  };
  
  console.log(filteredRestaurants);
  return (
    <>
      <Header />
      <main>
        
        <CategoryFilter category={category} onChangeCategory={handleCategoryChange} />
        <RestaurantList restaurants={filteredRestaurants} />

      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}


export default App;
