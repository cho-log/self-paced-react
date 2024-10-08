import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import AddRestaurantModal from "./components/AddRestaurantModal";
import RestaurantDetailModal from "./components/RestaurantDetailModal";

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
