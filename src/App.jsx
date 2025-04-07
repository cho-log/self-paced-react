import "./App.css";
import Header from "./components/header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";


function App() {
  return <div>
  <Header />

  <main>
    <CategoryFilter />
    <RestaurantList />
  </main>
  </div>;
}

export default App;