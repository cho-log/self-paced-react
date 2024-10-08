import './App.css';
import Header from './components/common/header/Header';
import CategoryFilter from './components/main/category/CategoryFilter';
import RestaurantList from './components/main/restaurant/RestaurantList';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
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
