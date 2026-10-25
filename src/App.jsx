import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import RestaurantList from './components/RestaurantList';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import AddRestaurantModal from './components/AddRestaurantModal';

import restaurantsFile from '../db.json';

export default function App() {
  const [category, setCategory] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredRestaurants = filteringRestaurants(category);

  function filteringRestaurants(category) {
    const restaurantList = restaurantsFile.restaurants;
    const filteredRestaurants = [];

    if (category === '전체') return restaurantList;

    for (const restaurant of restaurantList) {
      if (category === restaurant.category) {
        filteredRestaurants.push(restaurant);
      }
    }

    return filteredRestaurants;
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} handleModalOpen={handleModalOpen} />
      </main>
      <aside>
        {isModalOpen && <RestaurantDetailModal handleModalClose={handleModalClose} />}
        <AddRestaurantModal />
      </aside>
    </>
  );
}
