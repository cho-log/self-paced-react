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

  const filteredRestaurants = filterRestaurants(category);

  useEffect(() => {
    updateRestaurantList();
  }, []); //컴포넌트가 처음 화면을 표시할 때 실행

  async function updateRestaurantList() {
    const response = await fetch(RESTAURANT_LIST_URL);
    const newRestaurantList = await response.json();

    setRestaurantList(newRestaurantList);
  }

  function filterRestaurants(category) {
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
    await fetch(RESTAURANT_LIST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    });

    await updateRestaurantList(); //server 응답 대기
    handleModalClose();
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
