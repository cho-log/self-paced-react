import "./App.css";
import AddRestaurantModal from "./components/AddRestaurantModal";
import CategoryFilter from "./components/CategoryFilter";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import RestaurantName from "./components/RestaurantName";

function App() {
  return (
    <div>
      <Header />

      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>

      <aside>
        <RestaurantName />
        <AddRestaurantModal />
      </aside>
    </div>
  );
}

export default App;
