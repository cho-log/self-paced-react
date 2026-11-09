import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import RestaurantList from './components/RestaurantList';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import AddRestaurantModal from './components/AddRestaurantModal';

const RESTAURANT_LIST_URL = 'http://localhost:3000/restaurants';

export default function App() {
  const [category, setCategory] = useState('전체');
  const [activeModal, setActiveModal] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurantList, setRestaurantList] = useState([]);
  const [addingRestaurant, setAddingRestaurant] = useState(false);

  const filteredRestaurants = filterRestaurants(category);

  useEffect(() => {
    loadRestaurantList();
  }, []);

  async function loadRestaurantList() {
    const response = await fetch(RESTAURANT_LIST_URL);
    const newRestaurantList = await response.json();

    setRestaurantList(newRestaurantList);
  }

  function filterRestaurants() {
    return category === '전체' ? restaurantList : restaurantList.filter((restaurant) => restaurant.category === category);
  }

  function handleModalClose() {
    setActiveModal(null);
    setSelectedRestaurant(null); //선택된 음식점 해제
  }

  function handleSelectRestaurant(restaurant) {
    setSelectedRestaurant(restaurant);
    setActiveModal('restaurantDetail');
  }

  function handleOpenAddRestaurant() {
    setActiveModal('addRestaurant');
  }

  async function handleAddRestaurant(restaurant) {
    if (addingRestaurant) return;

    handleModalClose();
    setAddingRestaurant(true);

    try {
      await fetch(RESTAURANT_LIST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurant),
      });

      await loadRestaurantList();
    } finally {
      setAddingRestaurant(false);
    }
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
        {activeModal === 'addRestaurant' && <AddRestaurantModal onAddRestaurant={handleAddRestaurant} onClose={handleModalClose} />}
      </aside>
    </>
  );
}
