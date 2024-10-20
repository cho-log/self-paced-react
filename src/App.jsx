import "./App.css";
import Header from "./header/Header.jsx";
import CategoryFilter from "./mainbody/CategoryFilter.jsx";
import RestaurantList from "./mainbody/RestaurantList.jsx";
import RestaurantDetailModal from "./aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./aside/AddRestaurantModal.jsx";


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
