import { useState } from 'react';
import restaurants from './data/restaurants';
import Header from './components/Header/Header';
import CategoryFilter from './components/Main/CategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';

function App() {
  const [category, setCategory] = useState('전체');
  const [isOpen, setOpen] = useState(false);
  const [restaurantDetail, setDetail] = useState(null);
  const [addRestaurantOn, setAddBtnOn] = useState(false);
  const filteredRestaurants =
    category === '전체' ? restaurants : restaurants.filter((r) => r.category === category);
  const selectedRestaurant = restaurants.find((r) => r.id === restaurantDetail);
  return (
    <>
      <Header setAddBtnOn={setAddBtnOn} />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} setOpen={setOpen} setDetail={setDetail} />
      </main>
      <aside>
        <RestaurantDetailModal
          isOpen={isOpen}
          setOpen={setOpen}
          selectedRestaurant={selectedRestaurant}
        />
        <AddRestaurantModal setAddBtnOn={setAddBtnOn} addRestaurantOn={addRestaurantOn} />
      </aside>
    </>
  );
}

export default App;
