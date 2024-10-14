import './App.css';
import Header from './components/common/header/Header';
import CategoryFilter from './components/main/categoryFilter/CategoryFilter';
import RestaurantList from './components/main/restaurant/RestaurantList';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';

import { useState } from 'react';
import { restaurants } from './components/constants/Restaurants';

function App() {
  
  const [category, setCategory] = useState('전체');
  let filteredRestaurants = [];
  if (category === '전체') {
    filteredRestaurants = restaurants;
  } else if (category !== '전체') {
    filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.category === category
    );
  }


  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
