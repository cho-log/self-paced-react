import "./styles/global.css";
import "./styles/layout.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="restaurant-filter-container">
          <CategoryFilter />
        </section>
        <section className="restaurant-list-container">
          <RestaurantList />
        </section>
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
