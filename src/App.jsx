import "./App.css";
import Header from './components/Header/Header';
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal/AddRestaurantModal";

function App() {
  return ( 
    <>
      <Header />
      <main>
        <CategoryFilter />
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
