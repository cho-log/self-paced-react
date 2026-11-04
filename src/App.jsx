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
  const [activeModal, setActiveModal] = useState('null');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants = filterRestaurants(category);

  function filterRestaurants(category) {
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
    setActiveModal('null');
  }

  function handleSelectRestaurant(restaurant) {
    setSelectedRestaurant(restaurant);
    setActiveModal('restaurantDetail');
  }

  function handleOpenAddRestaurant() {
    setActiveModal('addRestaurant');
  }

  return (
    <>
      <Header onOpenAddRestaurant={handleOpenAddRestaurant} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} onSelectRestaurant={handleSelectRestaurant} />
      </main>
      <aside>
        {activeModal === 'restaurantDetail' && <RestaurantDetailModal restaurant={selectedRestaurant} onClose={handleModalClose} />}
        {activeModal === 'addRestaurant' && <AddRestaurantModal onClose={handleModalClose} />}
      </aside>
    </>
  );
}
