import "./App.css";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
// import RestaurantDetailModal from "./components/RestaurantDetailModal.jsx";
// import AddRestaurantModal from "./components/AddRestaurantModal.jsx";
import RestaurantList from "./components/RestaurantList.jsx";
import {useState} from "react";
import {restaurants} from "/db.json"

function App() {
  const ALL = '전체';
  const [category, setCategory] = useState(ALL);
  const filteredRestaurants = category === ALL
    ? restaurants
    : restaurants.filter(restaurant => restaurant.category === category);

  return (
    <>
      <Header/>
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory}/>
        <RestaurantList restaurants={filteredRestaurants}/>
      </main>
      <aside>
        {/*<RestaurantDetailModal />*/}
        {/*<AddRestaurantModal />*/}
      </aside>
    </>
  );
}

export default App;
