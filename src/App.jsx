import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import CategoryFilter from './components/main/CategoryFilter';
import RestaurantList from './components/main/RestaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import restaurants from './data/restaurants';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const filteredRestaurants =
    selectedCategory === '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
  return (
    <>
      <Header />
      <main>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onChangeCategory={setSelectedCategory}
        />
        <RestaurantList
          restaurants={filteredRestaurants}
          onRestaurantClick={setIsModalOpen}
          onChangeSelectedRestaurant={setSelectedRestaurant}
        />
      </main>
      <aside>
        {' '}
        {isModalOpen && (
          <RestaurantDetailModal
            onCancelClick={setIsModalOpen}
            selectedRestaurant={selectedRestaurant}
          />
        )}
        {/* <AddRestaurantModal /> */}
      </aside>
    </>
  );
};

export default App;
