import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal.jsx";
import restaurantsData from "./data/restaurantsData.js";

function App() {
  const [category, setCategory] = useState("전체");

  const filterRestaurants = (category) => {
    if (category === "전체") return restaurantsData;
    else return restaurantsData.filter((restaurant) => restaurant.category === category);
  };

  const filteredRestaurants = filterRestaurants(category);

  const [modal, setModal] = useState({
    isOpen: false,
    restaurant: {
      name: "",
      description: "",
    },
  });
  console.log(modal.isOpen);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} setModal={setModal} modal={modal} />
      </main>
      <aside>
        {modal.isOpen && <RestaurantDetailModal setModal={setModal} modal={modal} />}
        {/* <AddRestaurantModal /> */}
      </aside>
    </>
  );
}

export default App;
