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
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

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

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleSelectRestaurant(restaurant) {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  }

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} handleSelectRestaurant={handleSelectRestaurant} />
      </main>
      <aside>
        {isModalOpen && <RestaurantDetailModal restaurant={selectedRestaurant} handleModalClose={handleModalClose} />}
        <AddRestaurantModal />
      </aside>
    </>
  );
}
