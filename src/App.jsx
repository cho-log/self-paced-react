import "./App.css";
import Header from "./components/Header/Header";
import RestaurantCategoryFilter from "./components/Restaurant/RestaurantCategoryFilter/RestaurantCategoryFilter";
import RestaurantList from "./components/Restaurant/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/Modal/RestaurantDetailModal";
import AddRestaurantModal from "./components/Modal/AddRestaurantModal";

function App() {
  return (
    <>
      <Header />
      <main>
        <RestaurantCategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal /> 
      </aside>
    </>
  );
}

export default App;
